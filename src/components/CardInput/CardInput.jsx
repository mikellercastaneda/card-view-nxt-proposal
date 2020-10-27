import React from 'react';

const CardInput = ({ label, value, handleChange, hasChanged }) => {
  return (
    <div className={hasChanged ? "card-input card-input-changed" : "card-input"}>
      <div className="card-input-header">
        <label>{label}</label>
      </div>
      <div className="card-input-content">
        <input type="text" defaultValue={value} onChange={handleChange} />
      </div>
      <div className="card-input-changed-reset-button">
        <i className="fas fa-undo-alt fa-xs"></i>
      </div>
    </div>
  );
}

export default CardInput;