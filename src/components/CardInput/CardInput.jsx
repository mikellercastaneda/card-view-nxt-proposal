import React from 'react';

const CardInput = ({ label, value }) => {
  return (
    <div className="card-input">
      <div className="card-input_header">
        <label>{label}</label>
      </div>
      <div className="card-input_body">
        <input type="text" defaultValue={value} />
      </div>
    </div>
  );
}

export default CardInput;