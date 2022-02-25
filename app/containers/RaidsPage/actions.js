/*
 *
 * RaidsPage actions
 *
 */

import { 
  LOAD_PLAYER_STATS,
  LOAD_PLAYER_STATS_SUCCESS,
  LOAD_PLAYER_STATS_FAILED,
} from './constants';


export function loadPlayerStats(searchTerm) {
  return {
    type: LOAD_PLAYER_STATS,
    searchTerm,
  };
}

export function loadPlayerStatsSuccess(playerStats) {
  return {
    type: LOAD_PLAYER_STATS_SUCCESS,
    playerStats,
  };
}

export function loadPlayerStatsFailed(error) {
  return {
    type: LOAD_PLAYER_STATS_FAILED,
    error,
  };
}
