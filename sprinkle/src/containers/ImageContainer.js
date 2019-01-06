import { connect } from 'react-redux';
import { API_URL } from 'unsplash-js/lib/constants';
import {
  getImages, getNextImages,
} from '../actions';

import { fetchImages, searchImages } from '../api';
import ImageLayout from '../components/ImageLayout';

const mapStateToProps = (state) => { // ownProps는 어디에 쓰는거지? 왜 있는거지?
  const { images, keyword, pageNo } = state;
  return ({
    images,
    keyword,
    pageNo,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchImages: (pageNo) => {
    fetchImages(pageNo).then(images => dispatch(getImages(images)));
  },
  searchImages: (keyword, pageNo) => {
    searchImages(keyword, pageNo).then(images => dispatch(getImages(images)));
  },
  getNextImages: (keyword, pageNo) => {
    // TODO: 계산해서 다음꺼 가져와야함..
    dispatch(getNextImages(keyword, pageNo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageLayout);
