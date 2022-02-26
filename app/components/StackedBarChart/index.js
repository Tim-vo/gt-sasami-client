/**
 *
 * StackedBarChart
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { v4 as uuidv4 } from 'uuid';
import { 
  CartesianGrid,
  BarChart as BarGraph,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Container = styled(ResponsiveContainer)`
  width: 20%;
  height: 200px;
  background-color: #FAFAFA;
`;

const COLORS = [
  '#00A97F',
  '#3484D1',
  '#FFA17A',
  '#847DD4',
];

function StackedBarChart(props) {
  const { data } = props;
  const dataKeys = Object.keys(data[0]);

  return (
    <Container>
      <BarGraph
        data={data}
        width="100%"
        height="100%"
        margin={{top: 10, right: 20, bottom: 10, left: 25}}
      >
        <Tooltip/>
        <Legend width="100%"/>
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
        {dataKeys.map((item, index) => {
          if (index != 0) {
            return <Bar 
            key={uuidv4()} 
            dataKey={item} 
            fill={COLORS[index-1]}
            stackId="stack"  
          />
          }
        })}
      </BarGraph>
    </Container>
  );
}

StackedBarChart.propTypes = {};

export default StackedBarChart;
