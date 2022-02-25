/**
 *
 * RaidsPage
 *
 */

import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRaidsPage from './selectors';
import { makePlayerStatsSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import styled from 'styled-components';
import raids_background from '../../images/raids_background.svg';
import SearchForm from '../../components/SearchForm';
import LineChart from '../../components/LineChart';
import {
  loadPlayerStats,
  loadPlayerStatsSuccess,
  LoadPlayerStatsFailed
} from './actions';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2.5% 0 0 0;
  min-width: 100vw;
  height: calc(100%);
  background-image: url(${raids_background});
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
  min-width: 85%;
  min-height: 90%;
  background-color: #FAFAFA;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47); 
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47);
`;

const Component = styled.div`
  width: 100%;
  min-height: 50rem;
  max-height: 50rem;
  display: flex;
  flex-direction: row;
  border: 6px solid #4F2820;
  background-color: #FAFAFA;
`;

const PlayersMenu = styled.div`
  width: 25%;
  min-height: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: #300C00;
  border: 3px solid #EFE0BB;
`;

const PlayersOverview = styled.div`
  width: 75%;
  min-height: 1.5rem;
  display: flex;
  flex-direction: row;
  background-color: #EFE0BB;
  border: 3px solid #EFE0BB;
`;

const PlayersAttendance = styled.div`
  width: 67%;
  margin: 0 1% 0 1%;
  min-height: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  margin: 2px 0 0 0;
  width: 100%;
  height: 50%;
  display: flex;
  border: 5px solid #300C00;
  border-radius: 15px;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47); 
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47);
`;

const PlayersDailyStats = styled.div`
  overflow-y: auto;
  width: 32%;
  min-height: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: #EFE0BB;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #EFE0BB;
  }
  &::-webkit-scrollbar-thumb {
    background: #300C00;
    border-radius: 20px;
  }
`;

const Item = styled.div`
  width: 98%;
  margin: 0 0 5px 0;
  height: 10%;
  display: flex;
  flex-direction: row;
  background-color: #300C00;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47); 
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47);
`;

const ItemDate = styled.div`
  width: 20%;
  height: 86%;
  color: #222222;
  display: flex;
  flex-direction: column;
  margin: 5px;
  background-color: #FAFAFA;
  justify-content: center;
  align-items: center;
`;

const ItemDamage = styled.div`
  width: 80%;
  height: 86%;
  color: #FAFAFA;
  display: flex;
  flex-direction: row;
  margin: 5px;
  justify-content: flex-start;
  align-items: center;
`;

const H1 = styled.h1`
  margin: 0;
`;

const H3 = styled.h3`
  margin: 0;
`;

const NumberH3 = styled.h3`
  margin: 0 0 0 5px;
  font-weight: 500;
`;


const Number = styled(NumberFormat)`
  color: #FAFAFA;
  margin: 0;
  padding: 0;
`;


export function RaidsPage({loadPlayerStats, playerStats}) {
  useInjectReducer({ key: 'raidsPage', reducer });
  useInjectSaga({ key: 'raidsPage', saga });

  useEffect(() => {

  }, []);

  const playerItems = playerStats.raidHistory;

  return (
    <div>
      <Page>
        <Container>
          <Component>
            <PlayersMenu>
              <SearchForm loadPlayerStats={loadPlayerStats} />
            </PlayersMenu>
            <PlayersOverview>
              <PlayersAttendance>
                {playerItems && playerItems.length ?
                <ChartContainer>
                  <LineChart
                    data={playerItems}
                  /> 
                </ChartContainer>
                : 
                <div/>
                }
              </PlayersAttendance>
              <PlayersDailyStats>
                {playerItems.map((item) => {
                  return (
                    <Item key={uuidv4()}>
                      <ItemDate>
                        <H1>{item.day}</H1>
                        <H3>{item.month}</H3>
                      </ItemDate>
                      <ItemDamage>
                        <H3>Damage dealt: </H3>
                        <NumberH3>
                          <Number
                            type="text"
                            displayType="text"
                            decimalSeparator=","
                            thousandSeparator={'.'}
                            value={item.damageDealt}
                          />
                        </NumberH3>
                      </ItemDamage>
                    </Item>
                  );
                })}
              </PlayersDailyStats>
            </PlayersOverview>
          </Component>
        </Container>
      </Page>
    </div>
  );
}

RaidsPage.propTypes = {
  playerStats: PropTypes.object,
  loadPlayerStats: PropTypes.func,
  loadPlayerStatsSuccess: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  raidsPage: makeSelectRaidsPage(),
  playerStats: makePlayerStatsSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPlayerStats: (searchTerm) => dispatch(loadPlayerStats(searchTerm)),
    loadPlayerStatsSuccess: (playerStats) => dispatch(loadPlayerStatsSuccess(playerStats)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RaidsPage);
