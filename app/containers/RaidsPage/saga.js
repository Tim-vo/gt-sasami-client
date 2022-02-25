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
          boss: 'Boss name',
        },
        {
          day: 16,
          month: 'Feb',
          damageDealt: 10000000,
          boss: 'Boss name',
        },
        {
          day: 17,
          month: 'Feb',
          damageDealt: 10000000,
          boss: 'Boss name',
        },
        {
          day: 18,
          month: 'Feb',
          damageDealt: 10000000,
          boss: 'Boss name',
        },
        {
          day: 19,
          month: 'Feb',
          damageDealt: 10000000,
          boss: 'Boss name',
        },
        {
          day: 20,
          month: 'Feb',
          damageDealt: 10000000,
          boss: 'Boss name',
        },
        {
          day: 21,
          month: 'Feb',
          damageDealt: 1000000,
          boss: 'Boss name',
        },
        {
          day: 22,
          month: 'Feb',
          damageDealt: 100000,
          boss: 'Boss name',
        },
        {
          day: 23,
          month: 'Feb',
          damageDealt: 1000000,
          boss: 'Boss name',
        },
        {
          day: 24,
          month: 'Feb',
          damageDealt: 10000000,
          boss: 'Boss name',
        },
        {
          day: 25,
          month: 'Feb',
          damageDealt: 100000,
          boss: 'Boss name',
        },
        {
          day: 26,
          month: 'Feb',
          damageDealt: 100000,
          boss: 'Boss name',
        },
        {
          day: 27,
          month: 'Feb',
          damageDealt: 100000,
          boss: 'Boss name',
        },
        {
          day: 28,
          month: 'Feb',
          damageDealt: 100000,
          boss: 'Boss name',
        },
      ],
    };

    yield put(loadPlayerStatsSuccess(playerStats));
  } 
  catch (error) {
    yield put(loadPlayerStatsFailed(error))
  }
}