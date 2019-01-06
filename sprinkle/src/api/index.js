// console.log(process.env.UNSPLASH_ACCESS_KEY);

import Unsplash, { toJson } from 'unsplash-js';
// import {API_URL} from "unsplash-js/lib/constants";

const unsplash = new Unsplash({ applicationId: process.env.UNSPLASH_ACCESS_KEY, secret: process.env.UNSPLASH_SECRET_KEY, callbackUrl: '' });

const pageLimit = 15;

export function fetchImages(pageNo) {
  const offset = pageNo * pageLimit + 1;
  console.log(offset, pageLimit);
  return unsplash
    .photos
    .listCuratedPhotos(offset, pageLimit, 'latest')
    .then(toJson);
}

export function searchImages(keyword, pageNo) {
  return unsplash
    .search
    .photos(keyword, pageNo)
    .then(toJson);
}
