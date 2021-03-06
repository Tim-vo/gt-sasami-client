/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
import GuidesBooks from '../../images/guides_books.svg';
import Raids from '../../images/raids.svg';
import Guilds from '../../images/guild.svg';
import { Link } from 'react-router-dom';

const Page = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2.5% 0 0 0;
  min-width: 100vw;
  height: calc(100%);
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

const Section = styled(Link)`
  text-decoration: none;
  background: rgb(224,248,233);
  background: linear-gradient(180deg, rgba(224,248,233,1) 0%, rgba(243,236,208,1) 50%, rgba(255,193,146,1) 100%);
  display: flex;
  flex-direction: column-reverse;
  width: 28vw;
  height: 40vh;
  margin: 0 2.5% 2.5% 2.5%;
  box-shadow: 0 0 0.5px 0 rgb(0 0 0 / 14%), 0 1px 1px 0 rgb(0 0 0 / 24%);
  border-radius: 12px;
  overflow: hidden;
  position: center;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 2.5% 0 2.5% 0;
    width: 85vw;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: safe center;
  min-width: 100%;
  min-height: 15%;
  color: #F2F0EB;
  background-color: #222222;
  font-size: 2em;
  font-weight: 600;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: safe center;
  margin: 0 20% 0 20%;
  min-width: 100%;
  min-height: 85%;
`;

const GuildContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: safe center;
  margin: 0 20% 0 11%;
  min-width: 100%;
  min-height: 85%;
`;

export default function HomePage() {
  return (
    <Page>
      <Section id="GuidesPage" to="/guides">
        <SectionHeader>
          <p>
            <FormattedMessage {...messages.guides} />
          </p>
        </SectionHeader>
        <SectionContent>
          <img style={{ width: '60%', height: '60%' }} src={GuidesBooks} alt="Guides" />
        </SectionContent>
      </Section>
      <Section id="GuildsPage" to="/guilds">
        <SectionHeader>
          <p>
            <FormattedMessage {...messages.guilds} />
          </p>
        </SectionHeader>
        <GuildContent>
          <img style={{ width: '80%', height: '80%'}} src={Guilds} alt="Guides" />
        </GuildContent>
      </Section>
      <Section id="RaidsPage" to="/raids">
        <SectionHeader>
          <p>
            <FormattedMessage {...messages.raids} />
          </p>
        </SectionHeader>
        <SectionContent>
          <img style={{ width: '60%', height: '60%' }} src={Raids} alt="Guides" />
        </SectionContent>
      </Section>
    </Page>
  );
}
