/**
 *
 * GuildTable
 *
 */

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTable } from 'react-table';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const TableContainer = styled.div`
  margin: 10px 10px 10px 5%;
  width: 70%;
  display: flex;
  border: 6px solid #C9814D;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.47); 
  box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.47);
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
  border: 5px solid #4F2820;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47); 
  box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.47);
  background-color: #F2F0EB;
  justify-content: safe center;
  align-items: center;
  text-align: center;
`;

const TBODY = styled.tbody`
`;

const TR = styled.tr`
  border: 1px solid black;
  &:nth-child(2n) {
    background-color: #FAFAFA;
  }
`;

const TH = styled.th`
  text-align: center;
  background-color: #4F2820;
  color: #FAFAFA;
`;

const TD = styled.td`
  border: 1px solid black;
`;

const Columns = [
  { Header: 'Id', accessor: 'id'},
  { Header: 'Username', accessor: 'username'},
  { Header: '#', accessor: 'hashtag'},
  { Header: 'Discord', accessor: 'discord'},
  { Header: 'Attendance %', accessor: 'attendance_percentage'},
  { Header: 'Current total raid damage', accessor: 'total_raid_damage'},
];

function GuildTable(props) {
  const { data } = props;

  const columns = useMemo(() => Columns, []);

  const guildsTable = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = guildsTable;


  return (
    <TableContainer>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <TR {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TH {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TH>
              ))}
            </TR>
          ))}
        </thead>
        <TBODY {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TR {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TD {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TD>
                  )
                })}
              </TR>
            )
          })}
        </TBODY>
      </Table>
    </TableContainer>
  );
}

GuildTable.propTypes = {};

export default GuildTable;
