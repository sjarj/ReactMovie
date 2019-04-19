import React, { Component } from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import VideoDetail from '../components/video-detail';
import Video from '../components/video';
import axios from 'axios';

const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL =
  'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images';
const API_KEY = 'api_key=bcf12afe08295526660784d1136fe0e6';
const SEARCH_URL = 'search/movie?language=fr&include_adulte=false';

export default class app extends Component {
  constructor(props) {
    super(props);

    this.state = { moviesList: {}, currentMovie: {} };
  }

  componentWillMount = () => {
    this.initMovies();
  };

  initMovies = () => {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(res => {
      this.setState(
        {
          moviesList: res.data.results.slice(1, 6),
          currentMovie: res.data.results[0],
        },
        () => {
          this.applyVideoToCurrentMovie();
        }
      );
    });
  };

  applyVideoToCurrentMovie = () => {
    axios
      .get(
        `${API_END_POINT}movie/${
          this.state.currentMovie.id
        }?${API_KEY}&append_to_response=videos&include_adult=false`
      )
      .then(res => {
        const youtubeKey = res.data.videos.results[0].key;
        const newCurrentMovieState = this.state.currentMovie;
        newCurrentMovieState.videoId = youtubeKey;
        this.setState({ currentMovie: newCurrentMovieState });
      });
  };

  onClickListItem = movie => {
    this.setState({ currentMovie: movie }, () => {
      this.applyVideoToCurrentMovie();
      this.setRecommendation();
    });
  };

  onClickSearch = searchText => {
    if (searchText) {
      axios
        .get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`)
        .then(res => {
          if (res.data && res.data.results[0]) {
            if (res.data.results[0] != this.state.currentMovie.id) {
              this.setState({ currentMovie: res.data.results[0] }, () => {
                this.applyVideoToCurrentMovie();
                this.setRecommendation();
              });
            }
          }
        });
    }
  };

  setRecommendation = () => {
    axios
      .get(
        `${API_END_POINT}movie/${
          this.state.currentMovie.id
        }/recommendations?${API_KEY}&language=fr`
      )
      .then(res => {
        this.setState({ moviesList: res.data.results.slice(0, 5) });
      });
  };

  render() {
    const renderMoviesList = () => {
      if (this.state.moviesList.length >= 5) {
        return (
          <VideoList
            callback={this.onClickListItem}
            moviesList={this.state.moviesList}
          />
        );
      }
    };
    return (
      <div>
        <SearchBar callback={this.onClickSearch} />
        <div className="row">
          <div className="col-sm-8">
            <Video videoId={this.state.currentMovie.videoId} />
            <VideoDetail
              title={this.state.currentMovie.title}
              description={this.state.currentMovie.overview}
            />
          </div>
          <div className="col-sm-4">{renderMoviesList()}</div>
        </div>
      </div>
    );
  }
}
