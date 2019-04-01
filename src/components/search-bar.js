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
      <input
        onChange={this.handleChange}
        placeholder={this.state.placeHolder}
      />
    );
  }
}
