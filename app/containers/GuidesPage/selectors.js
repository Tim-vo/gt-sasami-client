import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the guidesPage state domain
 */

const selectGuidesPageDomain = state => state.guidesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GuidesPage
 */

const makeSelectGuidesPage = () =>
  createSelector(
    selectGuidesPageDomain,
    substate => substate,
  );

export default makeSelectGuidesPage;
export { selectGuidesPageDomain };
