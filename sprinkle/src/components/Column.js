import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ImageTile from './ImageTile';

const Column = ({ imageList }) => (
  <div className="container__column">
    {_.map(imageList, image => <ImageTile key={image.id} image={image} />)}
  </div>
);

Column.propTypes = {
  imageList: PropTypes.array.isRequired,
};

export default Column;
