import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the raidsPage state domain
 */

const selectRaidsPageDomain = state => state.raidsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RaidsPage
 */

const makeSelectRaidsPage = () =>
  createSelector(
    selectRaidsPageDomain,
    substate => substate,
  );

const makePlayerStatsSelector = () =>
  createSelector(
    selectRaidsPageDomain,
    substate => substate.playerStats,
  );

export default makeSelectRaidsPage;
export { selectRaidsPageDomain, makePlayerStatsSelector };
