import React from "react";
import ImageTile from "./ImageTile.js";

const Column = () => {
  return (
    <div className="container__column">
      <ImageTile></ImageTile>
      <ImageTile></ImageTile>
    </div>
  );
}

export default Column;