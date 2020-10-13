import React from 'react';

import CardInput from '../CardInput/CardInput'

const CardViewItem = ({ title, subtitle }) => {
  return (
    <>
      <div className="card-view-item">
        <p className="card-view-item_title">{title}</p>
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
    </>
  );
}

export default CardViewItem;