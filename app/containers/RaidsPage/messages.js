import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  guides: {
    id: `${scope}.guides`,
    defaultMessage: `Guides`,
  },
  raids: {
    id: `${scope}.raids`,
    defaultMessage: `Raids`,
  },
  guilds: {
    id: `${scope}.guilds`,
    defaultMessage: `Guild`,
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
});