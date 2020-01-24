import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  text-align: center;
`;

export const ErrorIndicator = () => {
  return (
    <Error>
      Ops... Something went wrong
    </Error>
  )
};
