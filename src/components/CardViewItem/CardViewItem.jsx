import React from 'react';
//Components
import CardInput from '../CardInput/CardInput'
//Utils
import { uniqueId } from 'lodash-es';

const CardViewItem = ({ title, item }) => {
  const cardViewItemKey = uniqueId();
  return (
    <div className="card-view-item accordion">
      <input type="checkbox" name="collapse" id={cardViewItemKey} defaultChecked />
      <h2 className="handle">
        <label className="card-view-item_title" htmlFor={cardViewItemKey}>{title}</label>
      </h2>
      <div className="content">
        <p className="card-view-item_sub-title">Hub Capacity</p>
        <div className="card-view-item_dates-grid">
          {item
            .filter(({ name }) => name === 'hubCapacity')
            .map(({ dt, value }) =>
              <CardInput key={uniqueId()} label={dt} value={Number(value).toFixed(2)} />
            )}
        </div>
        <div className="card-view-item_inputs-grid">
          {item
            .filter(({ name }) => name !== 'hubCapacity')
            .map(({ name, value }) =>
              <CardInput key={uniqueId()} label={name} value={value} />
            )}
        </div>
      </div>
    </div>
  );
}

export default CardViewItem;