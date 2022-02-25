import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the guildsPage state domain
 */

const selectGuildsPageDomain = state => state.guildsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GuildsPage
 */

const makeSelectGuildsPage = () =>
  createSelector(
    selectGuildsPageDomain,
    substate => substate,
  );

export default makeSelectGuildsPage;
export { selectGuildsPageDomain };
