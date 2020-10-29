import React from 'react';

const CardInput = ({
  label,
  value,
  handleChange,
  handleReset,
  hasChanged,
  hub,
  name,
  dt
}) => {
  return (
    <div className={hasChanged ? "card-input card-input-changed" : "card-input"}>
      <div className="card-input-header">
        <label>{label}</label>
      </div>
      <div className="card-input-content">
        <input
          type="text"
          data-hub={hub}
          data-name={name}
          data-dt={dt}
          defaultValue={value}
          onBlur={handleChange}
        />
      </div>
      <div
        className="card-input-changed-reset-button"
        data-hub={hub}
        data-name={name}
        data-dt={dt}
        onClick={handleReset}
      >
        <i className="fas fa-undo-alt fa-xs"></i>
      </div>
    </div>
  );
}

export default CardInput;