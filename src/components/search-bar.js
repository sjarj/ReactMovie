import React, { Component } from "react";

export default class searchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchText: "", placeHolder: "Tapez votre film..." };
  }

  handleChange = event => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
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
