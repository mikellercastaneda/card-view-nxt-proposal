import React from 'react';
//Components
import CardInput from '../CardInput/CardInput'
//Utils
import { uniqueId } from 'lodash-es';

const CardViewItem = ({ title, hub, lanes }) => {
  const cardKey = uniqueId();
  return (
    <>
      <div className="card accordion">
        <input type="checkbox" name="collapse" id={cardKey} />
        <h2 className="handle">
          <label className="card-title" htmlFor={cardKey}>{title}</label>
        </h2>
        <div className="accordion-content">
          <p className="card-subtitle">Hub Capacity</p>
          <div className="card-dates-grid">
            {hub
              .filter(({ name }) => name === 'hubCapacity')
              .map(({ dt, value }) =>
                <CardInput key={uniqueId()} label={dt} value={Number(value).toFixed(2)} />
              )}
          </div>
          <div className="card-inputs-grid">
            {hub
              .filter(({ name }) => name !== 'hubCapacity')
              .map(({ name, value }) =>
                <CardInput key={uniqueId()} label={name} value={value} />
              )}
          </div>

          <div className="card-childs-grid">
            {lanes
              .map(([laneName, lane]) => {
                const laneKey = uniqueId();
                return (
                  <div key={uniqueId()} className="grid-item">
                    <div className="card accordion">
                      <input type="checkbox" name="collapse" id={laneKey} />
                      <h2 className="handle">
                        <label className="card-title" htmlFor={laneKey}>{laneName}</label>
                      </h2>
                      <div className="accordion-content">
                        <div className="card-dates-grid">
                          {lane.map(({ name, value }) =>
                            <CardInput key={uniqueId()} label={name} value={value} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </>
  );
}

export default CardViewItem;