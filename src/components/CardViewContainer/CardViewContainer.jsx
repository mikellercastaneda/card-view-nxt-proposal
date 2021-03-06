import React, { useEffect } from 'react';
// Redux
import { getCards } from '../../store/actions/cardsActions';
import { connect } from 'react-redux';
//Components
import CardViewItem from '../CardViewItem/CardViewItem';
//Utils
import { uniqueId } from 'lodash-es';

const CardViewContainer = ({ cards, getCards }) => {

  useEffect(() => {
    getCards();
    // eslint-disable-next-line
  }, []);

  const getHubLanes = (hubName) => (
    Object.entries(cards.lanes).filter(([laneName, lane]) =>
      lane[0]['OHUB'] === hubName
    )
  );

  return (
    <>
      {!Object.keys(cards.hubs).length && !Object.keys(cards.lanes).length ?
        <h4>Loading...</h4> :
        Object.entries(cards.hubs).map(([hubName, hub]) => (
          < CardViewItem key={uniqueId()} title={hubName} hub={hub} lanes={getHubLanes(hubName)} />
        ))
      }
    </>
  );
}

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
  cards: state.cardsReducer.cards
});

export default connect(mapStateToProps, { getCards })(CardViewContainer);