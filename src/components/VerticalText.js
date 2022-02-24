import React from 'react';

function VerticalText({ number, name }) {
  return (
    <div className="section-wrapper">
      <div className="section-number"> {'0' + number}</div>
      <div className="section-name linear-gradient">{name}</div>
    </div>
  );
}

export default VerticalText;
