import React from "react";
import Header from "./Header.js";
import ImageContainer from "../containers/ImageContainer.js";
import {fetchImage, searchImage} from "../api";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: 3
    }
    this._fetchImage();
  }

  _getColumnCount(width) {
    return width > 960
      ? 3
      : width > 768
        ? 2
        : 1;
  }

  _fetchImage() {
    fetchImage().then((response) => {
      console.log(response);
      /*
      this.setState({
        iamges: response.data:
      })
      */
    });
  }

  _getSearchedImage() {
    searchImage().then((response) => {
      console.log(response);
      /*
      this.setState({
        iamges: response.data:
      })
      */
    })
  }

  componentWillMount() {
    let columnCount = this._getColumnCount(window.innerWidth);
    /**
     * get new datalist (from reducer) and set State
     * 1: [a, b, c, d, e, f, g, h, i, ...]
     * 2: [a, c, e, g, i, ...][b, d, f, h, ...]
     * 3: [a, d, g, ...][b, e, h, ...][c, f, i, ...]
     */
    this.setState({
      ...this.state,
      columnCount
    });
  }

  componentDidMount() {
    window.addEventListener("resize", (e) => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this._onResizeFinished();
      }, 300);
    });
  }

  _onResizeFinished() {
    let columnCount = this._getColumnCount(window.innerWidth);
    this.setState({
      ...this.state,
      columnCount
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <ImageContainer columnCount={this.state.columnCount}></ImageContainer>
      </div>
    );
  }
}

export default App;