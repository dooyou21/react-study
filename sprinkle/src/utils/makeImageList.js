import _ from 'lodash';

function makeImageList(columnCount, images) {
  /**
   * get new datalist (from reducer) and set State
   * 1: [a, b, c, d, e, f, g, h, i, ...]
   * 2: [a, c, e, g, i, ...][b, d, f, h, ...]
   * 3: [a, d, g, ...][b, e, h, ...][c, f, i, ...]
   */

  if (columnCount === 2) {
    const col1 = [];
    const col2 = [];
    _.forEach(images, (image, i) => {
      if (i % 2 === 0) {
        col1.push(image);
      } else {
        col2.push(image);
      }
    });
    return [col1, col2];
  } if (columnCount === 3) {
    const col1 = [];
    const col2 = [];
    const col3 = [];
    _.forEach(images, (image, i) => {
      if (i % 3 === 0) {
        col1.push(image);
      } else if (i % 3 === 1) {
        col2.push(image);
      } else {
        col3.push(image);
      }
    });
    return [col1, col2, col3];
  }
  return [images];
}

export default makeImageList;
