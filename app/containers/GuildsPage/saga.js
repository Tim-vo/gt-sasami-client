import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import MOCK_DATA from './mock/MOCK_DATA.json';
import MOCK_DATA2 from './mock/MOCK_DATA2.json';
import { loadGuildSuccess, loadGuildFailed } from './actions';
import { LOAD_GUILD } from './constants';

// Individual exports for testing
export default function* guildsPageSaga() {
  yield takeLatest(LOAD_GUILD, loadGuildSaga)
}

export function* loadGuildSaga(action) {
  const { guildName } = action;

  try {
    switch (guildName) {
      case 'Sasami':
        yield put(loadGuildSuccess({members: MOCK_DATA}));
        break;
      case 'Sasamini':
        yield put(loadGuildSuccess({members: MOCK_DATA2}));
      default:
        break;
    }
  } 
  catch (error) {
    yield put(loadGuildFailed(error));
  }
}