import React from 'react';
//Components
import CardInput from '../CardInput/CardInput'
//Utils
import { uniqueId } from 'lodash-es';

const CardViewItem = ({ title, item }) => {
  const cardKey = uniqueId();
  return (
    <div className="card accordion">
      <input type="checkbox" name="collapse" id={cardKey} defaultChecked />
      <h2 className="handle">
        <label className="card-title" htmlFor={cardKey}>{title}</label>
      </h2>
      <div className="accordion-content">
        <p className="card-subtitle">Hub Capacity</p>
        <div className="card-dates-grid">
          {item
            .filter(({ name }) => name === 'hubCapacity')
            .map(({ dt, value }) =>
              <CardInput key={uniqueId()} label={dt} value={Number(value).toFixed(2)} />
            )}
        </div>
        <div className="card-inputs-grid">
          {item
            .filter(({ name }) => name !== 'hubCapacity')
            .map(({ name, value }) =>
              <CardInput key={uniqueId()} label={name} value={value} />
            )}
        </div>

        <div className="card-childs-grid">
          <div className="card accordion">
            <input type="checkbox" name="collapse" id="test" defaultChecked />
            <h2 className="handle">
              <label className="card-title" htmlFor="test">LABEL</label>
            </h2>
            <div className="accordion-content">
              <div className="card-dates-grid">
                <CardInput key={uniqueId()} label="label" value="0" />
                <CardInput key={uniqueId()} label="label" value="0" />
                <CardInput key={uniqueId()} label="label" value="0" />
                <CardInput key={uniqueId()} label="label" value="0" />
                <CardInput key={uniqueId()} label="label" value="0" />
              </div>
            </div>
          </div>
          <div className="card accordion">
            <input type="checkbox" name="collapse" id="test" defaultChecked />
            <h2 className="handle">
              <label className="card-title" htmlFor="test">LABEL</label>
            </h2>
            <div className="accordion-content">
              <div className="card-dates-grid">
                <CardInput key={uniqueId()} label="label" value="0" />
                <CardInput key={uniqueId()} label="label" value="0" />
                <CardInput key={uniqueId()} label="label" value="0" />
                <CardInput key={uniqueId()} label="label" value="0" />
                <CardInput key={uniqueId()} label="label" value="0" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardViewItem;