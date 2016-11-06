import React from 'react';

const Home = ({ clickHandler }) => (
  <div className="Home">
    <h1 className="header center orange-text light">Quiz</h1>
    <div className="row center">
      <button
        className="btn-large waves-effect waves-light orange"
        onClick={clickHandler}
      >
        Começar
      </button>
    </div>
  </div>
);

export default Home;
