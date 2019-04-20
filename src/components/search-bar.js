import React, { Component } from 'react';

export default class searchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      placeHolder: 'Tapez votre film...',
      intervalBeforeRequest: 1000,
      lockReaquest: false,
    };
  }

  handleChange = event => {
    this.setState({ searchText: event.target.value });
    if (!this.state.lockReaquest) {
      this.setState({ lockReaquest: true });
      setTimeout(() => {
        this.search();
      }, this.state.intervalBeforeRequest);
    }
  };

  handleClick = () => {
    this.search();
  };

  search = params => {
    const { callback } = this.props;
    callback(this.state.searchText);
    this.setState({ lockReaquest: false });
  };

  render() {
    return (
      <div className="row" style={style}>
        <div className="col-lg-8">
          <input
            className="form-control input-lg"
            type="text"
            onChange={this.handleChange}
            placeholder={this.state.placeHolder}
          />
        </div>
      </div>
    );
  }
}

const style = {
  marginTop: `2rem`,
  marginBottom: `5rem`,
};
