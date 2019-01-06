import React from 'react';

const ImageTile = ({ image }) => {
  console.log(image.urls.regular);

  const sectionStyle = {
    backgroundImage: `url(${image.urls.regular})`,
  };
  return (
    <div
      className="container__tile"
      onClick={() => {
        window.open(image.links.html);
      }}
      style={sectionStyle}
    />
  );
};

export default ImageTile;
