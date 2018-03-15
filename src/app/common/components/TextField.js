import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import styled from 'styled-components';
import { toRem } from 'utils/styles/general';

const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  color: inherit;
  font-family: inherit;
  padding: ${toRem(12)} ${toRem(12)} ${toRem(10)} ${toRem(12)};
  border: none;
  outline: 0;
  display: inline-block;
  margin: 0 0 ${toRem(12)} 0;
  ${({ type }) =>
    type === 'submit' &&
    `margin-top: ${toRem(
      12
    )} ;cursor: pointer; color: white; background: #1fb5bf; border: 1px solid #1ba0a9;`};
`;

export const TextField = onlyUpdateForKeys(['value'])(
  ({ value, name, type, onChange, placeholder }) => {
    return (
      <FormInput
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
);
