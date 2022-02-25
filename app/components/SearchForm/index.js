/**
 *
 * SearchForm
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const StyledFinalForm = styled(Form)`
  width: 100%;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 2rem;
  &:hover {
    filter: brightness(150%);
  }
`;

const StyledField = styled(Field)`
  width: 70%;
  background-color: #250000;
  color: #FAFAFA;
  height: 100%;
  border: 2px inset #5C342C;
  border-right: 0;
  resize: none;
  outline: none;
`;

const StyledButton = styled.button`
  width: 30%;
  height: 100%;
  background-color: #250000;
  color: #FAFAFA;
  border: 2px inset #5C342C;
  border-left: 0;
  font-weight: 600;
  cursor: pointer;
`;

function SearchForm(props) {

  useEffect(() => {

  }, []);

  const onSubmit = async (values) => {
    const { loadPlayerStats } = props;
    const { searchTerm } = values;
    loadPlayerStats(searchTerm);
  }

  return (
    <StyledFinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledField autoComplete='off' name='searchTerm' component='input' placeholder="Player name" type="text"></StyledField>
          <StyledButton type="submit">Search</StyledButton>
        </StyledForm>
      )} 
    />
  );
}

SearchForm.propTypes = {};

export default SearchForm;
