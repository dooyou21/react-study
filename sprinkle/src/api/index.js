// console.log(process.env.UNSPLASH_ACCESS_KEY);

import Unsplash, {toJson} from 'unsplash-js';
// import {API_URL} from "unsplash-js/lib/constants";

const unsplash = new Unsplash({applicationId: process.env.UNSPLASH_ACCESS_KEY, secret: process.env.UNSPLASH_SECRET_KEY, callbackUrl: ""});
// unsplash   .auth .userAuthentication(process.env.UNSPLASH_AUTHORIZATION_CODE)
//   .then(toJson)  .then(json => {     console.log(json);   });

export const fetchImage = () => {
  return unsplash
    .photos
    .listCuratedPhotos(1, 15, "latest")
    .then(toJson);
}
export const searchImage = (keyword, pageNo) => {
  return unsplash
    .search
    .photos(keyword, pageNo)
    .then(toJson);
}