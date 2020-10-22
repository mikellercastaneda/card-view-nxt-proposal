import React, { useEffect, useState } from 'react';
// Redux
import { getCards } from '../../store/actions/cardsActions';
import { connect } from 'react-redux';
//Infinite Scroll Component
import InfiniteScroll from "react-infinite-scroll-component";
//Components
import CardViewItem from '../CardViewItem/CardViewItem';
//Utils
import { uniqueId } from 'lodash-es';

const OFFSET = 5;
const value = [
  {
    "HUB": "ATLANTA",
    "dt": "2020-10-15",
    "name": "hubCapacity",
    "value": 16.243496620879313
  },
  {
    "HUB": "ATLANTA",
    "dt": "2020-10-16",
    "name": "hubCapacity",
    "value": 10
  },
  {
    "HUB": "ATLANTA",
    "dt": "2020-10-17",
    "name": "hubCapacity",
    "value": 15.228508115461949
  },
  {
    "HUB": "ATLANTA",
    "dt": "2020-10-18",
    "name": "hubCapacity",
    "value": 14.558546621439916
  },
  {
    "HUB": "ATLANTA",
    "dt": "2020-10-19",
    "name": "hubCapacity",
    "value": 14.333480825381173
  },
  {
    "HUB": "ATLANTA",
    "dt": "2020-10-20",
    "name": "hubCapacity",
    "value": 35.33773530064198
  },
  {
    "HUB": "ATLANTA",
    "dt": "2020-10-21",
    "name": "hubCapacity",
    "value": 27.770152556440195
  },
  {
    "HUB": "ATLANTA",
    "dt": "2020-10-22",
    "name": "hubCapacity",
    "value": 45.24349662087931
  },
  {
    "HUB": "ATLANTA",
    "dt": "2020-10-23",
    "name": "hubCapacity",
    "value": 22.38135337457257
  },
  {
    "HUB": "ATLANTA",
    "dt": "2020-10-24",
    "name": "hubCapacity",
    "value": 17.22850811546195
  },
  {
    "HUB": "ATLANTA",
    "name": "hubIlodAvg",
    "value": 96.1952
  },
  {
    "HUB": "ATLANTA",
    "name": "hubBumpshift",
    "value": "Y"
  },
  {
    "HUB": "ATLANTA",
    "name": "hubStackingPenalty",
    "value": 1000
  },
  {
    "HUB": "ATLANTA",
    "name": "hubForecastBufferIB",
    "value": 0
  },
  {
    "HUB": "ATLANTA",
    "name": "hubForecastBufferOB",
    "value": 0
  },
  {
    "HUB": "ATLANTA",
    "name": "hubCapacityConstrained",
    "value": "N"
  },
  {
    "HUB": "ATLANTA",
    "name": "hubTierBonus",
    "value": 0
  }
];

const CardViewContainerInfinity = ({ cards, getCards }) => {

  useEffect(() => {
    getCards();
    // eslint-disable-next-line
  }, []);

  const [items, setItems] = useState(Array.from({ length: OFFSET }));

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems([...items].concat(Array.from({ length: OFFSET })));
    }, 900);
  };

  return (
    <div>
      {/* <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}> */}
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {items.map((i, index) => (
          <CardViewItem key={uniqueId()} title='{HUB}' item={value} />
        ))}
      </InfiniteScroll>
      {/* </div> */}
    </div>
  );
}

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
  cards: state.cardsReducer.cards
});

export default connect(mapStateToProps, { getCards })(CardViewContainerInfinity);