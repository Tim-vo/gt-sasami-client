import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
import raids_background from '../../images/raids_background.svg';

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
  display: flex;
  flex-direction: row;
  border: 6px solid #4F2820;
  background-color: #FAFAFA;
`;

const BossesMenu = styled.div`
  width: 25%;
  min-height: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: #281B0D;
  border: 3px solid #EFE0BB;
`;

const PlayersTable = styled.div`
  width: 75%;
  min-height: 1.5rem;
  display: flex;
  flex-direction: column;
  background-color: #EFE0BB;
`;



export default function RaidsPage() {
  return (
    <Page>
      <Container>
        <Component>
          <BossesMenu>
          </BossesMenu>
          <PlayersTable>
              
          </PlayersTable>
        </Component>
      </Container>
    </Page>
  );
}
