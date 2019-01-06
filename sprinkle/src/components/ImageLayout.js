import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Column from './Column';
import utils from '../utils';


class ImageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: 3,
    };
  }

  componentDidMount() {
    const columnCount = this.getColumnCount(window.innerWidth);
    const nextState = {
      ...this.state,
      columnCount,
    };
    this.setState(nextState);

    this.props.fetchImages(this.props.pageNo);

    window.addEventListener('resize', (e) => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        this.onResizeFinished();
      }, 300);
    });
  }

  getColumnCount(width) {
    return width > 960 ? 3 : width > 768 ? 2 : 1;
  }

  onResizeFinished() {
    const columnCount = this.getColumnCount(window.innerWidth);
    const nextState = {
      ...this.state,
      columnCount,
    };
    this.setState(nextState);
  }

  render() {
    const imageLists = utils.makeImageList(this.state.columnCount, this.props.images);
    return (
      <div className="container">
        {_.map(imageLists, (imageList, columnIndex) => <Column key={columnIndex} imageList={imageList} />)}
      </div>
    );
  }
}

ImageLayout.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  searchImages: PropTypes.func.isRequired,
  getNextImages: PropTypes.func.isRequired,
};

export default ImageLayout;
