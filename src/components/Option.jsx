import React from 'react';
import classNames from 'classnames';

const classes = selected =>
  `waves-effect waves-light btn lighten-2 ${selected ? 'orange' : 'blue'}`;

const Option = ({ text, selected, onClick }) => (
  <div className="Option">
    <a className={classes(selected)} onClick={onClick}>
      {text}
    </a>
  </div>
);

export default Option;
