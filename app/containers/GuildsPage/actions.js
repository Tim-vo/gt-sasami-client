/*
 *
 * GuildsPage actions
 *
 */

import { 
  LOAD_GUILD, 
  LOAD_GUILD_SUCCESS, 
  LOAD_GUILD_FAILED,
} from './constants';

export function loadGuild(guildName) {
  return {
    type: LOAD_GUILD,
    guildName,
  };
}

export function loadGuildSuccess(guild) {
  return {
    type: LOAD_GUILD_SUCCESS,
    guild,
  };
}

export function loadGuildFailed(error) {
  return {
    type: LOAD_GUILD_FAILED,
    error,
  };
}
