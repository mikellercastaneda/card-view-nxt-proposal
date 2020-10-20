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

  return (
    <>
      {
        !Object.keys(cards.hubs).length ?
          <p>EMPTY CARDS HUBS</p> :
          Object.entries(cards.hubs).map(([key, value]) =>
            <CardViewItem key={uniqueId()} title={key} item={value} />
          )
      }
    </>
  );
}

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
  cards: state.cardsReducer.cards
});

export default connect(mapStateToProps, { getCards })(CardViewContainer);