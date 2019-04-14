import React, { Component } from 'react';

export default class searchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      placeHolder: 'Tapez votre film...',
    };
  }

  handleChange = event => {
    this.setState({ searchText: event.target.value });
  };

  handleClick = () => {
    const { callback } = this.props;
    callback(this.state.searchText);
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-8 input-group">
          <input
            className="form-control input-lg"
            type="text"
            onChange={this.handleChange}
            placeholder={this.state.placeHolder}
          />
          <span className="input-group-item">
            <button className="btn btn-secondary" onClick={this.handleClick}>
              Go
            </button>
          </span>
        </div>
      </div>
    );
  }
}
