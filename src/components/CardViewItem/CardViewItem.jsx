import React, { useState } from 'react';
// Redux
import { addAdjustment } from '../../store/actions/cardsActions';
import { connect } from 'react-redux';
//Components
import CardInput from '../CardInput/CardInput'
//Utils
import { uniqueId } from 'lodash-es';

const LABELS_DICTIONARY = {
  hubIlodAvg: 'ILOD AVG',
  hubBumpshift: 'BUMPSHIFT',
  hubStackingPenalty: 'STACKING PENALTY',
  hubForecastBufferIB: 'FCST BUFFER IB',
  hubForecastBufferOB: 'FCST BUFFER OB',
  hubCapacityConstrained: 'CAP CONSTRAINED',
  hubTierBonus: 'TIER BONUS',
  AVG_TRANSIT: 'AVG TRANSIT',
  PRICE: 'PRICE',
  ACTIVE: 'ACTIVE',
  laneTransitOverride: 'TRANSIT OVERRIDE',
  WEEKLY_CAP: 'WEEKLY CAP'
}

const CardViewItem = ({ title, hub, lanes, addAdjustment }) => {
  const cardKey = uniqueId();

  const [hasChanged, setHasChanged] = useState(false);

  const handleChange = event => {
    console.log(event.target.value);
    //add change to the state
    addAdjustment(event.target.value);
    setHasChanged(true);
  }

  const displayHubCapacityInputs = (hub) => (
    hub.filter(({ name }) => name === 'hubCapacity')
      .map(({ dt, value }) =>
        <CardInput
          key={uniqueId()}
          label={dt}
          value={Number(value).toFixed(2)}
          hasChanged={hasChanged}
          handleChange={handleChange}
        />
      )
  );

  const displayHubInputs = (hub) => (
    hub.filter(({ name }) => name !== 'hubCapacity')
      .map(({ name, value }) =>
        <CardInput key={uniqueId()} label={LABELS_DICTIONARY[name]} value={value} />
      )
  );

  const displayHubLanes = (lanes) => (
    lanes.map(([laneName, lane]) => {
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
                  <CardInput key={uniqueId()} label={LABELS_DICTIONARY[name]} value={value} />
                )}
              </div>
            </div>
          </div>
        </div>
      )
    })
  );

  return (
    <div className="card accordion">
      <input type="checkbox" name="collapse" id={cardKey} defaultChecked />
      <h2 className="handle">
        <label className="card-title" htmlFor={cardKey}>{title}</label>
      </h2>
      <div className="accordion-content">
        <p className="card-subtitle">Hub Capacity</p>
        <div className="card-dates-grid">
          {displayHubCapacityInputs(hub)}
        </div>
        <div className="card-inputs-grid">
          {displayHubInputs(hub)}
        </div>
        <div className="card-childs-grid">
          {displayHubLanes(lanes)}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  adjustments: state.cardsReducer.adjustments
});

export default connect(mapStateToProps, { addAdjustment })(CardViewItem);