import { styled } from "styled-components";

export const InputForm = styled.input`
  border-radius: 5px;
  border: 1px solid #85929B;
  padding: 10px 16px;
  outline: none;

  ${({ disabled }) => disabled && `
    background: #F6F9FC;
    cursor: not-allowed;
  `}
`