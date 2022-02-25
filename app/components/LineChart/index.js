/**
 *
 * LineChart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { 
  CartesianGrid,
  LineChart as LineGraph,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Container = styled(ResponsiveContainer)`
  width: 20%;
  height: 200px;
  background-color: #FAFAFA;
`;

function LineChart(props) {
  const { data } = props;
  const dataKeys = Object.keys(data[0]);

  return (
    <Container>
      <LineGraph
        data={data}
        width="100%"
        height="100%"
        margin={{top: 10, right: 20, bottom: 10, left: 25}}
      >
        <Tooltip/>

        <CartesianGrid stroke="#C3C3C3" strokeDasharray="0 0"/>

        <XAxis 
          angle={340} 
          tickMargin={10} 
          stroke="#222222" 
          dataKey={dataKeys[0]} 
          formatter
        />

        <YAxis 
          stroke="#222222" 
        />

        <Line
          type="monotone"
          stackId="1"  
          strokeWidth="5"
          dataKey={dataKeys[2]}
          stroke="#384727"
          fill="#384727"
        />

      </LineGraph>
    </Container>
  );
}

LineChart.propTypes = {};

export default LineChart;
