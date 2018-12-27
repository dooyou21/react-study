import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header">
        <h1>Unsplash</h1>
        <input
          type="text"
          maxLength="20"
          placeholder="Search Free high-resolution photos"/>
      </div>
    </header>
  );
}

export default Header;
