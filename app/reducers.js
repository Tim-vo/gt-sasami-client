/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import {reducer as burgerMenuReducer} from 'redux-burger-menu';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    burgerMenu: burgerMenuReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
