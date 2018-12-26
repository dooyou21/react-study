import React from "react";
const App = () => {
  return (
    <div>
      <header>
        <div className="header">
          <h1>Unsplash</h1>
          <input
            type="text"
            maxLength="20"
            placeholder="Search Free high-resolution photos"/>
        </div>
      </header>
      <div className="container">
        <div className="container__tile"></div>
        <div className="container__tile"></div>
        <div className="container__tile"></div>
        <div className="container__tile"></div>
        <div className="container__tile"></div>
        <div className="container__tile"></div>
      </div>
    </div>
  );
};

export default App;