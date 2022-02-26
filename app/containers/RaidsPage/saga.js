import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_PLAYER_STATS } from './constants';
import { loadPlayerStatsSuccess, loadPlayerStatsFailed } from './actions';

// Individual exports for testing
export default function* raidsPageSaga() {
  yield takeLatest(LOAD_PLAYER_STATS, loadPlayerStatsSaga)
}

export function* loadPlayerStatsSaga(action) {
  const { searchTerm } = action;

  // TODO: Implement API call

  try {
    const playerStats = {
      name: 'Matimmio',
      discord: 'Matimmio#2077',
      raidHistory: [
        {
          day: 15,
          month: 'Feb',
          damageDealt: 10000000,
        },
        {
          day: 16,
          month: 'Feb',
          damageDealt: 10000000,
        },
        {
          day: 17,
          month: 'Feb',
          damageDealt: 10000000,
        },
        {
          day: 18,
          month: 'Feb',
          damageDealt: 10000000,
        },
        {
          day: 19,
          month: 'Feb',
          damageDealt: 10000000,
        },
        {
          day: 20,
          month: 'Feb',
          damageDealt: 10000000,
        },
        {
          day: 21,
          month: 'Feb',
          damageDealt: 1000000,
        },
        {
          day: 22,
          month: 'Feb',
          damageDealt: 100000,
        },
        {
          day: 23,
          month: 'Feb',
          damageDealt: 100000,
        },
        {
          day: 24,
          month: 'Feb',
          damageDealt: 10000000,
        },
        {
          day: 25,
          month: 'Feb',
          damageDealt: 100000,
        },
        {
          day: 26,
          month: 'Feb',
          damageDealt: 100000,
        },
        {
          day: 27,
          month: 'Feb',
          'Damage dealt': 100000,
        },
        {
          day: 28,
          month: 'Feb',
          damageDealt: 100000,
        },
      ],
      dailyStats: [
        {
          raidDay: 1,
          'Returned Harvester': 1278000,
          'Snowman General Gast': 1118000,
          'Cyborg Erina': 178000,
          'Shadow Beast': 1678000,
        },
        {
          raidDay: 2,
          'Returned Harvester': 1238000,
          'Snowman General Gast': 900000,
          'Cyborg Erina': 1200000,
          'Shadow Beast': 1940000,
        },
        {
          raidDay: 3,
          'Returned Harvester': 1458000,
          'Snowman General Gast': 1978000,
          'Cyborg Erina': 1018000,
          'Shadow Beast': 1168000,
        },
        {
          raidDay: 4,
          'Returned Harvester': 1278000,
          'Snowman General Gast': 1118000,
          'Cyborg Erina': 178000,
          'Shadow Beast': 1678000,
        },
        {
          raidDay: 5,
          'Returned Harvester': 1238000,
          'Snowman General Gast': 900000,
          'Cyborg Erina': 1200000,
          'Shadow Beast': 1940000,
        },
        {
          raidDay: 6,
          'Returned Harvester': 1458000,
          'Snowman General Gast': 1978000,
          'Cyborg Erina': 1018000,
          'Shadow Beast': 1168000,
        },
        {
          raidDay: 7,
          'Returned Harvester': 1278000,
          'Snowman General Gast': 1118000,
          'Cyborg Erina': 178000,
          'Shadow Beast': 1678000,
        },
        {
          raidDay: 8,
          'Returned Harvester': 188000,
          'Snowman General Gast': 1900000,
          'Cyborg Erina': 2100000,
          'Shadow Beast': 240000,
        },
        {
          raidDay: 9,
          'Returned Harvester': 1958000,
          'Snowman General Gast': 1978000,
          'Cyborg Erina': 198000,
          'Shadow Beast': 1168000,
        },
        {
          raidDay: 10,
          'Returned Harvester': 1118000,
          'Snowman General Gast': 1118000,
          'Cyborg Erina': 178000,
          'Shadow Beast': 1648000,
        },
        {
          raidDay: 11,
          'Returned Harvester': 1218000,
          'Snowman General Gast': 900000,
          'Cyborg Erina': 1240000,
          'Shadow Beast': 1940000,
        },
        {
          raidDay: 12,
          'Returned Harvester': 1458000,
          'Snowman General Gast': 1978000,
          'Cyborg Erina': 1048000,
          'Shadow Beast': 1168000,
        },
        {
          raidDay: 13,
          'Returned Harvester': 2278000,
          'Snowman General Gast': 1118000,
          'Cyborg Erina': 178000,
          'Shadow Beast': 178000,
        },
        {
          raidDay: 14,
          'Returned Harvester': 2238000,
          'Snowman General Gast': 1900000,
          'Cyborg Erina': 10000,
          'Shadow Beast': 190000,
        },
        {
          raidDay: 15,
          'Returned Harvester': 1458000,
          'Snowman General Gast': 1978000,
          'Cyborg Erina': 1018000,
          'Shadow Beast': 1168000,
        },
      ],
    };

    yield put(loadPlayerStatsSuccess(playerStats));
  } 
  catch (error) {
    yield put(loadPlayerStatsFailed(error))
  }
}