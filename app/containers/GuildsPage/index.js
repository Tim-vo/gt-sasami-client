/**
 *
 * GuildsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGuildsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function GuildsPage() {
  useInjectReducer({ key: 'guildsPage', reducer });
  useInjectSaga({ key: 'guildsPage', saga });

  return (
    <div>
      <Helmet>
        <title>GuildsPage</title>
        <meta name="description" content="Description of GuildsPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

GuildsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  guildsPage: makeSelectGuildsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GuildsPage);
