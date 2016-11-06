import React from 'react';

const Thanks = ({ clickHandler }) => (
  <div className="Thanks">
    <h1 className="header center orange-text light">Obrigado!</h1>
    <div className="row center">
      <button
        className="btn-large waves-effect waves-light orange"
        onClick={clickHandler}
      >
        Voltar
      </button>
    </div>
  </div>
);

export default Thanks;
