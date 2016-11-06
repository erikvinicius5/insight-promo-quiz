import React from 'react';
import Option from './Option';

const Options = ({ list, selected, handleSelect }) => (
  <div className="Options">
    {list.map((text, idx) =>
      <Option
        key={idx}
        text={text}
        onClick={() => handleSelect(idx)}
        selected={selected === idx}
      />
    )}
  </div>
);

export default Options;
