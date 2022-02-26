/**
 *
 * GuildsPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGuildsPage, { makeGuildSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import guild_tavern from '../../images/guild_tavern.svg';
import styled from 'styled-components';
import GuildTable from '../../components/GuildTable';
import { Form, Field } from 'react-final-form';
import { 
  loadGuild, 
  loadGuildSuccess 
} from './actions';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2.5% 0 0 0;
  min-width: 100vw;
  height: calc(100%);
  background-image: url(${guild_tavern});
  background-size: cover;
  align-items: center;
  justify-content: safe center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5% 0 0 0;
    flex-wrap: nowrap;
    height: calc(100%);
    overflow-y: hidden;
    align-items: center;
    justify-content: safe center;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 0 2.5% 0;
  flex-direction: column;
  border: 10px solid #C9814D;
  min-width: 75%;
  height: 95%;
  background-color: #FAFAFA;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47); 
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47);
  @media (max-width: 768px) {
    min-width: 95%;
`;

const Component = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  border: 6px solid #4F2820;
  background-color: #EFE0BB;
`;

const GuildMenuContainer = styled.div`
  margin: 10px;
  width: 25%;
  display: flex;
  border: 6px solid #C9814D;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.47); 
  box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.47);
`;

const GuildMenu = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid #4F2820;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47); 
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47);
  background-color: #4F2820;
  align-items: flex-start;
  text-align: center;
`;

const GuildSelectMenu = styled.form`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
`;

const GuildSelectField = styled(Field)`
  margin: 2px 0 0 0;
  width: 60%;
  height: 90%;
`;

const GuildSelectButton = styled.button`
  width: 40%;
  height: 100%;
  background-color: #C9814D;
  border: 2px inset #5C342C;
  font-weight: 600;
  cursor: pointer;
  color: #FAFAFA;
  &:hover {
    filter: brightness(110%);
  }
`;

export function GuildsPage({loadGuild, guild}) {
  useInjectReducer({ key: 'guildsPage', reducer });
  useInjectSaga({ key: 'guildsPage', saga });

  useEffect(() => {

  }, []);

  let { members: data } = guild;

  const onSubmit = async (values) => {
    const { guild } = values;
    console.log(guild);
    loadGuild(guild);
  }

  return (
    <Page>
      <Container>
        <Component>
          <GuildMenuContainer>
            <GuildMenu>
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                  <GuildSelectMenu onSubmit={handleSubmit}>
                    <GuildSelectField name="guild" component="select">
                      <option/>
                      <option value="Sasami">Sasami</option>
                      <option value="Sasamini">Sasamini</option>
                    </GuildSelectField>
                    <GuildSelectButton type="submit" disabled={submitting || pristine}>
                      Submit
                    </GuildSelectButton>
                  </GuildSelectMenu>
                )}
              />
            </GuildMenu>
          </GuildMenuContainer>
          {data.length ? 
            <GuildTable data={data}/>
            :
            <div></div>
          }
        </Component>
      </Container>
    </Page>
  );
}

GuildsPage.propTypes = {
  guild: PropTypes.object,
  loadGuild: PropTypes.func,
  loadGuildSuccess: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  guildsPage: makeSelectGuildsPage(),
  guild: makeGuildSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadGuild: (guildName) => dispatch(loadGuild(guildName)),
    loadGuildSuccess: (guild) => dispatch(loadGuildSuccess(guild)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GuildsPage);
