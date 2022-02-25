/*
 *
 * RaidsPage reducer
 *
 */
import produce from 'immer';
import { 
  LOAD_PLAYER_STATS,
  LOAD_PLAYER_STATS_SUCCESS,
  LOAD_PLAYER_STATS_FAILED,
} from './constants';

export const initialState = {
  playerStats: {
    raidHistory: [],
  },
  loading: false,
  error: true,
};

/* eslint-disable default-case, no-param-reassign */
const raidsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_PLAYER_STATS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_PLAYER_STATS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.playerStats = action.playerStats
        break;
      case LOAD_PLAYER_STATS_FAILED:
        draft.loading = false;
        draft.error = true;
        break;
    }
  });

export default raidsPageReducer;
