import React from "react";

import Column from "../components/Column.js"

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  _getDividedContainer() {
    switch (this.props.columnCount) {
      case 1:
        return (
          <div className="container">
            <Column></Column>
          </div>
        );
      case 2:
        return (
          <div className="container">
            <Column></Column>
            <Column></Column>
          </div>
        );
      case 3:
        return (
          <div className="container">
            <Column></Column>
            <Column></Column>
            <Column></Column>
          </div>
        );
      default:
        return (
          <div className="container">
            <Column></Column>
          </div>
        );
    }
  }

  render() {
    return this._getDividedContainer();
  }
}

export default ImageContainer;