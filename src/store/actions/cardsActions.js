//import axios from 'axios';
//import actionTypes
import {
  GET_CARDS,
  ADD_ADJUSTMENT
} from './types';

//export functions and dispatchers
//dispatchers is for integration
export const getCards = () => {
  return{
    type: GET_CARDS,
    payload: {
      "hubs": {
        "ATLANTA": [
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
        ],
        "BALTIMORE": [
          {
            "HUB": "BALTIMORE",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10.848691628463868
          },
          {
            "HUB": "BALTIMORE",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 18.003332592921623
          },
          {
            "HUB": "BALTIMORE",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10.25959216804059
          },
          {
            "HUB": "BALTIMORE",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BALTIMORE",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BALTIMORE",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 12.375768925200504
          },
          {
            "HUB": "BALTIMORE",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 12.072741683799649
          },
          {
            "HUB": "BALTIMORE",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BALTIMORE",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 12.003332592921623
          },
          {
            "HUB": "BALTIMORE",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10.25959216804059
          },
          {
            "HUB": "BALTIMORE",
            "name": "hubIlodAvg",
            "value": 101.42937500000001
          },
          {
            "HUB": "BALTIMORE",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "BALTIMORE",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "BALTIMORE",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "BALTIMORE",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "BALTIMORE",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "BALTIMORE",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "BARSTOW": [
          {
            "HUB": "BARSTOW",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BARSTOW",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BARSTOW",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BARSTOW",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "BARSTOW",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BARSTOW",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BARSTOW",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BARSTOW",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BARSTOW",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BARSTOW",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "BARSTOW",
            "name": "hubIlodAvg",
            "value": 90.76964444444444
          },
          {
            "HUB": "BARSTOW",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "BARSTOW",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "BARSTOW",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "BARSTOW",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "BARSTOW",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "BARSTOW",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "CALGARY": [
          {
            "HUB": "CALGARY",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "CALGARY",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "CALGARY",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "CALGARY",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "CALGARY",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "CALGARY",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "CALGARY",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "CALGARY",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "CALGARY",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "CALGARY",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "CALGARY",
            "name": "hubIlodAvg",
            "value": 90.76964444444444
          },
          {
            "HUB": "CALGARY",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "CALGARY",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "CALGARY",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "CALGARY",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "CALGARY",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "CALGARY",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "CHAMBRSBRG": [
          {
            "HUB": "CHAMBRSBRG",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CHAMBRSBRG",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 22.38901125765713
          },
          {
            "HUB": "CHAMBRSBRG",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 47.73839928708165
          },
          {
            "HUB": "CHAMBRSBRG",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 20.937132694069675
          },
          {
            "HUB": "CHAMBRSBRG",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 69.61358872003353
          },
          {
            "HUB": "CHAMBRSBRG",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 50.53305439208458
          },
          {
            "HUB": "CHAMBRSBRG",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 45.0957780690178
          },
          {
            "HUB": "CHAMBRSBRG",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 38.24582867768754
          },
          {
            "HUB": "CHAMBRSBRG",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 29.38901125765713
          },
          {
            "HUB": "CHAMBRSBRG",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 52.73839928708165
          },
          {
            "HUB": "CHAMBRSBRG",
            "name": "hubIlodAvg",
            "value": 79.1759219088937
          },
          {
            "HUB": "CHAMBRSBRG",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "CHAMBRSBRG",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "CHAMBRSBRG",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "CHAMBRSBRG",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "CHAMBRSBRG",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "CHAMBRSBRG",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "CHARLOTTE": [
          {
            "HUB": "CHARLOTTE",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CHARLOTTE",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 11.577653154100737
          },
          {
            "HUB": "CHARLOTTE",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 20.33440854621105
          },
          {
            "HUB": "CHARLOTTE",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 12.786974680894673
          },
          {
            "HUB": "CHARLOTTE",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10.164633843973064
          },
          {
            "HUB": "CHARLOTTE",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CHARLOTTE",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 17.127411872482185
          },
          {
            "HUB": "CHARLOTTE",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 11.687678830242824
          },
          {
            "HUB": "CHARLOTTE",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 11.577653154100737
          },
          {
            "HUB": "CHARLOTTE",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 18.33440854621105
          },
          {
            "HUB": "CHARLOTTE",
            "name": "hubIlodAvg",
            "value": 149.66680555555556
          },
          {
            "HUB": "CHARLOTTE",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "CHARLOTTE",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "CHARLOTTE",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "CHARLOTTE",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "CHARLOTTE",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "CHARLOTTE",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "CHICAGO": [
          {
            "HUB": "CHICAGO",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 100
          },
          {
            "HUB": "CHICAGO",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 100
          },
          {
            "HUB": "CHICAGO",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 100
          },
          {
            "HUB": "CHICAGO",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 100
          },
          {
            "HUB": "CHICAGO",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 100
          },
          {
            "HUB": "CHICAGO",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 100
          },
          {
            "HUB": "CHICAGO",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 100
          },
          {
            "HUB": "CHICAGO",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 100
          },
          {
            "HUB": "CHICAGO",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 100
          },
          {
            "HUB": "CHICAGO",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 100
          },
          {
            "HUB": "CHICAGO",
            "name": "hubIlodAvg",
            "value": 92.20330000000001
          },
          {
            "HUB": "CHICAGO",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "CHICAGO",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "CHICAGO",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "CHICAGO",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "CHICAGO",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "CHICAGO",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "CINCY": [
          {
            "HUB": "CINCY",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CINCY",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CINCY",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CINCY",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CINCY",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CINCY",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 11.784902544988267
          },
          {
            "HUB": "CINCY",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 11.633263598021152
          },
          {
            "HUB": "CINCY",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CINCY",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CINCY",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "CINCY",
            "name": "hubIlodAvg",
            "value": 121.34771784232366
          },
          {
            "HUB": "CINCY",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "CINCY",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "CINCY",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "CINCY",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "CINCY",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "CINCY",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "DALLAS": [
          {
            "HUB": "DALLAS",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "DALLAS",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "DALLAS",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 19.705121421786487
          },
          {
            "HUB": "DALLAS",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 12.165151389911685
          },
          {
            "HUB": "DALLAS",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 30.826607393480685
          },
          {
            "HUB": "DALLAS",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 19.214050750608465
          },
          {
            "HUB": "DALLAS",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 23.506249186409775
          },
          {
            "HUB": "DALLAS",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 24.62456348990787
          },
          {
            "HUB": "DALLAS",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "DALLAS",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 29.705121421786487
          },
          {
            "HUB": "DALLAS",
            "name": "hubIlodAvg",
            "value": 85.29576642335769
          },
          {
            "HUB": "DALLAS",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "DALLAS",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "DALLAS",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "DALLAS",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "DALLAS",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "DALLAS",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "DENVER": [
          {
            "HUB": "DENVER",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 17.049564827191887
          },
          {
            "HUB": "DENVER",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 20.60972205524832
          },
          {
            "HUB": "DENVER",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "DENVER",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "DENVER",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10.45433542994028
          },
          {
            "HUB": "DENVER",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 15.183308895353129
          },
          {
            "HUB": "DENVER",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 15.299888141917108
          },
          {
            "HUB": "DENVER",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 19.049564827191887
          },
          {
            "HUB": "DENVER",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 17.60972205524832
          },
          {
            "HUB": "DENVER",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "DENVER",
            "name": "hubIlodAvg",
            "value": 90.2574887587495
          },
          {
            "HUB": "DENVER",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "DENVER",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "DENVER",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "DENVER",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "DENVER",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "DENVER",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "EDMONTON": [
          {
            "HUB": "EDMONTON",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 47
          },
          {
            "HUB": "EDMONTON",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "EDMONTON",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "EDMONTON",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "EDMONTON",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 46
          },
          {
            "HUB": "EDMONTON",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 47
          },
          {
            "HUB": "EDMONTON",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 47
          },
          {
            "HUB": "EDMONTON",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 47
          },
          {
            "HUB": "EDMONTON",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "EDMONTON",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "EDMONTON",
            "name": "hubIlodAvg",
            "value": 90.76964444444444
          },
          {
            "HUB": "EDMONTON",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "EDMONTON",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "EDMONTON",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "EDMONTON",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "EDMONTON",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "EDMONTON",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "HOUSTON": [
          {
            "HUB": "HOUSTON",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 28.833931746477134
          },
          {
            "HUB": "HOUSTON",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 13.583571425332124
          },
          {
            "HUB": "HOUSTON",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 38.47397290361015
          },
          {
            "HUB": "HOUSTON",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 36.54986910905066
          },
          {
            "HUB": "HOUSTON",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 41.32472283052445
          },
          {
            "HUB": "HOUSTON",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 22.634100848126593
          },
          {
            "HUB": "HOUSTON",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 21.01881748637578
          },
          {
            "HUB": "HOUSTON",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 29.833931746477134
          },
          {
            "HUB": "HOUSTON",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 18.583571425332124
          },
          {
            "HUB": "HOUSTON",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 41.47397290361015
          },
          {
            "HUB": "HOUSTON",
            "name": "hubIlodAvg",
            "value": 95.43472670662082
          },
          {
            "HUB": "HOUSTON",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "HOUSTON",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "HOUSTON",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "HOUSTON",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "HOUSTON",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "HOUSTON",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "INDY": [
          {
            "HUB": "INDY",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "INDY",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "INDY",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "INDY",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "INDY",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "INDY",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 13.5562723641407
          },
          {
            "HUB": "INDY",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 17.273680973651153
          },
          {
            "HUB": "INDY",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "INDY",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "INDY",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "INDY",
            "name": "hubIlodAvg",
            "value": 425.7355
          },
          {
            "HUB": "INDY",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "INDY",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "INDY",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "INDY",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "INDY",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "INDY",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "JACKSONVLE": [
          {
            "HUB": "JACKSONVLE",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 32.08562260674708
          },
          {
            "HUB": "JACKSONVLE",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 22.386373969409107
          },
          {
            "HUB": "JACKSONVLE",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 12.236743013288873
          },
          {
            "HUB": "JACKSONVLE",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 12.543221248752708
          },
          {
            "HUB": "JACKSONVLE",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 27.121369948781393
          },
          {
            "HUB": "JACKSONVLE",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 34.7436258576592
          },
          {
            "HUB": "JACKSONVLE",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 32.094001854362304
          },
          {
            "HUB": "JACKSONVLE",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 40.08562260674708
          },
          {
            "HUB": "JACKSONVLE",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 29.386373969409107
          },
          {
            "HUB": "JACKSONVLE",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 18.236743013288873
          },
          {
            "HUB": "JACKSONVLE",
            "name": "hubIlodAvg",
            "value": 94.8792007797271
          },
          {
            "HUB": "JACKSONVLE",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "JACKSONVLE",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "JACKSONVLE",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "JACKSONVLE",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "JACKSONVLE",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "JACKSONVLE",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "JERSEY": [
          {
            "HUB": "JERSEY",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "JERSEY",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 18.56980508997654
          },
          {
            "HUB": "JERSEY",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 32.46730768243026
          },
          {
            "HUB": "JERSEY",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "JERSEY",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 25.596426310865127
          },
          {
            "HUB": "JERSEY",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 14.859655069876965
          },
          {
            "HUB": "JERSEY",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 28.608009277664962
          },
          {
            "HUB": "JERSEY",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 29.517602894602646
          },
          {
            "HUB": "JERSEY",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 23.56980508997654
          },
          {
            "HUB": "JERSEY",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 36.46730768243026
          },
          {
            "HUB": "JERSEY",
            "name": "hubIlodAvg",
            "value": 84.2432258064516
          },
          {
            "HUB": "JERSEY",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "JERSEY",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "JERSEY",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "JERSEY",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "JERSEY",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "JERSEY",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "KANSAS CTY": [
          {
            "HUB": "KANSAS CTY",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "KANSAS CTY",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "KANSAS CTY",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "KANSAS CTY",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "KANSAS CTY",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "KANSAS CTY",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 15.049691346263316
          },
          {
            "HUB": "KANSAS CTY",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 25.763560920082654
          },
          {
            "HUB": "KANSAS CTY",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10.681611717890675
          },
          {
            "HUB": "KANSAS CTY",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10.744044240850755
          },
          {
            "HUB": "KANSAS CTY",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "KANSAS CTY",
            "name": "hubIlodAvg",
            "value": 82.5875
          },
          {
            "HUB": "KANSAS CTY",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "KANSAS CTY",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "KANSAS CTY",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "KANSAS CTY",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "KANSAS CTY",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "KANSAS CTY",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "LA": [
          {
            "HUB": "LA",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 89.46230155872911
          },
          {
            "HUB": "LA",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 79.9536142694107
          },
          {
            "HUB": "LA",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 59.82058345413472
          },
          {
            "HUB": "LA",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 26.992826027018992
          },
          {
            "HUB": "LA",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 53.49476855679808
          },
          {
            "HUB": "LA",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 71.41992501880009
          },
          {
            "HUB": "LA",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 59.272898939541506
          },
          {
            "HUB": "LA",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 82.46230155872911
          },
          {
            "HUB": "LA",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 74.9536142694107
          },
          {
            "HUB": "LA",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 53.82058345413472
          },
          {
            "HUB": "LA",
            "name": "hubIlodAvg",
            "value": 82.93614953271026
          },
          {
            "HUB": "LA",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "LA",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "LA",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "LA",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "LA",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "LA",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "LAREDO": [
          {
            "HUB": "LAREDO",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 40
          },
          {
            "HUB": "LAREDO",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 43
          },
          {
            "HUB": "LAREDO",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "LAREDO",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "LAREDO",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 41
          },
          {
            "HUB": "LAREDO",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 40
          },
          {
            "HUB": "LAREDO",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 42
          },
          {
            "HUB": "LAREDO",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 42
          },
          {
            "HUB": "LAREDO",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 43
          },
          {
            "HUB": "LAREDO",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "LAREDO",
            "name": "hubIlodAvg",
            "value": 185.4196
          },
          {
            "HUB": "LAREDO",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "LAREDO",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "LAREDO",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "LAREDO",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "LAREDO",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "LAREDO",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "MARION": [
          {
            "HUB": "MARION",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "MARION",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "MARION",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "MARION",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "MARION",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "MARION",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "MARION",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "MARION",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "MARION",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "MARION",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 48
          },
          {
            "HUB": "MARION",
            "name": "hubIlodAvg",
            "value": 90.76964444444444
          },
          {
            "HUB": "MARION",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "MARION",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "MARION",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "MARION",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "MARION",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "MARION",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "MEMPHIS": [
          {
            "HUB": "MEMPHIS",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 22.61292091114086
          },
          {
            "HUB": "MEMPHIS",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 21.832159566199238
          },
          {
            "HUB": "MEMPHIS",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 18.321275340735028
          },
          {
            "HUB": "MEMPHIS",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MEMPHIS",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 34.99217312013309
          },
          {
            "HUB": "MEMPHIS",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 41.84998739283192
          },
          {
            "HUB": "MEMPHIS",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 45.739733065071206
          },
          {
            "HUB": "MEMPHIS",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 36.61292091114086
          },
          {
            "HUB": "MEMPHIS",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 32.83215956619924
          },
          {
            "HUB": "MEMPHIS",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 22.321275340735028
          },
          {
            "HUB": "MEMPHIS",
            "name": "hubIlodAvg",
            "value": 132.16191441441444
          },
          {
            "HUB": "MEMPHIS",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "MEMPHIS",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "MEMPHIS",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "MEMPHIS",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "MEMPHIS",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "MEMPHIS",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "MIAMI": [
          {
            "HUB": "MIAMI",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MIAMI",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MIAMI",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MIAMI",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MIAMI",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MIAMI",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MIAMI",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MIAMI",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MIAMI",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MIAMI",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MIAMI",
            "name": "hubIlodAvg",
            "value": 79.0619698370468
          },
          {
            "HUB": "MIAMI",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "MIAMI",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "MIAMI",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "MIAMI",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "MIAMI",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "MIAMI",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "MONTERREY": [
          {
            "HUB": "MONTERREY",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 19
          },
          {
            "HUB": "MONTERREY",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 25
          },
          {
            "HUB": "MONTERREY",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 37
          },
          {
            "HUB": "MONTERREY",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 43
          },
          {
            "HUB": "MONTERREY",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 27
          },
          {
            "HUB": "MONTERREY",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 23
          },
          {
            "HUB": "MONTERREY",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 23
          },
          {
            "HUB": "MONTERREY",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 23
          },
          {
            "HUB": "MONTERREY",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 25
          },
          {
            "HUB": "MONTERREY",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 38
          },
          {
            "HUB": "MONTERREY",
            "name": "hubIlodAvg",
            "value": 206.15104838709675
          },
          {
            "HUB": "MONTERREY",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "MONTERREY",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "MONTERREY",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "MONTERREY",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "MONTERREY",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "MONTERREY",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "MONTREAL": [
          {
            "HUB": "MONTREAL",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MONTREAL",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MONTREAL",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MONTREAL",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MONTREAL",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MONTREAL",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MONTREAL",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MONTREAL",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MONTREAL",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MONTREAL",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "MONTREAL",
            "name": "hubIlodAvg",
            "value": 90.76964444444444
          },
          {
            "HUB": "MONTREAL",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "MONTREAL",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "MONTREAL",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "MONTREAL",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "MONTREAL",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "MONTREAL",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "NORFOLK": [
          {
            "HUB": "NORFOLK",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NORFOLK",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NORFOLK",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NORFOLK",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NORFOLK",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NORFOLK",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NORFOLK",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 10.25357021462548
          },
          {
            "HUB": "NORFOLK",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NORFOLK",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NORFOLK",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NORFOLK",
            "name": "hubIlodAvg",
            "value": 123.84225235523682
          },
          {
            "HUB": "NORFOLK",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "NORFOLK",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "NORFOLK",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "NORFOLK",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "NORFOLK",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "NORFOLK",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "NWOHIO": [
          {
            "HUB": "NWOHIO",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 28.22387797862126
          },
          {
            "HUB": "NWOHIO",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NWOHIO",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NWOHIO",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NWOHIO",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 21.534636049983646
          },
          {
            "HUB": "NWOHIO",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 27.263469969673338
          },
          {
            "HUB": "NWOHIO",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 16.857807901696276
          },
          {
            "HUB": "NWOHIO",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 51.22387797862126
          },
          {
            "HUB": "NWOHIO",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "NWOHIO",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 11.55627236414071
          },
          {
            "HUB": "NWOHIO",
            "name": "hubIlodAvg",
            "value": 100.2594362017804
          },
          {
            "HUB": "NWOHIO",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "NWOHIO",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "NWOHIO",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "NWOHIO",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "NWOHIO",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "NWOHIO",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "ORLANDO": [
          {
            "HUB": "ORLANDO",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 64.21859315778244
          },
          {
            "HUB": "ORLANDO",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 55.01793943458392
          },
          {
            "HUB": "ORLANDO",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 15.893564662439289
          },
          {
            "HUB": "ORLANDO",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 25.258331359545124
          },
          {
            "HUB": "ORLANDO",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 52.35643439809054
          },
          {
            "HUB": "ORLANDO",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 53.001999840025604
          },
          {
            "HUB": "ORLANDO",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 56.15344224533382
          },
          {
            "HUB": "ORLANDO",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 63.218593157782436
          },
          {
            "HUB": "ORLANDO",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 57.01793943458392
          },
          {
            "HUB": "ORLANDO",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 15.893564662439289
          },
          {
            "HUB": "ORLANDO",
            "name": "hubIlodAvg",
            "value": 72.93141891891892
          },
          {
            "HUB": "ORLANDO",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "ORLANDO",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "ORLANDO",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "ORLANDO",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "ORLANDO",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "ORLANDO",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "PHOENIX": [
          {
            "HUB": "PHOENIX",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 53.55050111189219
          },
          {
            "HUB": "PHOENIX",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 36.25163213762984
          },
          {
            "HUB": "PHOENIX",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 23.13858258757967
          },
          {
            "HUB": "PHOENIX",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 19.974320931210485
          },
          {
            "HUB": "PHOENIX",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 18.92008158486341
          },
          {
            "HUB": "PHOENIX",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 48.47850805108311
          },
          {
            "HUB": "PHOENIX",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 45.28967026422035
          },
          {
            "HUB": "PHOENIX",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 46.55050111189219
          },
          {
            "HUB": "PHOENIX",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 27.25163213762984
          },
          {
            "HUB": "PHOENIX",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 26.13858258757967
          },
          {
            "HUB": "PHOENIX",
            "name": "hubIlodAvg",
            "value": 101.73300000000002
          },
          {
            "HUB": "PHOENIX",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "PHOENIX",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "PHOENIX",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "PHOENIX",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "PHOENIX",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "PHOENIX",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "PORTLAND": [
          {
            "HUB": "PORTLAND",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 51.438242586192644
          },
          {
            "HUB": "PORTLAND",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 22.429827534938482
          },
          {
            "HUB": "PORTLAND",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 30.985406683938216
          },
          {
            "HUB": "PORTLAND",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 15.768487186074104
          },
          {
            "HUB": "PORTLAND",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 26.248711305964278
          },
          {
            "HUB": "PORTLAND",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 33.369313079286485
          },
          {
            "HUB": "PORTLAND",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 26.209808588392235
          },
          {
            "HUB": "PORTLAND",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 39.438242586192644
          },
          {
            "HUB": "PORTLAND",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 17.429827534938482
          },
          {
            "HUB": "PORTLAND",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 30.985406683938216
          },
          {
            "HUB": "PORTLAND",
            "name": "hubIlodAvg",
            "value": 116.71500000000002
          },
          {
            "HUB": "PORTLAND",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "PORTLAND",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "PORTLAND",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "PORTLAND",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "PORTLAND",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "PORTLAND",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "SALT LAKE": [
          {
            "HUB": "SALT LAKE",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SALT LAKE",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SALT LAKE",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SALT LAKE",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SALT LAKE",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SALT LAKE",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SALT LAKE",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SALT LAKE",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SALT LAKE",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SALT LAKE",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SALT LAKE",
            "name": "hubIlodAvg",
            "value": 93.682
          },
          {
            "HUB": "SALT LAKE",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "SALT LAKE",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "SALT LAKE",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "SALT LAKE",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "SALT LAKE",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "SALT LAKE",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "SAN BERN": [
          {
            "HUB": "SAN BERN",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 69.8846173519297
          },
          {
            "HUB": "SAN BERN",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 47.04655889987532
          },
          {
            "HUB": "SAN BERN",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 39.57422094407886
          },
          {
            "HUB": "SAN BERN",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SAN BERN",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 24.920875923343488
          },
          {
            "HUB": "SAN BERN",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 52.67214704628401
          },
          {
            "HUB": "SAN BERN",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 53.795240857363694
          },
          {
            "HUB": "SAN BERN",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 78.8846173519297
          },
          {
            "HUB": "SAN BERN",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 47.04655889987532
          },
          {
            "HUB": "SAN BERN",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 40.57422094407886
          },
          {
            "HUB": "SAN BERN",
            "name": "hubIlodAvg",
            "value": 56.977000000000004
          },
          {
            "HUB": "SAN BERN",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "SAN BERN",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "SAN BERN",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "SAN BERN",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "SAN BERN",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "SAN BERN",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "SAVANNAH": [
          {
            "HUB": "SAVANNAH",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SAVANNAH",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SAVANNAH",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SAVANNAH",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 47
          },
          {
            "HUB": "SAVANNAH",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SAVANNAH",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SAVANNAH",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SAVANNAH",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SAVANNAH",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SAVANNAH",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SAVANNAH",
            "name": "hubIlodAvg",
            "value": 91.6218
          },
          {
            "HUB": "SAVANNAH",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "SAVANNAH",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "SAVANNAH",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "SAVANNAH",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "SAVANNAH",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "SAVANNAH",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "SEATTLE": [
          {
            "HUB": "SEATTLE",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 21.664408333376016
          },
          {
            "HUB": "SEATTLE",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 19.904316427289643
          },
          {
            "HUB": "SEATTLE",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 27.2664991614216
          },
          {
            "HUB": "SEATTLE",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 14.404021942642217
          },
          {
            "HUB": "SEATTLE",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 25.003196137128697
          },
          {
            "HUB": "SEATTLE",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 25.07315494513341
          },
          {
            "HUB": "SEATTLE",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 24.592249290598858
          },
          {
            "HUB": "SEATTLE",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 19.664408333376016
          },
          {
            "HUB": "SEATTLE",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 22.904316427289643
          },
          {
            "HUB": "SEATTLE",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 23.2664991614216
          },
          {
            "HUB": "SEATTLE",
            "name": "hubIlodAvg",
            "value": 94.41832364958648
          },
          {
            "HUB": "SEATTLE",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "SEATTLE",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "SEATTLE",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "SEATTLE",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "SEATTLE",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "SEATTLE",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "SILAO": [
          {
            "HUB": "SILAO",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "SILAO",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "SILAO",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "SILAO",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "SILAO",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "SILAO",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "SILAO",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "SILAO",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "SILAO",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "SILAO",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 49
          },
          {
            "HUB": "SILAO",
            "name": "hubIlodAvg",
            "value": 90.76964444444444
          },
          {
            "HUB": "SILAO",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "SILAO",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "SILAO",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "SILAO",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "SILAO",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "SILAO",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "SLP": [
          {
            "HUB": "SLP",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 17
          },
          {
            "HUB": "SLP",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 28
          },
          {
            "HUB": "SLP",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 42
          },
          {
            "HUB": "SLP",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 40
          },
          {
            "HUB": "SLP",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 24
          },
          {
            "HUB": "SLP",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 26
          },
          {
            "HUB": "SLP",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 25
          },
          {
            "HUB": "SLP",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 23
          },
          {
            "HUB": "SLP",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 29
          },
          {
            "HUB": "SLP",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 42
          },
          {
            "HUB": "SLP",
            "name": "hubIlodAvg",
            "value": 69.18
          },
          {
            "HUB": "SLP",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "SLP",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "SLP",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "SLP",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "SLP",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "SLP",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "SPRINGFLD": [
          {
            "HUB": "SPRINGFLD",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 14.58440792697602
          },
          {
            "HUB": "SPRINGFLD",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SPRINGFLD",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SPRINGFLD",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SPRINGFLD",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 16.437371178966004
          },
          {
            "HUB": "SPRINGFLD",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 14.379837800092858
          },
          {
            "HUB": "SPRINGFLD",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 22.2120606058498
          },
          {
            "HUB": "SPRINGFLD",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 16.58440792697602
          },
          {
            "HUB": "SPRINGFLD",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 12.245368781616023
          },
          {
            "HUB": "SPRINGFLD",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "SPRINGFLD",
            "name": "hubIlodAvg",
            "value": 73.9471052631579
          },
          {
            "HUB": "SPRINGFLD",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "SPRINGFLD",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "SPRINGFLD",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "SPRINGFLD",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "SPRINGFLD",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "SPRINGFLD",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "ST LOUIS": [
          {
            "HUB": "ST LOUIS",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 24.03225956351418
          },
          {
            "HUB": "ST LOUIS",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 13.49597617401966
          },
          {
            "HUB": "ST LOUIS",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10.144087658139647
          },
          {
            "HUB": "ST LOUIS",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST LOUIS",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 17.135528725660045
          },
          {
            "HUB": "ST LOUIS",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 19.42208566802472
          },
          {
            "HUB": "ST LOUIS",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 31.922544740426346
          },
          {
            "HUB": "ST LOUIS",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 22.03225956351418
          },
          {
            "HUB": "ST LOUIS",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 13.49597617401966
          },
          {
            "HUB": "ST LOUIS",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST LOUIS",
            "name": "hubIlodAvg",
            "value": 81.78880000000001
          },
          {
            "HUB": "ST LOUIS",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "ST LOUIS",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "ST LOUIS",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "ST LOUIS",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "ST LOUIS",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "ST LOUIS",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "ST PAUL": [
          {
            "HUB": "ST PAUL",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST PAUL",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST PAUL",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST PAUL",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST PAUL",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST PAUL",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST PAUL",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST PAUL",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST PAUL",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST PAUL",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "ST PAUL",
            "name": "hubIlodAvg",
            "value": 106.51362248510353
          },
          {
            "HUB": "ST PAUL",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "ST PAUL",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "ST PAUL",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "ST PAUL",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "ST PAUL",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "ST PAUL",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "STOCKTON": [
          {
            "HUB": "STOCKTON",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 17.148515406113205
          },
          {
            "HUB": "STOCKTON",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 21.96418898179317
          },
          {
            "HUB": "STOCKTON",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 34.33030277982337
          },
          {
            "HUB": "STOCKTON",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 13.746595264506915
          },
          {
            "HUB": "STOCKTON",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "STOCKTON",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 20.018153685368418
          },
          {
            "HUB": "STOCKTON",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "STOCKTON",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 25.148515406113205
          },
          {
            "HUB": "STOCKTON",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 16.96418898179317
          },
          {
            "HUB": "STOCKTON",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 32.33030277982337
          },
          {
            "HUB": "STOCKTON",
            "name": "hubIlodAvg",
            "value": 79.94022167487685
          },
          {
            "HUB": "STOCKTON",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "STOCKTON",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "STOCKTON",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "STOCKTON",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "STOCKTON",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "STOCKTON",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "SYRACUSE": [
          {
            "HUB": "SYRACUSE",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 23.980176131526548
          },
          {
            "HUB": "SYRACUSE",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 15.888917674112193
          },
          {
            "HUB": "SYRACUSE",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 13.942849058123372
          },
          {
            "HUB": "SYRACUSE",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10.178112717617275
          },
          {
            "HUB": "SYRACUSE",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 23.875984818255233
          },
          {
            "HUB": "SYRACUSE",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 19.884919368725875
          },
          {
            "HUB": "SYRACUSE",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 21.452350813702978
          },
          {
            "HUB": "SYRACUSE",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 20.980176131526548
          },
          {
            "HUB": "SYRACUSE",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 12.888917674112193
          },
          {
            "HUB": "SYRACUSE",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 12.942849058123372
          },
          {
            "HUB": "SYRACUSE",
            "name": "hubIlodAvg",
            "value": 121.29008931489267
          },
          {
            "HUB": "SYRACUSE",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "SYRACUSE",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "SYRACUSE",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "SYRACUSE",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "SYRACUSE",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "SYRACUSE",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "TOLUCA": [
          {
            "HUB": "TOLUCA",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 28
          },
          {
            "HUB": "TOLUCA",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 35
          },
          {
            "HUB": "TOLUCA",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 44
          },
          {
            "HUB": "TOLUCA",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 45
          },
          {
            "HUB": "TOLUCA",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 36
          },
          {
            "HUB": "TOLUCA",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 33
          },
          {
            "HUB": "TOLUCA",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 33
          },
          {
            "HUB": "TOLUCA",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 33
          },
          {
            "HUB": "TOLUCA",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 35
          },
          {
            "HUB": "TOLUCA",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 44
          },
          {
            "HUB": "TOLUCA",
            "name": "hubIlodAvg",
            "value": 170.75345323741007
          },
          {
            "HUB": "TOLUCA",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "TOLUCA",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "TOLUCA",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "TOLUCA",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "TOLUCA",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "TOLUCA",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "TORONTO": [
          {
            "HUB": "TORONTO",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 17.678154093971983
          },
          {
            "HUB": "TORONTO",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 18.11209558473681
          },
          {
            "HUB": "TORONTO",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "TORONTO",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "TORONTO",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 11.77867378850921
          },
          {
            "HUB": "TORONTO",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 19.355514555005982
          },
          {
            "HUB": "TORONTO",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 14.366563145999496
          },
          {
            "HUB": "TORONTO",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 14.678154093971983
          },
          {
            "HUB": "TORONTO",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 16.11209558473681
          },
          {
            "HUB": "TORONTO",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "TORONTO",
            "name": "hubIlodAvg",
            "value": 96.34741734236341
          },
          {
            "HUB": "TORONTO",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "TORONTO",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "TORONTO",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "TORONTO",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "TORONTO",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "TORONTO",
            "name": "hubTierBonus",
            "value": 0
          }
        ],
        "WORCESTER": [
          {
            "HUB": "WORCESTER",
            "dt": "2020-10-15",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "WORCESTER",
            "dt": "2020-10-16",
            "name": "hubCapacity",
            "value": 14.222939030807368
          },
          {
            "HUB": "WORCESTER",
            "dt": "2020-10-17",
            "name": "hubCapacity",
            "value": 14.75656558461089
          },
          {
            "HUB": "WORCESTER",
            "dt": "2020-10-18",
            "name": "hubCapacity",
            "value": 15.89444158370447
          },
          {
            "HUB": "WORCESTER",
            "dt": "2020-10-19",
            "name": "hubCapacity",
            "value": 10
          },
          {
            "HUB": "WORCESTER",
            "dt": "2020-10-20",
            "name": "hubCapacity",
            "value": 14.98067226269417
          },
          {
            "HUB": "WORCESTER",
            "dt": "2020-10-21",
            "name": "hubCapacity",
            "value": 22.02529494328398
          },
          {
            "HUB": "WORCESTER",
            "dt": "2020-10-22",
            "name": "hubCapacity",
            "value": 10.544276331054519
          },
          {
            "HUB": "WORCESTER",
            "dt": "2020-10-23",
            "name": "hubCapacity",
            "value": 12.222939030807368
          },
          {
            "HUB": "WORCESTER",
            "dt": "2020-10-24",
            "name": "hubCapacity",
            "value": 12.75656558461089
          },
          {
            "HUB": "WORCESTER",
            "name": "hubIlodAvg",
            "value": 95.84170212765957
          },
          {
            "HUB": "WORCESTER",
            "name": "hubBumpshift",
            "value": "Y"
          },
          {
            "HUB": "WORCESTER",
            "name": "hubStackingPenalty",
            "value": 1000
          },
          {
            "HUB": "WORCESTER",
            "name": "hubForecastBufferIB",
            "value": 0
          },
          {
            "HUB": "WORCESTER",
            "name": "hubForecastBufferOB",
            "value": 0
          },
          {
            "HUB": "WORCESTER",
            "name": "hubCapacityConstrained",
            "value": "N"
          },
          {
            "HUB": "WORCESTER",
            "name": "hubTierBonus",
            "value": 0
          }
        ]
      },
      "lanes": {
        "ATLANTA-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "ATLANTA-CHICAGO",
            "OHUB": "ATLANTA",
            "name": "AVG_TRANSIT",
            "value": 47.27418657331141
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ATLANTA-CHICAGO",
            "OHUB": "ATLANTA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ATLANTA-CHICAGO",
            "OHUB": "ATLANTA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ATLANTA-CHICAGO",
            "OHUB": "ATLANTA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ATLANTA-CHICAGO",
            "OHUB": "ATLANTA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ATLANTA-LA": [
          {
            "DHUB": "LA",
            "LANE": "ATLANTA-LA",
            "OHUB": "ATLANTA",
            "name": "AVG_TRANSIT",
            "value": 183.99453094990733
          },
          {
            "DHUB": "LA",
            "LANE": "ATLANTA-LA",
            "OHUB": "ATLANTA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "ATLANTA-LA",
            "OHUB": "ATLANTA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "ATLANTA-LA",
            "OHUB": "ATLANTA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "ATLANTA-LA",
            "OHUB": "ATLANTA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ATLANTA-MEMPHIS": [
          {
            "DHUB": "MEMPHIS",
            "LANE": "ATLANTA-MEMPHIS",
            "OHUB": "ATLANTA",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "ATLANTA-MEMPHIS",
            "OHUB": "ATLANTA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "ATLANTA-MEMPHIS",
            "OHUB": "ATLANTA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "ATLANTA-MEMPHIS",
            "OHUB": "ATLANTA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "ATLANTA-MEMPHIS",
            "OHUB": "ATLANTA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ATLANTA-SAN BERN": [
          {
            "DHUB": "SAN BERN",
            "LANE": "ATLANTA-SAN BERN",
            "OHUB": "ATLANTA",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "ATLANTA-SAN BERN",
            "OHUB": "ATLANTA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "ATLANTA-SAN BERN",
            "OHUB": "ATLANTA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "ATLANTA-SAN BERN",
            "OHUB": "ATLANTA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "ATLANTA-SAN BERN",
            "OHUB": "ATLANTA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ATLANTA-STOCKTON": [
          {
            "DHUB": "STOCKTON",
            "LANE": "ATLANTA-STOCKTON",
            "OHUB": "ATLANTA",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "ATLANTA-STOCKTON",
            "OHUB": "ATLANTA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "ATLANTA-STOCKTON",
            "OHUB": "ATLANTA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "ATLANTA-STOCKTON",
            "OHUB": "ATLANTA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "ATLANTA-STOCKTON",
            "OHUB": "ATLANTA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "BALTIMORE-CHAMBRSBRG": [
          {
            "DHUB": "CHAMBRSBRG",
            "LANE": "BALTIMORE-CHAMBRSBRG",
            "OHUB": "BALTIMORE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHAMBRSBRG",
            "LANE": "BALTIMORE-CHAMBRSBRG",
            "OHUB": "BALTIMORE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHAMBRSBRG",
            "LANE": "BALTIMORE-CHAMBRSBRG",
            "OHUB": "BALTIMORE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHAMBRSBRG",
            "LANE": "BALTIMORE-CHAMBRSBRG",
            "OHUB": "BALTIMORE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHAMBRSBRG",
            "LANE": "BALTIMORE-CHAMBRSBRG",
            "OHUB": "BALTIMORE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "BALTIMORE-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "BALTIMORE-CHICAGO",
            "OHUB": "BALTIMORE",
            "name": "AVG_TRANSIT",
            "value": 45.36952228449426
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "BALTIMORE-CHICAGO",
            "OHUB": "BALTIMORE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "BALTIMORE-CHICAGO",
            "OHUB": "BALTIMORE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "BALTIMORE-CHICAGO",
            "OHUB": "BALTIMORE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "BALTIMORE-CHICAGO",
            "OHUB": "BALTIMORE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CALGARY-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "CALGARY-CHICAGO",
            "OHUB": "CALGARY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CALGARY-CHICAGO",
            "OHUB": "CALGARY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CALGARY-CHICAGO",
            "OHUB": "CALGARY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CALGARY-CHICAGO",
            "OHUB": "CALGARY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CALGARY-CHICAGO",
            "OHUB": "CALGARY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHAMBRSBRG-BALTIMORE": [
          {
            "DHUB": "BALTIMORE",
            "LANE": "CHAMBRSBRG-BALTIMORE",
            "OHUB": "CHAMBRSBRG",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "CHAMBRSBRG-BALTIMORE",
            "OHUB": "CHAMBRSBRG",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "CHAMBRSBRG-BALTIMORE",
            "OHUB": "CHAMBRSBRG",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "CHAMBRSBRG-BALTIMORE",
            "OHUB": "CHAMBRSBRG",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "CHAMBRSBRG-BALTIMORE",
            "OHUB": "CHAMBRSBRG",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHAMBRSBRG-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "CHAMBRSBRG-CHICAGO",
            "OHUB": "CHAMBRSBRG",
            "name": "AVG_TRANSIT",
            "value": 44.560098316677056
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHAMBRSBRG-CHICAGO",
            "OHUB": "CHAMBRSBRG",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHAMBRSBRG-CHICAGO",
            "OHUB": "CHAMBRSBRG",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHAMBRSBRG-CHICAGO",
            "OHUB": "CHAMBRSBRG",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHAMBRSBRG-CHICAGO",
            "OHUB": "CHAMBRSBRG",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHAMBRSBRG-LA": [
          {
            "DHUB": "LA",
            "LANE": "CHAMBRSBRG-LA",
            "OHUB": "CHAMBRSBRG",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "CHAMBRSBRG-LA",
            "OHUB": "CHAMBRSBRG",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "CHAMBRSBRG-LA",
            "OHUB": "CHAMBRSBRG",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "CHAMBRSBRG-LA",
            "OHUB": "CHAMBRSBRG",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "CHAMBRSBRG-LA",
            "OHUB": "CHAMBRSBRG",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHAMBRSBRG-ST LOUIS": [
          {
            "DHUB": "ST LOUIS",
            "LANE": "CHAMBRSBRG-ST LOUIS",
            "OHUB": "CHAMBRSBRG",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "CHAMBRSBRG-ST LOUIS",
            "OHUB": "CHAMBRSBRG",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "CHAMBRSBRG-ST LOUIS",
            "OHUB": "CHAMBRSBRG",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "CHAMBRSBRG-ST LOUIS",
            "OHUB": "CHAMBRSBRG",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "CHAMBRSBRG-ST LOUIS",
            "OHUB": "CHAMBRSBRG",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHARLOTTE-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "CHARLOTTE-CHICAGO",
            "OHUB": "CHARLOTTE",
            "name": "AVG_TRANSIT",
            "value": 94.69902849740943
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHARLOTTE-CHICAGO",
            "OHUB": "CHARLOTTE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHARLOTTE-CHICAGO",
            "OHUB": "CHARLOTTE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHARLOTTE-CHICAGO",
            "OHUB": "CHARLOTTE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHARLOTTE-CHICAGO",
            "OHUB": "CHARLOTTE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHARLOTTE-SAN BERN": [
          {
            "DHUB": "SAN BERN",
            "LANE": "CHARLOTTE-SAN BERN",
            "OHUB": "CHARLOTTE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "CHARLOTTE-SAN BERN",
            "OHUB": "CHARLOTTE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "CHARLOTTE-SAN BERN",
            "OHUB": "CHARLOTTE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "CHARLOTTE-SAN BERN",
            "OHUB": "CHARLOTTE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "CHARLOTTE-SAN BERN",
            "OHUB": "CHARLOTTE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHICAGO-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "CHICAGO-CHICAGO",
            "OHUB": "CHICAGO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHICAGO-CHICAGO",
            "OHUB": "CHICAGO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHICAGO-CHICAGO",
            "OHUB": "CHICAGO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHICAGO-CHICAGO",
            "OHUB": "CHICAGO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "CHICAGO-CHICAGO",
            "OHUB": "CHICAGO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHICAGO-DALLAS": [
          {
            "DHUB": "DALLAS",
            "LANE": "CHICAGO-DALLAS",
            "OHUB": "CHICAGO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "DALLAS",
            "LANE": "CHICAGO-DALLAS",
            "OHUB": "CHICAGO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "DALLAS",
            "LANE": "CHICAGO-DALLAS",
            "OHUB": "CHICAGO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "DALLAS",
            "LANE": "CHICAGO-DALLAS",
            "OHUB": "CHICAGO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "DALLAS",
            "LANE": "CHICAGO-DALLAS",
            "OHUB": "CHICAGO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHICAGO-LA": [
          {
            "DHUB": "LA",
            "LANE": "CHICAGO-LA",
            "OHUB": "CHICAGO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "CHICAGO-LA",
            "OHUB": "CHICAGO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "CHICAGO-LA",
            "OHUB": "CHICAGO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "CHICAGO-LA",
            "OHUB": "CHICAGO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "CHICAGO-LA",
            "OHUB": "CHICAGO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHICAGO-MONTERREY": [
          {
            "DHUB": "MONTERREY",
            "LANE": "CHICAGO-MONTERREY",
            "OHUB": "CHICAGO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "CHICAGO-MONTERREY",
            "OHUB": "CHICAGO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "CHICAGO-MONTERREY",
            "OHUB": "CHICAGO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "CHICAGO-MONTERREY",
            "OHUB": "CHICAGO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "CHICAGO-MONTERREY",
            "OHUB": "CHICAGO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHICAGO-MONTREAL": [
          {
            "DHUB": "MONTREAL",
            "LANE": "CHICAGO-MONTREAL",
            "OHUB": "CHICAGO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "MONTREAL",
            "LANE": "CHICAGO-MONTREAL",
            "OHUB": "CHICAGO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MONTREAL",
            "LANE": "CHICAGO-MONTREAL",
            "OHUB": "CHICAGO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MONTREAL",
            "LANE": "CHICAGO-MONTREAL",
            "OHUB": "CHICAGO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MONTREAL",
            "LANE": "CHICAGO-MONTREAL",
            "OHUB": "CHICAGO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHICAGO-SEATTLE": [
          {
            "DHUB": "SEATTLE",
            "LANE": "CHICAGO-SEATTLE",
            "OHUB": "CHICAGO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "CHICAGO-SEATTLE",
            "OHUB": "CHICAGO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "CHICAGO-SEATTLE",
            "OHUB": "CHICAGO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "CHICAGO-SEATTLE",
            "OHUB": "CHICAGO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "CHICAGO-SEATTLE",
            "OHUB": "CHICAGO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHICAGO-ST PAUL": [
          {
            "DHUB": "ST PAUL",
            "LANE": "CHICAGO-ST PAUL",
            "OHUB": "CHICAGO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "CHICAGO-ST PAUL",
            "OHUB": "CHICAGO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "CHICAGO-ST PAUL",
            "OHUB": "CHICAGO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "CHICAGO-ST PAUL",
            "OHUB": "CHICAGO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "CHICAGO-ST PAUL",
            "OHUB": "CHICAGO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHICAGO-STOCKTON": [
          {
            "DHUB": "STOCKTON",
            "LANE": "CHICAGO-STOCKTON",
            "OHUB": "CHICAGO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "CHICAGO-STOCKTON",
            "OHUB": "CHICAGO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "CHICAGO-STOCKTON",
            "OHUB": "CHICAGO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "CHICAGO-STOCKTON",
            "OHUB": "CHICAGO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "CHICAGO-STOCKTON",
            "OHUB": "CHICAGO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CHICAGO-TORONTO": [
          {
            "DHUB": "TORONTO",
            "LANE": "CHICAGO-TORONTO",
            "OHUB": "CHICAGO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "TORONTO",
            "LANE": "CHICAGO-TORONTO",
            "OHUB": "CHICAGO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "TORONTO",
            "LANE": "CHICAGO-TORONTO",
            "OHUB": "CHICAGO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "TORONTO",
            "LANE": "CHICAGO-TORONTO",
            "OHUB": "CHICAGO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "TORONTO",
            "LANE": "CHICAGO-TORONTO",
            "OHUB": "CHICAGO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "CINCY-LA": [
          {
            "DHUB": "LA",
            "LANE": "CINCY-LA",
            "OHUB": "CINCY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "CINCY-LA",
            "OHUB": "CINCY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "CINCY-LA",
            "OHUB": "CINCY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "CINCY-LA",
            "OHUB": "CINCY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "CINCY-LA",
            "OHUB": "CINCY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DALLAS-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "DALLAS-CHICAGO",
            "OHUB": "DALLAS",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "DALLAS-CHICAGO",
            "OHUB": "DALLAS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "DALLAS-CHICAGO",
            "OHUB": "DALLAS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "DALLAS-CHICAGO",
            "OHUB": "DALLAS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "DALLAS-CHICAGO",
            "OHUB": "DALLAS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DALLAS-KANSAS CTY": [
          {
            "DHUB": "KANSAS CTY",
            "LANE": "DALLAS-KANSAS CTY",
            "OHUB": "DALLAS",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "DALLAS-KANSAS CTY",
            "OHUB": "DALLAS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "DALLAS-KANSAS CTY",
            "OHUB": "DALLAS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "DALLAS-KANSAS CTY",
            "OHUB": "DALLAS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "DALLAS-KANSAS CTY",
            "OHUB": "DALLAS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DALLAS-LA": [
          {
            "DHUB": "LA",
            "LANE": "DALLAS-LA",
            "OHUB": "DALLAS",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "DALLAS-LA",
            "OHUB": "DALLAS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "DALLAS-LA",
            "OHUB": "DALLAS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "DALLAS-LA",
            "OHUB": "DALLAS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "DALLAS-LA",
            "OHUB": "DALLAS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DALLAS-MONTERREY": [
          {
            "DHUB": "MONTERREY",
            "LANE": "DALLAS-MONTERREY",
            "OHUB": "DALLAS",
            "name": "AVG_TRANSIT",
            "value": 107.30497895493234
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "DALLAS-MONTERREY",
            "OHUB": "DALLAS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "DALLAS-MONTERREY",
            "OHUB": "DALLAS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "DALLAS-MONTERREY",
            "OHUB": "DALLAS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "DALLAS-MONTERREY",
            "OHUB": "DALLAS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DALLAS-SAN BERN": [
          {
            "DHUB": "SAN BERN",
            "LANE": "DALLAS-SAN BERN",
            "OHUB": "DALLAS",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "DALLAS-SAN BERN",
            "OHUB": "DALLAS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "DALLAS-SAN BERN",
            "OHUB": "DALLAS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "DALLAS-SAN BERN",
            "OHUB": "DALLAS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "DALLAS-SAN BERN",
            "OHUB": "DALLAS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DALLAS-SLP": [
          {
            "DHUB": "SLP",
            "LANE": "DALLAS-SLP",
            "OHUB": "DALLAS",
            "name": "AVG_TRANSIT",
            "value": 142.8790341372484
          },
          {
            "DHUB": "SLP",
            "LANE": "DALLAS-SLP",
            "OHUB": "DALLAS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SLP",
            "LANE": "DALLAS-SLP",
            "OHUB": "DALLAS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SLP",
            "LANE": "DALLAS-SLP",
            "OHUB": "DALLAS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SLP",
            "LANE": "DALLAS-SLP",
            "OHUB": "DALLAS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DALLAS-STOCKTON": [
          {
            "DHUB": "STOCKTON",
            "LANE": "DALLAS-STOCKTON",
            "OHUB": "DALLAS",
            "name": "AVG_TRANSIT",
            "value": 100.26018181818192
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "DALLAS-STOCKTON",
            "OHUB": "DALLAS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "DALLAS-STOCKTON",
            "OHUB": "DALLAS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "DALLAS-STOCKTON",
            "OHUB": "DALLAS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "DALLAS-STOCKTON",
            "OHUB": "DALLAS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DALLAS-TOLUCA": [
          {
            "DHUB": "TOLUCA",
            "LANE": "DALLAS-TOLUCA",
            "OHUB": "DALLAS",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "TOLUCA",
            "LANE": "DALLAS-TOLUCA",
            "OHUB": "DALLAS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "TOLUCA",
            "LANE": "DALLAS-TOLUCA",
            "OHUB": "DALLAS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "TOLUCA",
            "LANE": "DALLAS-TOLUCA",
            "OHUB": "DALLAS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "TOLUCA",
            "LANE": "DALLAS-TOLUCA",
            "OHUB": "DALLAS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DENVER-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "DENVER-CHICAGO",
            "OHUB": "DENVER",
            "name": "AVG_TRANSIT",
            "value": 87.1351369216241
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "DENVER-CHICAGO",
            "OHUB": "DENVER",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "DENVER-CHICAGO",
            "OHUB": "DENVER",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "DENVER-CHICAGO",
            "OHUB": "DENVER",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "DENVER-CHICAGO",
            "OHUB": "DENVER",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DENVER-KANSAS CTY": [
          {
            "DHUB": "KANSAS CTY",
            "LANE": "DENVER-KANSAS CTY",
            "OHUB": "DENVER",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "DENVER-KANSAS CTY",
            "OHUB": "DENVER",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "DENVER-KANSAS CTY",
            "OHUB": "DENVER",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "DENVER-KANSAS CTY",
            "OHUB": "DENVER",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "DENVER-KANSAS CTY",
            "OHUB": "DENVER",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DENVER-LA": [
          {
            "DHUB": "LA",
            "LANE": "DENVER-LA",
            "OHUB": "DENVER",
            "name": "AVG_TRANSIT",
            "value": 172.4146543560606
          },
          {
            "DHUB": "LA",
            "LANE": "DENVER-LA",
            "OHUB": "DENVER",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "DENVER-LA",
            "OHUB": "DENVER",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "DENVER-LA",
            "OHUB": "DENVER",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "DENVER-LA",
            "OHUB": "DENVER",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DENVER-SAN BERN": [
          {
            "DHUB": "SAN BERN",
            "LANE": "DENVER-SAN BERN",
            "OHUB": "DENVER",
            "name": "AVG_TRANSIT",
            "value": 171.77104292421203
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "DENVER-SAN BERN",
            "OHUB": "DENVER",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "DENVER-SAN BERN",
            "OHUB": "DENVER",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "DENVER-SAN BERN",
            "OHUB": "DENVER",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "DENVER-SAN BERN",
            "OHUB": "DENVER",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "DENVER-SEATTLE": [
          {
            "DHUB": "SEATTLE",
            "LANE": "DENVER-SEATTLE",
            "OHUB": "DENVER",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "DENVER-SEATTLE",
            "OHUB": "DENVER",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "DENVER-SEATTLE",
            "OHUB": "DENVER",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "DENVER-SEATTLE",
            "OHUB": "DENVER",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "DENVER-SEATTLE",
            "OHUB": "DENVER",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "EDMONTON-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "EDMONTON-CHICAGO",
            "OHUB": "EDMONTON",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "EDMONTON-CHICAGO",
            "OHUB": "EDMONTON",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "EDMONTON-CHICAGO",
            "OHUB": "EDMONTON",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "EDMONTON-CHICAGO",
            "OHUB": "EDMONTON",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "EDMONTON-CHICAGO",
            "OHUB": "EDMONTON",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "HOUSTON-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "HOUSTON-CHICAGO",
            "OHUB": "HOUSTON",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "HOUSTON-CHICAGO",
            "OHUB": "HOUSTON",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "HOUSTON-CHICAGO",
            "OHUB": "HOUSTON",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "HOUSTON-CHICAGO",
            "OHUB": "HOUSTON",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "HOUSTON-CHICAGO",
            "OHUB": "HOUSTON",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "HOUSTON-DALLAS": [
          {
            "DHUB": "DALLAS",
            "LANE": "HOUSTON-DALLAS",
            "OHUB": "HOUSTON",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "DALLAS",
            "LANE": "HOUSTON-DALLAS",
            "OHUB": "HOUSTON",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "DALLAS",
            "LANE": "HOUSTON-DALLAS",
            "OHUB": "HOUSTON",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "DALLAS",
            "LANE": "HOUSTON-DALLAS",
            "OHUB": "HOUSTON",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "DALLAS",
            "LANE": "HOUSTON-DALLAS",
            "OHUB": "HOUSTON",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "HOUSTON-LA": [
          {
            "DHUB": "LA",
            "LANE": "HOUSTON-LA",
            "OHUB": "HOUSTON",
            "name": "AVG_TRANSIT",
            "value": 171.40545186640466
          },
          {
            "DHUB": "LA",
            "LANE": "HOUSTON-LA",
            "OHUB": "HOUSTON",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "HOUSTON-LA",
            "OHUB": "HOUSTON",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "HOUSTON-LA",
            "OHUB": "HOUSTON",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "HOUSTON-LA",
            "OHUB": "HOUSTON",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "HOUSTON-MONTERREY": [
          {
            "DHUB": "MONTERREY",
            "LANE": "HOUSTON-MONTERREY",
            "OHUB": "HOUSTON",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "HOUSTON-MONTERREY",
            "OHUB": "HOUSTON",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "HOUSTON-MONTERREY",
            "OHUB": "HOUSTON",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "HOUSTON-MONTERREY",
            "OHUB": "HOUSTON",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "HOUSTON-MONTERREY",
            "OHUB": "HOUSTON",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "HOUSTON-SLP": [
          {
            "DHUB": "SLP",
            "LANE": "HOUSTON-SLP",
            "OHUB": "HOUSTON",
            "name": "AVG_TRANSIT",
            "value": 159.01362586605103
          },
          {
            "DHUB": "SLP",
            "LANE": "HOUSTON-SLP",
            "OHUB": "HOUSTON",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SLP",
            "LANE": "HOUSTON-SLP",
            "OHUB": "HOUSTON",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SLP",
            "LANE": "HOUSTON-SLP",
            "OHUB": "HOUSTON",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SLP",
            "LANE": "HOUSTON-SLP",
            "OHUB": "HOUSTON",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "HOUSTON-STOCKTON": [
          {
            "DHUB": "STOCKTON",
            "LANE": "HOUSTON-STOCKTON",
            "OHUB": "HOUSTON",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "HOUSTON-STOCKTON",
            "OHUB": "HOUSTON",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "HOUSTON-STOCKTON",
            "OHUB": "HOUSTON",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "HOUSTON-STOCKTON",
            "OHUB": "HOUSTON",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "HOUSTON-STOCKTON",
            "OHUB": "HOUSTON",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JACKSONVLE-BALTIMORE": [
          {
            "DHUB": "BALTIMORE",
            "LANE": "JACKSONVLE-BALTIMORE",
            "OHUB": "JACKSONVLE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "JACKSONVLE-BALTIMORE",
            "OHUB": "JACKSONVLE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "JACKSONVLE-BALTIMORE",
            "OHUB": "JACKSONVLE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "JACKSONVLE-BALTIMORE",
            "OHUB": "JACKSONVLE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "JACKSONVLE-BALTIMORE",
            "OHUB": "JACKSONVLE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JACKSONVLE-CHARLOTTE": [
          {
            "DHUB": "CHARLOTTE",
            "LANE": "JACKSONVLE-CHARLOTTE",
            "OHUB": "JACKSONVLE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHARLOTTE",
            "LANE": "JACKSONVLE-CHARLOTTE",
            "OHUB": "JACKSONVLE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHARLOTTE",
            "LANE": "JACKSONVLE-CHARLOTTE",
            "OHUB": "JACKSONVLE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHARLOTTE",
            "LANE": "JACKSONVLE-CHARLOTTE",
            "OHUB": "JACKSONVLE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHARLOTTE",
            "LANE": "JACKSONVLE-CHARLOTTE",
            "OHUB": "JACKSONVLE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JACKSONVLE-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "JACKSONVLE-CHICAGO",
            "OHUB": "JACKSONVLE",
            "name": "AVG_TRANSIT",
            "value": 56.4982241726437
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "JACKSONVLE-CHICAGO",
            "OHUB": "JACKSONVLE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "JACKSONVLE-CHICAGO",
            "OHUB": "JACKSONVLE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "JACKSONVLE-CHICAGO",
            "OHUB": "JACKSONVLE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "JACKSONVLE-CHICAGO",
            "OHUB": "JACKSONVLE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JACKSONVLE-CINCY": [
          {
            "DHUB": "CINCY",
            "LANE": "JACKSONVLE-CINCY",
            "OHUB": "JACKSONVLE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CINCY",
            "LANE": "JACKSONVLE-CINCY",
            "OHUB": "JACKSONVLE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CINCY",
            "LANE": "JACKSONVLE-CINCY",
            "OHUB": "JACKSONVLE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CINCY",
            "LANE": "JACKSONVLE-CINCY",
            "OHUB": "JACKSONVLE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CINCY",
            "LANE": "JACKSONVLE-CINCY",
            "OHUB": "JACKSONVLE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JACKSONVLE-JERSEY": [
          {
            "DHUB": "JERSEY",
            "LANE": "JACKSONVLE-JERSEY",
            "OHUB": "JACKSONVLE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "JERSEY",
            "LANE": "JACKSONVLE-JERSEY",
            "OHUB": "JACKSONVLE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "JERSEY",
            "LANE": "JACKSONVLE-JERSEY",
            "OHUB": "JACKSONVLE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "JERSEY",
            "LANE": "JACKSONVLE-JERSEY",
            "OHUB": "JACKSONVLE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "JERSEY",
            "LANE": "JACKSONVLE-JERSEY",
            "OHUB": "JACKSONVLE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JACKSONVLE-SAN BERN": [
          {
            "DHUB": "SAN BERN",
            "LANE": "JACKSONVLE-SAN BERN",
            "OHUB": "JACKSONVLE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "JACKSONVLE-SAN BERN",
            "OHUB": "JACKSONVLE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "JACKSONVLE-SAN BERN",
            "OHUB": "JACKSONVLE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "JACKSONVLE-SAN BERN",
            "OHUB": "JACKSONVLE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "JACKSONVLE-SAN BERN",
            "OHUB": "JACKSONVLE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JACKSONVLE-SAVANNAH": [
          {
            "DHUB": "SAVANNAH",
            "LANE": "JACKSONVLE-SAVANNAH",
            "OHUB": "JACKSONVLE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SAVANNAH",
            "LANE": "JACKSONVLE-SAVANNAH",
            "OHUB": "JACKSONVLE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SAVANNAH",
            "LANE": "JACKSONVLE-SAVANNAH",
            "OHUB": "JACKSONVLE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SAVANNAH",
            "LANE": "JACKSONVLE-SAVANNAH",
            "OHUB": "JACKSONVLE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SAVANNAH",
            "LANE": "JACKSONVLE-SAVANNAH",
            "OHUB": "JACKSONVLE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JERSEY-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "JERSEY-CHICAGO",
            "OHUB": "JERSEY",
            "name": "AVG_TRANSIT",
            "value": 47.253926126824176
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "JERSEY-CHICAGO",
            "OHUB": "JERSEY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "JERSEY-CHICAGO",
            "OHUB": "JERSEY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "JERSEY-CHICAGO",
            "OHUB": "JERSEY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "JERSEY-CHICAGO",
            "OHUB": "JERSEY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JERSEY-INDY": [
          {
            "DHUB": "INDY",
            "LANE": "JERSEY-INDY",
            "OHUB": "JERSEY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "INDY",
            "LANE": "JERSEY-INDY",
            "OHUB": "JERSEY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "INDY",
            "LANE": "JERSEY-INDY",
            "OHUB": "JERSEY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "INDY",
            "LANE": "JERSEY-INDY",
            "OHUB": "JERSEY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "INDY",
            "LANE": "JERSEY-INDY",
            "OHUB": "JERSEY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JERSEY-LA": [
          {
            "DHUB": "LA",
            "LANE": "JERSEY-LA",
            "OHUB": "JERSEY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "JERSEY-LA",
            "OHUB": "JERSEY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "JERSEY-LA",
            "OHUB": "JERSEY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "JERSEY-LA",
            "OHUB": "JERSEY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "JERSEY-LA",
            "OHUB": "JERSEY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JERSEY-NWOHIO": [
          {
            "DHUB": "NWOHIO",
            "LANE": "JERSEY-NWOHIO",
            "OHUB": "JERSEY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "JERSEY-NWOHIO",
            "OHUB": "JERSEY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "JERSEY-NWOHIO",
            "OHUB": "JERSEY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "JERSEY-NWOHIO",
            "OHUB": "JERSEY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "JERSEY-NWOHIO",
            "OHUB": "JERSEY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JERSEY-ST LOUIS": [
          {
            "DHUB": "ST LOUIS",
            "LANE": "JERSEY-ST LOUIS",
            "OHUB": "JERSEY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "JERSEY-ST LOUIS",
            "OHUB": "JERSEY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "JERSEY-ST LOUIS",
            "OHUB": "JERSEY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "JERSEY-ST LOUIS",
            "OHUB": "JERSEY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "JERSEY-ST LOUIS",
            "OHUB": "JERSEY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "JERSEY-SYRACUSE": [
          {
            "DHUB": "SYRACUSE",
            "LANE": "JERSEY-SYRACUSE",
            "OHUB": "JERSEY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SYRACUSE",
            "LANE": "JERSEY-SYRACUSE",
            "OHUB": "JERSEY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SYRACUSE",
            "LANE": "JERSEY-SYRACUSE",
            "OHUB": "JERSEY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SYRACUSE",
            "LANE": "JERSEY-SYRACUSE",
            "OHUB": "JERSEY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SYRACUSE",
            "LANE": "JERSEY-SYRACUSE",
            "OHUB": "JERSEY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "KANSAS CTY-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "KANSAS CTY-CHICAGO",
            "OHUB": "KANSAS CTY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "KANSAS CTY-CHICAGO",
            "OHUB": "KANSAS CTY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "KANSAS CTY-CHICAGO",
            "OHUB": "KANSAS CTY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "KANSAS CTY-CHICAGO",
            "OHUB": "KANSAS CTY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "KANSAS CTY-CHICAGO",
            "OHUB": "KANSAS CTY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "KANSAS CTY-KANSAS CTY": [
          {
            "DHUB": "KANSAS CTY",
            "LANE": "KANSAS CTY-KANSAS CTY",
            "OHUB": "KANSAS CTY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "KANSAS CTY-KANSAS CTY",
            "OHUB": "KANSAS CTY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "KANSAS CTY-KANSAS CTY",
            "OHUB": "KANSAS CTY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "KANSAS CTY-KANSAS CTY",
            "OHUB": "KANSAS CTY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "KANSAS CTY-KANSAS CTY",
            "OHUB": "KANSAS CTY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "KANSAS CTY-LA": [
          {
            "DHUB": "LA",
            "LANE": "KANSAS CTY-LA",
            "OHUB": "KANSAS CTY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "KANSAS CTY-LA",
            "OHUB": "KANSAS CTY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "KANSAS CTY-LA",
            "OHUB": "KANSAS CTY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "KANSAS CTY-LA",
            "OHUB": "KANSAS CTY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "KANSAS CTY-LA",
            "OHUB": "KANSAS CTY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "KANSAS CTY-MONTERREY": [
          {
            "DHUB": "MONTERREY",
            "LANE": "KANSAS CTY-MONTERREY",
            "OHUB": "KANSAS CTY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "KANSAS CTY-MONTERREY",
            "OHUB": "KANSAS CTY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "KANSAS CTY-MONTERREY",
            "OHUB": "KANSAS CTY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "KANSAS CTY-MONTERREY",
            "OHUB": "KANSAS CTY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "KANSAS CTY-MONTERREY",
            "OHUB": "KANSAS CTY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "KANSAS CTY-SLP": [
          {
            "DHUB": "SLP",
            "LANE": "KANSAS CTY-SLP",
            "OHUB": "KANSAS CTY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SLP",
            "LANE": "KANSAS CTY-SLP",
            "OHUB": "KANSAS CTY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SLP",
            "LANE": "KANSAS CTY-SLP",
            "OHUB": "KANSAS CTY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SLP",
            "LANE": "KANSAS CTY-SLP",
            "OHUB": "KANSAS CTY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SLP",
            "LANE": "KANSAS CTY-SLP",
            "OHUB": "KANSAS CTY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "KANSAS CTY-STOCKTON": [
          {
            "DHUB": "STOCKTON",
            "LANE": "KANSAS CTY-STOCKTON",
            "OHUB": "KANSAS CTY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "KANSAS CTY-STOCKTON",
            "OHUB": "KANSAS CTY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "KANSAS CTY-STOCKTON",
            "OHUB": "KANSAS CTY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "KANSAS CTY-STOCKTON",
            "OHUB": "KANSAS CTY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "KANSAS CTY-STOCKTON",
            "OHUB": "KANSAS CTY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "LA-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "LA-CHICAGO",
            "OHUB": "LA",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "LA-CHICAGO",
            "OHUB": "LA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "LA-CHICAGO",
            "OHUB": "LA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "LA-CHICAGO",
            "OHUB": "LA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "LA-CHICAGO",
            "OHUB": "LA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "LA-KANSAS CTY": [
          {
            "DHUB": "KANSAS CTY",
            "LANE": "LA-KANSAS CTY",
            "OHUB": "LA",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "LA-KANSAS CTY",
            "OHUB": "LA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "LA-KANSAS CTY",
            "OHUB": "LA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "LA-KANSAS CTY",
            "OHUB": "LA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "LA-KANSAS CTY",
            "OHUB": "LA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "LA-LA": [
          {
            "DHUB": "LA",
            "LANE": "LA-LA",
            "OHUB": "LA",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "LA-LA",
            "OHUB": "LA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "LA-LA",
            "OHUB": "LA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "LA-LA",
            "OHUB": "LA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "LA-LA",
            "OHUB": "LA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "LA-SAN BERN": [
          {
            "DHUB": "SAN BERN",
            "LANE": "LA-SAN BERN",
            "OHUB": "LA",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "LA-SAN BERN",
            "OHUB": "LA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "LA-SAN BERN",
            "OHUB": "LA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "LA-SAN BERN",
            "OHUB": "LA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "LA-SAN BERN",
            "OHUB": "LA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "LA-ST LOUIS": [
          {
            "DHUB": "ST LOUIS",
            "LANE": "LA-ST LOUIS",
            "OHUB": "LA",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "LA-ST LOUIS",
            "OHUB": "LA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "LA-ST LOUIS",
            "OHUB": "LA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "LA-ST LOUIS",
            "OHUB": "LA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "LA-ST LOUIS",
            "OHUB": "LA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "LAREDO-MONTERREY": [
          {
            "DHUB": "MONTERREY",
            "LANE": "LAREDO-MONTERREY",
            "OHUB": "LAREDO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "LAREDO-MONTERREY",
            "OHUB": "LAREDO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "LAREDO-MONTERREY",
            "OHUB": "LAREDO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "LAREDO-MONTERREY",
            "OHUB": "LAREDO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "LAREDO-MONTERREY",
            "OHUB": "LAREDO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "LAREDO-SLP": [
          {
            "DHUB": "SLP",
            "LANE": "LAREDO-SLP",
            "OHUB": "LAREDO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SLP",
            "LANE": "LAREDO-SLP",
            "OHUB": "LAREDO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SLP",
            "LANE": "LAREDO-SLP",
            "OHUB": "LAREDO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SLP",
            "LANE": "LAREDO-SLP",
            "OHUB": "LAREDO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SLP",
            "LANE": "LAREDO-SLP",
            "OHUB": "LAREDO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "MEMPHIS-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "MEMPHIS-CHICAGO",
            "OHUB": "MEMPHIS",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "MEMPHIS-CHICAGO",
            "OHUB": "MEMPHIS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "MEMPHIS-CHICAGO",
            "OHUB": "MEMPHIS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "MEMPHIS-CHICAGO",
            "OHUB": "MEMPHIS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "MEMPHIS-CHICAGO",
            "OHUB": "MEMPHIS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "MEMPHIS-LA": [
          {
            "DHUB": "LA",
            "LANE": "MEMPHIS-LA",
            "OHUB": "MEMPHIS",
            "name": "AVG_TRANSIT",
            "value": 132.10640130353835
          },
          {
            "DHUB": "LA",
            "LANE": "MEMPHIS-LA",
            "OHUB": "MEMPHIS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "MEMPHIS-LA",
            "OHUB": "MEMPHIS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "MEMPHIS-LA",
            "OHUB": "MEMPHIS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "MEMPHIS-LA",
            "OHUB": "MEMPHIS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "MEMPHIS-SAN BERN": [
          {
            "DHUB": "SAN BERN",
            "LANE": "MEMPHIS-SAN BERN",
            "OHUB": "MEMPHIS",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "MEMPHIS-SAN BERN",
            "OHUB": "MEMPHIS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "MEMPHIS-SAN BERN",
            "OHUB": "MEMPHIS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "MEMPHIS-SAN BERN",
            "OHUB": "MEMPHIS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "MEMPHIS-SAN BERN",
            "OHUB": "MEMPHIS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "MEMPHIS-STOCKTON": [
          {
            "DHUB": "STOCKTON",
            "LANE": "MEMPHIS-STOCKTON",
            "OHUB": "MEMPHIS",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "MEMPHIS-STOCKTON",
            "OHUB": "MEMPHIS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "MEMPHIS-STOCKTON",
            "OHUB": "MEMPHIS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "MEMPHIS-STOCKTON",
            "OHUB": "MEMPHIS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "MEMPHIS-STOCKTON",
            "OHUB": "MEMPHIS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "MIAMI-CHARLOTTE": [
          {
            "DHUB": "CHARLOTTE",
            "LANE": "MIAMI-CHARLOTTE",
            "OHUB": "MIAMI",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHARLOTTE",
            "LANE": "MIAMI-CHARLOTTE",
            "OHUB": "MIAMI",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHARLOTTE",
            "LANE": "MIAMI-CHARLOTTE",
            "OHUB": "MIAMI",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHARLOTTE",
            "LANE": "MIAMI-CHARLOTTE",
            "OHUB": "MIAMI",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHARLOTTE",
            "LANE": "MIAMI-CHARLOTTE",
            "OHUB": "MIAMI",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "MIAMI-JACKSONVLE": [
          {
            "DHUB": "JACKSONVLE",
            "LANE": "MIAMI-JACKSONVLE",
            "OHUB": "MIAMI",
            "name": "AVG_TRANSIT",
            "value": 24.70446635730859
          },
          {
            "DHUB": "JACKSONVLE",
            "LANE": "MIAMI-JACKSONVLE",
            "OHUB": "MIAMI",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "JACKSONVLE",
            "LANE": "MIAMI-JACKSONVLE",
            "OHUB": "MIAMI",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "JACKSONVLE",
            "LANE": "MIAMI-JACKSONVLE",
            "OHUB": "MIAMI",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "JACKSONVLE",
            "LANE": "MIAMI-JACKSONVLE",
            "OHUB": "MIAMI",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "MONTERREY-MONTERREY": [
          {
            "DHUB": "MONTERREY",
            "LANE": "MONTERREY-MONTERREY",
            "OHUB": "MONTERREY",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "MONTERREY-MONTERREY",
            "OHUB": "MONTERREY",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "MONTERREY-MONTERREY",
            "OHUB": "MONTERREY",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "MONTERREY-MONTERREY",
            "OHUB": "MONTERREY",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MONTERREY",
            "LANE": "MONTERREY-MONTERREY",
            "OHUB": "MONTERREY",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "MONTREAL-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "MONTREAL-CHICAGO",
            "OHUB": "MONTREAL",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "MONTREAL-CHICAGO",
            "OHUB": "MONTREAL",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "MONTREAL-CHICAGO",
            "OHUB": "MONTREAL",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "MONTREAL-CHICAGO",
            "OHUB": "MONTREAL",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "MONTREAL-CHICAGO",
            "OHUB": "MONTREAL",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "MONTREAL-TORONTO": [
          {
            "DHUB": "TORONTO",
            "LANE": "MONTREAL-TORONTO",
            "OHUB": "MONTREAL",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "TORONTO",
            "LANE": "MONTREAL-TORONTO",
            "OHUB": "MONTREAL",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "TORONTO",
            "LANE": "MONTREAL-TORONTO",
            "OHUB": "MONTREAL",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "TORONTO",
            "LANE": "MONTREAL-TORONTO",
            "OHUB": "MONTREAL",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "TORONTO",
            "LANE": "MONTREAL-TORONTO",
            "OHUB": "MONTREAL",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "NORFOLK-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "NORFOLK-CHICAGO",
            "OHUB": "NORFOLK",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "NORFOLK-CHICAGO",
            "OHUB": "NORFOLK",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "NORFOLK-CHICAGO",
            "OHUB": "NORFOLK",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "NORFOLK-CHICAGO",
            "OHUB": "NORFOLK",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "NORFOLK-CHICAGO",
            "OHUB": "NORFOLK",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "NWOHIO-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "NWOHIO-CHICAGO",
            "OHUB": "NWOHIO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "NWOHIO-CHICAGO",
            "OHUB": "NWOHIO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "NWOHIO-CHICAGO",
            "OHUB": "NWOHIO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "NWOHIO-CHICAGO",
            "OHUB": "NWOHIO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "NWOHIO-CHICAGO",
            "OHUB": "NWOHIO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "NWOHIO-LA": [
          {
            "DHUB": "LA",
            "LANE": "NWOHIO-LA",
            "OHUB": "NWOHIO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "NWOHIO-LA",
            "OHUB": "NWOHIO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "NWOHIO-LA",
            "OHUB": "NWOHIO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "NWOHIO-LA",
            "OHUB": "NWOHIO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "NWOHIO-LA",
            "OHUB": "NWOHIO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "NWOHIO-SEATTLE": [
          {
            "DHUB": "SEATTLE",
            "LANE": "NWOHIO-SEATTLE",
            "OHUB": "NWOHIO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "NWOHIO-SEATTLE",
            "OHUB": "NWOHIO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "NWOHIO-SEATTLE",
            "OHUB": "NWOHIO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "NWOHIO-SEATTLE",
            "OHUB": "NWOHIO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "NWOHIO-SEATTLE",
            "OHUB": "NWOHIO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "NWOHIO-STOCKTON": [
          {
            "DHUB": "STOCKTON",
            "LANE": "NWOHIO-STOCKTON",
            "OHUB": "NWOHIO",
            "name": "AVG_TRANSIT",
            "value": 176.3136761105285
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "NWOHIO-STOCKTON",
            "OHUB": "NWOHIO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "NWOHIO-STOCKTON",
            "OHUB": "NWOHIO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "NWOHIO-STOCKTON",
            "OHUB": "NWOHIO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "NWOHIO-STOCKTON",
            "OHUB": "NWOHIO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ORLANDO-ATLANTA": [
          {
            "DHUB": "ATLANTA",
            "LANE": "ORLANDO-ATLANTA",
            "OHUB": "ORLANDO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "ATLANTA",
            "LANE": "ORLANDO-ATLANTA",
            "OHUB": "ORLANDO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "ATLANTA",
            "LANE": "ORLANDO-ATLANTA",
            "OHUB": "ORLANDO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "ATLANTA",
            "LANE": "ORLANDO-ATLANTA",
            "OHUB": "ORLANDO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "ATLANTA",
            "LANE": "ORLANDO-ATLANTA",
            "OHUB": "ORLANDO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ORLANDO-BALTIMORE": [
          {
            "DHUB": "BALTIMORE",
            "LANE": "ORLANDO-BALTIMORE",
            "OHUB": "ORLANDO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "ORLANDO-BALTIMORE",
            "OHUB": "ORLANDO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "ORLANDO-BALTIMORE",
            "OHUB": "ORLANDO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "ORLANDO-BALTIMORE",
            "OHUB": "ORLANDO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "BALTIMORE",
            "LANE": "ORLANDO-BALTIMORE",
            "OHUB": "ORLANDO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ORLANDO-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "ORLANDO-CHICAGO",
            "OHUB": "ORLANDO",
            "name": "AVG_TRANSIT",
            "value": 74.2527456216132
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ORLANDO-CHICAGO",
            "OHUB": "ORLANDO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ORLANDO-CHICAGO",
            "OHUB": "ORLANDO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ORLANDO-CHICAGO",
            "OHUB": "ORLANDO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ORLANDO-CHICAGO",
            "OHUB": "ORLANDO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ORLANDO-NWOHIO": [
          {
            "DHUB": "NWOHIO",
            "LANE": "ORLANDO-NWOHIO",
            "OHUB": "ORLANDO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "ORLANDO-NWOHIO",
            "OHUB": "ORLANDO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "ORLANDO-NWOHIO",
            "OHUB": "ORLANDO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "ORLANDO-NWOHIO",
            "OHUB": "ORLANDO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "ORLANDO-NWOHIO",
            "OHUB": "ORLANDO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PHOENIX-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "PHOENIX-CHICAGO",
            "OHUB": "PHOENIX",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "PHOENIX-CHICAGO",
            "OHUB": "PHOENIX",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "PHOENIX-CHICAGO",
            "OHUB": "PHOENIX",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "PHOENIX-CHICAGO",
            "OHUB": "PHOENIX",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "PHOENIX-CHICAGO",
            "OHUB": "PHOENIX",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PHOENIX-DALLAS": [
          {
            "DHUB": "DALLAS",
            "LANE": "PHOENIX-DALLAS",
            "OHUB": "PHOENIX",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "DALLAS",
            "LANE": "PHOENIX-DALLAS",
            "OHUB": "PHOENIX",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "DALLAS",
            "LANE": "PHOENIX-DALLAS",
            "OHUB": "PHOENIX",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "DALLAS",
            "LANE": "PHOENIX-DALLAS",
            "OHUB": "PHOENIX",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "DALLAS",
            "LANE": "PHOENIX-DALLAS",
            "OHUB": "PHOENIX",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PHOENIX-KANSAS CTY": [
          {
            "DHUB": "KANSAS CTY",
            "LANE": "PHOENIX-KANSAS CTY",
            "OHUB": "PHOENIX",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "PHOENIX-KANSAS CTY",
            "OHUB": "PHOENIX",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "PHOENIX-KANSAS CTY",
            "OHUB": "PHOENIX",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "PHOENIX-KANSAS CTY",
            "OHUB": "PHOENIX",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "KANSAS CTY",
            "LANE": "PHOENIX-KANSAS CTY",
            "OHUB": "PHOENIX",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PHOENIX-LA": [
          {
            "DHUB": "LA",
            "LANE": "PHOENIX-LA",
            "OHUB": "PHOENIX",
            "name": "AVG_TRANSIT",
            "value": 128.52291106845794
          },
          {
            "DHUB": "LA",
            "LANE": "PHOENIX-LA",
            "OHUB": "PHOENIX",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "PHOENIX-LA",
            "OHUB": "PHOENIX",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "PHOENIX-LA",
            "OHUB": "PHOENIX",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "PHOENIX-LA",
            "OHUB": "PHOENIX",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PHOENIX-MEMPHIS": [
          {
            "DHUB": "MEMPHIS",
            "LANE": "PHOENIX-MEMPHIS",
            "OHUB": "PHOENIX",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "PHOENIX-MEMPHIS",
            "OHUB": "PHOENIX",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "PHOENIX-MEMPHIS",
            "OHUB": "PHOENIX",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "PHOENIX-MEMPHIS",
            "OHUB": "PHOENIX",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "PHOENIX-MEMPHIS",
            "OHUB": "PHOENIX",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PHOENIX-SAN BERN": [
          {
            "DHUB": "SAN BERN",
            "LANE": "PHOENIX-SAN BERN",
            "OHUB": "PHOENIX",
            "name": "AVG_TRANSIT",
            "value": 153.67710654098818
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "PHOENIX-SAN BERN",
            "OHUB": "PHOENIX",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "PHOENIX-SAN BERN",
            "OHUB": "PHOENIX",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "PHOENIX-SAN BERN",
            "OHUB": "PHOENIX",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "PHOENIX-SAN BERN",
            "OHUB": "PHOENIX",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PHOENIX-ST LOUIS": [
          {
            "DHUB": "ST LOUIS",
            "LANE": "PHOENIX-ST LOUIS",
            "OHUB": "PHOENIX",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "PHOENIX-ST LOUIS",
            "OHUB": "PHOENIX",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "PHOENIX-ST LOUIS",
            "OHUB": "PHOENIX",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "PHOENIX-ST LOUIS",
            "OHUB": "PHOENIX",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "PHOENIX-ST LOUIS",
            "OHUB": "PHOENIX",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PORTLAND-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "PORTLAND-CHICAGO",
            "OHUB": "PORTLAND",
            "name": "AVG_TRANSIT",
            "value": 134.76219350563306
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "PORTLAND-CHICAGO",
            "OHUB": "PORTLAND",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "PORTLAND-CHICAGO",
            "OHUB": "PORTLAND",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "PORTLAND-CHICAGO",
            "OHUB": "PORTLAND",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "PORTLAND-CHICAGO",
            "OHUB": "PORTLAND",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PORTLAND-LA": [
          {
            "DHUB": "LA",
            "LANE": "PORTLAND-LA",
            "OHUB": "PORTLAND",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "PORTLAND-LA",
            "OHUB": "PORTLAND",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "PORTLAND-LA",
            "OHUB": "PORTLAND",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "PORTLAND-LA",
            "OHUB": "PORTLAND",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "PORTLAND-LA",
            "OHUB": "PORTLAND",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PORTLAND-SEATTLE": [
          {
            "DHUB": "SEATTLE",
            "LANE": "PORTLAND-SEATTLE",
            "OHUB": "PORTLAND",
            "name": "AVG_TRANSIT",
            "value": 98.85343356792485
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "PORTLAND-SEATTLE",
            "OHUB": "PORTLAND",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "PORTLAND-SEATTLE",
            "OHUB": "PORTLAND",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "PORTLAND-SEATTLE",
            "OHUB": "PORTLAND",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "PORTLAND-SEATTLE",
            "OHUB": "PORTLAND",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PORTLAND-ST PAUL": [
          {
            "DHUB": "ST PAUL",
            "LANE": "PORTLAND-ST PAUL",
            "OHUB": "PORTLAND",
            "name": "AVG_TRANSIT",
            "value": 130.05245478036184
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "PORTLAND-ST PAUL",
            "OHUB": "PORTLAND",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "PORTLAND-ST PAUL",
            "OHUB": "PORTLAND",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "PORTLAND-ST PAUL",
            "OHUB": "PORTLAND",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "PORTLAND-ST PAUL",
            "OHUB": "PORTLAND",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "PORTLAND-STOCKTON": [
          {
            "DHUB": "STOCKTON",
            "LANE": "PORTLAND-STOCKTON",
            "OHUB": "PORTLAND",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "PORTLAND-STOCKTON",
            "OHUB": "PORTLAND",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "PORTLAND-STOCKTON",
            "OHUB": "PORTLAND",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "PORTLAND-STOCKTON",
            "OHUB": "PORTLAND",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "PORTLAND-STOCKTON",
            "OHUB": "PORTLAND",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SALT LAKE-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "SALT LAKE-CHICAGO",
            "OHUB": "SALT LAKE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SALT LAKE-CHICAGO",
            "OHUB": "SALT LAKE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SALT LAKE-CHICAGO",
            "OHUB": "SALT LAKE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SALT LAKE-CHICAGO",
            "OHUB": "SALT LAKE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SALT LAKE-CHICAGO",
            "OHUB": "SALT LAKE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SAN BERN-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "SAN BERN-CHICAGO",
            "OHUB": "SAN BERN",
            "name": "AVG_TRANSIT",
            "value": 121.45566353887392
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SAN BERN-CHICAGO",
            "OHUB": "SAN BERN",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SAN BERN-CHICAGO",
            "OHUB": "SAN BERN",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SAN BERN-CHICAGO",
            "OHUB": "SAN BERN",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SAN BERN-CHICAGO",
            "OHUB": "SAN BERN",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SAN BERN-DALLAS": [
          {
            "DHUB": "DALLAS",
            "LANE": "SAN BERN-DALLAS",
            "OHUB": "SAN BERN",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "DALLAS",
            "LANE": "SAN BERN-DALLAS",
            "OHUB": "SAN BERN",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "DALLAS",
            "LANE": "SAN BERN-DALLAS",
            "OHUB": "SAN BERN",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "DALLAS",
            "LANE": "SAN BERN-DALLAS",
            "OHUB": "SAN BERN",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "DALLAS",
            "LANE": "SAN BERN-DALLAS",
            "OHUB": "SAN BERN",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SAN BERN-LA": [
          {
            "DHUB": "LA",
            "LANE": "SAN BERN-LA",
            "OHUB": "SAN BERN",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "SAN BERN-LA",
            "OHUB": "SAN BERN",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "SAN BERN-LA",
            "OHUB": "SAN BERN",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "SAN BERN-LA",
            "OHUB": "SAN BERN",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "SAN BERN-LA",
            "OHUB": "SAN BERN",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SAN BERN-STOCKTON": [
          {
            "DHUB": "STOCKTON",
            "LANE": "SAN BERN-STOCKTON",
            "OHUB": "SAN BERN",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "SAN BERN-STOCKTON",
            "OHUB": "SAN BERN",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "SAN BERN-STOCKTON",
            "OHUB": "SAN BERN",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "SAN BERN-STOCKTON",
            "OHUB": "SAN BERN",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "STOCKTON",
            "LANE": "SAN BERN-STOCKTON",
            "OHUB": "SAN BERN",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SAVANNAH-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "SAVANNAH-CHICAGO",
            "OHUB": "SAVANNAH",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SAVANNAH-CHICAGO",
            "OHUB": "SAVANNAH",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SAVANNAH-CHICAGO",
            "OHUB": "SAVANNAH",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SAVANNAH-CHICAGO",
            "OHUB": "SAVANNAH",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SAVANNAH-CHICAGO",
            "OHUB": "SAVANNAH",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SEATTLE-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "SEATTLE-CHICAGO",
            "OHUB": "SEATTLE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SEATTLE-CHICAGO",
            "OHUB": "SEATTLE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SEATTLE-CHICAGO",
            "OHUB": "SEATTLE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SEATTLE-CHICAGO",
            "OHUB": "SEATTLE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SEATTLE-CHICAGO",
            "OHUB": "SEATTLE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SEATTLE-DALLAS": [
          {
            "DHUB": "DALLAS",
            "LANE": "SEATTLE-DALLAS",
            "OHUB": "SEATTLE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "DALLAS",
            "LANE": "SEATTLE-DALLAS",
            "OHUB": "SEATTLE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "DALLAS",
            "LANE": "SEATTLE-DALLAS",
            "OHUB": "SEATTLE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "DALLAS",
            "LANE": "SEATTLE-DALLAS",
            "OHUB": "SEATTLE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "DALLAS",
            "LANE": "SEATTLE-DALLAS",
            "OHUB": "SEATTLE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SEATTLE-ST PAUL": [
          {
            "DHUB": "ST PAUL",
            "LANE": "SEATTLE-ST PAUL",
            "OHUB": "SEATTLE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "SEATTLE-ST PAUL",
            "OHUB": "SEATTLE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "SEATTLE-ST PAUL",
            "OHUB": "SEATTLE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "SEATTLE-ST PAUL",
            "OHUB": "SEATTLE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "ST PAUL",
            "LANE": "SEATTLE-ST PAUL",
            "OHUB": "SEATTLE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SLP-SLP": [
          {
            "DHUB": "SLP",
            "LANE": "SLP-SLP",
            "OHUB": "SLP",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SLP",
            "LANE": "SLP-SLP",
            "OHUB": "SLP",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SLP",
            "LANE": "SLP-SLP",
            "OHUB": "SLP",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SLP",
            "LANE": "SLP-SLP",
            "OHUB": "SLP",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SLP",
            "LANE": "SLP-SLP",
            "OHUB": "SLP",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SPRINGFLD-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "SPRINGFLD-CHICAGO",
            "OHUB": "SPRINGFLD",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SPRINGFLD-CHICAGO",
            "OHUB": "SPRINGFLD",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SPRINGFLD-CHICAGO",
            "OHUB": "SPRINGFLD",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SPRINGFLD-CHICAGO",
            "OHUB": "SPRINGFLD",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SPRINGFLD-CHICAGO",
            "OHUB": "SPRINGFLD",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SPRINGFLD-NWOHIO": [
          {
            "DHUB": "NWOHIO",
            "LANE": "SPRINGFLD-NWOHIO",
            "OHUB": "SPRINGFLD",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "SPRINGFLD-NWOHIO",
            "OHUB": "SPRINGFLD",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "SPRINGFLD-NWOHIO",
            "OHUB": "SPRINGFLD",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "SPRINGFLD-NWOHIO",
            "OHUB": "SPRINGFLD",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "NWOHIO",
            "LANE": "SPRINGFLD-NWOHIO",
            "OHUB": "SPRINGFLD",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SPRINGFLD-ST LOUIS": [
          {
            "DHUB": "ST LOUIS",
            "LANE": "SPRINGFLD-ST LOUIS",
            "OHUB": "SPRINGFLD",
            "name": "AVG_TRANSIT",
            "value": 61.1040463179808
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "SPRINGFLD-ST LOUIS",
            "OHUB": "SPRINGFLD",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "SPRINGFLD-ST LOUIS",
            "OHUB": "SPRINGFLD",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "SPRINGFLD-ST LOUIS",
            "OHUB": "SPRINGFLD",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "SPRINGFLD-ST LOUIS",
            "OHUB": "SPRINGFLD",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SPRINGFLD-WORCESTER": [
          {
            "DHUB": "WORCESTER",
            "LANE": "SPRINGFLD-WORCESTER",
            "OHUB": "SPRINGFLD",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "WORCESTER",
            "LANE": "SPRINGFLD-WORCESTER",
            "OHUB": "SPRINGFLD",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "WORCESTER",
            "LANE": "SPRINGFLD-WORCESTER",
            "OHUB": "SPRINGFLD",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "WORCESTER",
            "LANE": "SPRINGFLD-WORCESTER",
            "OHUB": "SPRINGFLD",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "WORCESTER",
            "LANE": "SPRINGFLD-WORCESTER",
            "OHUB": "SPRINGFLD",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ST LOUIS-LA": [
          {
            "DHUB": "LA",
            "LANE": "ST LOUIS-LA",
            "OHUB": "ST LOUIS",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "ST LOUIS-LA",
            "OHUB": "ST LOUIS",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "ST LOUIS-LA",
            "OHUB": "ST LOUIS",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "ST LOUIS-LA",
            "OHUB": "ST LOUIS",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "ST LOUIS-LA",
            "OHUB": "ST LOUIS",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ST PAUL-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "ST PAUL-CHICAGO",
            "OHUB": "ST PAUL",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ST PAUL-CHICAGO",
            "OHUB": "ST PAUL",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ST PAUL-CHICAGO",
            "OHUB": "ST PAUL",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ST PAUL-CHICAGO",
            "OHUB": "ST PAUL",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "ST PAUL-CHICAGO",
            "OHUB": "ST PAUL",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ST PAUL-LA": [
          {
            "DHUB": "LA",
            "LANE": "ST PAUL-LA",
            "OHUB": "ST PAUL",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "ST PAUL-LA",
            "OHUB": "ST PAUL",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "ST PAUL-LA",
            "OHUB": "ST PAUL",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "ST PAUL-LA",
            "OHUB": "ST PAUL",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "ST PAUL-LA",
            "OHUB": "ST PAUL",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "ST PAUL-SEATTLE": [
          {
            "DHUB": "SEATTLE",
            "LANE": "ST PAUL-SEATTLE",
            "OHUB": "ST PAUL",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "ST PAUL-SEATTLE",
            "OHUB": "ST PAUL",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "ST PAUL-SEATTLE",
            "OHUB": "ST PAUL",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "ST PAUL-SEATTLE",
            "OHUB": "ST PAUL",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SEATTLE",
            "LANE": "ST PAUL-SEATTLE",
            "OHUB": "ST PAUL",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "STOCKTON-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "STOCKTON-CHICAGO",
            "OHUB": "STOCKTON",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "STOCKTON-CHICAGO",
            "OHUB": "STOCKTON",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "STOCKTON-CHICAGO",
            "OHUB": "STOCKTON",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "STOCKTON-CHICAGO",
            "OHUB": "STOCKTON",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "STOCKTON-CHICAGO",
            "OHUB": "STOCKTON",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "STOCKTON-LA": [
          {
            "DHUB": "LA",
            "LANE": "STOCKTON-LA",
            "OHUB": "STOCKTON",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "STOCKTON-LA",
            "OHUB": "STOCKTON",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "STOCKTON-LA",
            "OHUB": "STOCKTON",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "STOCKTON-LA",
            "OHUB": "STOCKTON",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "STOCKTON-LA",
            "OHUB": "STOCKTON",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "STOCKTON-SAN BERN": [
          {
            "DHUB": "SAN BERN",
            "LANE": "STOCKTON-SAN BERN",
            "OHUB": "STOCKTON",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "STOCKTON-SAN BERN",
            "OHUB": "STOCKTON",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "STOCKTON-SAN BERN",
            "OHUB": "STOCKTON",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "STOCKTON-SAN BERN",
            "OHUB": "STOCKTON",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SAN BERN",
            "LANE": "STOCKTON-SAN BERN",
            "OHUB": "STOCKTON",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SYRACUSE-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "SYRACUSE-CHICAGO",
            "OHUB": "SYRACUSE",
            "name": "AVG_TRANSIT",
            "value": 49.83983969825559
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SYRACUSE-CHICAGO",
            "OHUB": "SYRACUSE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SYRACUSE-CHICAGO",
            "OHUB": "SYRACUSE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SYRACUSE-CHICAGO",
            "OHUB": "SYRACUSE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "SYRACUSE-CHICAGO",
            "OHUB": "SYRACUSE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SYRACUSE-LA": [
          {
            "DHUB": "LA",
            "LANE": "SYRACUSE-LA",
            "OHUB": "SYRACUSE",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "SYRACUSE-LA",
            "OHUB": "SYRACUSE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "SYRACUSE-LA",
            "OHUB": "SYRACUSE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "SYRACUSE-LA",
            "OHUB": "SYRACUSE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "SYRACUSE-LA",
            "OHUB": "SYRACUSE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "SYRACUSE-ST LOUIS": [
          {
            "DHUB": "ST LOUIS",
            "LANE": "SYRACUSE-ST LOUIS",
            "OHUB": "SYRACUSE",
            "name": "AVG_TRANSIT",
            "value": 56.672825659189265
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "SYRACUSE-ST LOUIS",
            "OHUB": "SYRACUSE",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "SYRACUSE-ST LOUIS",
            "OHUB": "SYRACUSE",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "SYRACUSE-ST LOUIS",
            "OHUB": "SYRACUSE",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "ST LOUIS",
            "LANE": "SYRACUSE-ST LOUIS",
            "OHUB": "SYRACUSE",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "TOLUCA-TOLUCA": [
          {
            "DHUB": "TOLUCA",
            "LANE": "TOLUCA-TOLUCA",
            "OHUB": "TOLUCA",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "TOLUCA",
            "LANE": "TOLUCA-TOLUCA",
            "OHUB": "TOLUCA",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "TOLUCA",
            "LANE": "TOLUCA-TOLUCA",
            "OHUB": "TOLUCA",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "TOLUCA",
            "LANE": "TOLUCA-TOLUCA",
            "OHUB": "TOLUCA",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "TOLUCA",
            "LANE": "TOLUCA-TOLUCA",
            "OHUB": "TOLUCA",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "TORONTO-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "TORONTO-CHICAGO",
            "OHUB": "TORONTO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "TORONTO-CHICAGO",
            "OHUB": "TORONTO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "TORONTO-CHICAGO",
            "OHUB": "TORONTO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "TORONTO-CHICAGO",
            "OHUB": "TORONTO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "TORONTO-CHICAGO",
            "OHUB": "TORONTO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "TORONTO-MEMPHIS": [
          {
            "DHUB": "MEMPHIS",
            "LANE": "TORONTO-MEMPHIS",
            "OHUB": "TORONTO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "TORONTO-MEMPHIS",
            "OHUB": "TORONTO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "TORONTO-MEMPHIS",
            "OHUB": "TORONTO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "TORONTO-MEMPHIS",
            "OHUB": "TORONTO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MEMPHIS",
            "LANE": "TORONTO-MEMPHIS",
            "OHUB": "TORONTO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "TORONTO-MONTREAL": [
          {
            "DHUB": "MONTREAL",
            "LANE": "TORONTO-MONTREAL",
            "OHUB": "TORONTO",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "MONTREAL",
            "LANE": "TORONTO-MONTREAL",
            "OHUB": "TORONTO",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "MONTREAL",
            "LANE": "TORONTO-MONTREAL",
            "OHUB": "TORONTO",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "MONTREAL",
            "LANE": "TORONTO-MONTREAL",
            "OHUB": "TORONTO",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "MONTREAL",
            "LANE": "TORONTO-MONTREAL",
            "OHUB": "TORONTO",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "WORCESTER-CHICAGO": [
          {
            "DHUB": "CHICAGO",
            "LANE": "WORCESTER-CHICAGO",
            "OHUB": "WORCESTER",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "WORCESTER-CHICAGO",
            "OHUB": "WORCESTER",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "WORCESTER-CHICAGO",
            "OHUB": "WORCESTER",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "WORCESTER-CHICAGO",
            "OHUB": "WORCESTER",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "CHICAGO",
            "LANE": "WORCESTER-CHICAGO",
            "OHUB": "WORCESTER",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "WORCESTER-LA": [
          {
            "DHUB": "LA",
            "LANE": "WORCESTER-LA",
            "OHUB": "WORCESTER",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "LA",
            "LANE": "WORCESTER-LA",
            "OHUB": "WORCESTER",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "LA",
            "LANE": "WORCESTER-LA",
            "OHUB": "WORCESTER",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "LA",
            "LANE": "WORCESTER-LA",
            "OHUB": "WORCESTER",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "LA",
            "LANE": "WORCESTER-LA",
            "OHUB": "WORCESTER",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ],
        "WORCESTER-SPRINGFLD": [
          {
            "DHUB": "SPRINGFLD",
            "LANE": "WORCESTER-SPRINGFLD",
            "OHUB": "WORCESTER",
            "name": "AVG_TRANSIT",
            "value": null
          },
          {
            "DHUB": "SPRINGFLD",
            "LANE": "WORCESTER-SPRINGFLD",
            "OHUB": "WORCESTER",
            "name": "PRICE",
            "value": 450
          },
          {
            "DHUB": "SPRINGFLD",
            "LANE": "WORCESTER-SPRINGFLD",
            "OHUB": "WORCESTER",
            "name": "ACTIVE",
            "value": "Y"
          },
          {
            "DHUB": "SPRINGFLD",
            "LANE": "WORCESTER-SPRINGFLD",
            "OHUB": "WORCESTER",
            "name": "laneTransitOverride",
            "value": "N"
          },
          {
            "DHUB": "SPRINGFLD",
            "LANE": "WORCESTER-SPRINGFLD",
            "OHUB": "WORCESTER",
            "name": "WEEKLY_CAP",
            "value": 560
          }
        ]
      }
    }
  };
};

export const addAdjustment = (value) => {
  return {
    type: ADD_ADJUSTMENT,
    payload: {
      hub: 'ATLANTA',
      name: 'hubIlodAvg',
      value: value
    }
  }
}

//line 11 add payload with the fake json response body of the cards