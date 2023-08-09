import { styled } from "styled-components";


export const BadgeColors = styled.span`
  background-color: #198754;
  color: #FFFFFF;
  font-family: "Gill Sans", sans-serif;
  display: inline-block;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  border-radius: 16px;
  
  ${({ state }) => state === 'negative' && `
    background-color: #DC3545;
  `}

  ${({ state }) => state === 'neutral' && `
      background-color: #e2e2e2;
      color: #3B3F42;
    `}
`