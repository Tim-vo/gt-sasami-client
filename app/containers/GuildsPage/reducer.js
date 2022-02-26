/*
 *
 * GuildsPage reducer
 *
 */
import produce from 'immer';
import { 
  LOAD_GUILD, 
  LOAD_GUILD_SUCCESS, 
  LOAD_GUILD_FAILED,
} from './constants';


export const initialState = {
  guild: {
    members: [],
  },
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const guildsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_GUILD:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_GUILD_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.guild = action.guild
        break;
      case LOAD_GUILD_FAILED:
        draft.loading = false;
        draft.error = true;
        break;
      default:
        return state;
    }
  });

export default guildsPageReducer;
