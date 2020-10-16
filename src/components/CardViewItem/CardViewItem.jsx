import React, { useEffect } from 'react';
// Redux
import { getCards } from '../../store/actions/cardsActions';
import { connect } from 'react-redux';
//Components
import CardInput from '../CardInput/CardInput'
//Utils
import { uniqueId } from 'lodash-es';

const CardViewItem = ({ title, subtitle, getCards }) => {
  //checar la doc de useEffect, hay veces que no se debeusar la dependencia
  const cardViewItemKey = uniqueId();
  useEffect(() => {
    getCards()
    // eslint-disable-next-line
  }, []);
  return (
    <div className="card-view-item accordion">
      <input type="checkbox" name="collapse" id={cardViewItemKey} defaultChecked />
      <h2 className="handle">
        <label className="card-view-item_title" htmlFor={cardViewItemKey}>{title}</label>
      </h2>
      <div className="content">
        <p className="card-view-item_sub-title">{subtitle}</p>
        <div className="card-view-item_dates-grid">
          <CardInput label="13-OCT" value="80" />
          <CardInput label="14-OCT" value="80" />
          <CardInput label="15-OCT" value="80" />
          <CardInput label="16-OCT" value="80" />
          <CardInput label="17-OCT" value="80" />
          <CardInput label="18-OCT" value="80" />
          <CardInput label="19-OCT" value="80" />
          <CardInput label="20-OCT" value="80" />
          <CardInput label="21-OCT" value="80" />
          <CardInput label="22-OCT" value="80" />
          <CardInput label="23-OCT" value="80" />
        </div>
        <div className="card-view-item_inputs-grid">
          <CardInput label="BUMPSHIFT_FLG" value="Y" />
          <CardInput label="STACKING_PENALTY" value="1000" />
          <CardInput label="ILOD_AVG" value="0.0" />
          <CardInput label="FCST_BUFFER_IB" value="0.0" />
          <CardInput label="FCST_BUFFER_OB" value="0.0" />
          <CardInput label="CAP_CONSTRAINED" value="N" />
          <CardInput label="TIER_BONUS" value="0.0" />
        </div>
      </div>
    </div>
  );
}

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
  cards: state.cards
});

// Object as a second param of any action 
export default connect(mapStateToProps, { getCards })(CardViewItem);