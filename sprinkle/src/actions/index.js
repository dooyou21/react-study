import ActionTypes from './ActionTypes';
import { fetchImage, searchImage } from '../api';

export function fetchImages() { // 이거 안쓰는데...
  fetchImage(0).then((images) => {
    console.log(images);
  });
  return {
    type: ActionTypes.FETCH_IMAGES,
  };
}

export function getImages(images) {
  return {
    type: ActionTypes.GET_IMAGES,
    images,
  };
}

export function searchImages(keyword, pageNo) {
  const images = searchImage(keyword, pageNo).then(response => response.data);
  return {
    type: ActionTypes.SEARCH_IMAGES,
    keyword,
    images,
  };
}

export function getNextImages(pageNo) {
  const images = fetchImage(pageNo).then(response => response.data);
  return {
    type: ActionTypes.GET_NEXT_IMAGES,
    pageNo,
    images,
  };
}
