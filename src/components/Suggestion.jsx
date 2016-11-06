import React from 'react';

const Suggestion = ({ idx, answer, handleChange }) => (
  <div className="Suggestion">
    <div className="input-field col s12">
      <textarea
        onChange={e => handleChange(idx, e.target.value)}
        className="materialize-textarea"
      >
        {answer}
      </textarea>
      <label>Sugestão</label>
    </div>
  </div>
);

export default Suggestion;
