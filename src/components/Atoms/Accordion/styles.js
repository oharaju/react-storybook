import { styled } from "styled-components";

export const Container = styled.div`
  font-family: "Gill Sans Extrabold", sans-serif;
  padding: 10px;
  width: 100%;
  min-width: 320px;
  max-width: 320px;
`

export const Summary = styled.summary`
  font-size: 20px;
  list-style: none;
`

export const Details = styled.details`
  width: 100%;
  padding: 0.5rem 0;
  border-top: 1px solid black;
  position: relative;
  font-size: 1.25rem;
  font-weight: 300;
  list-style: none;
  cursor: pointer;
`

export const Resume = styled.p`
  font-size: 0.95rem;
  margin: 0 0 1rem;
  padding-top: 1rem;
  line-height: 1.4;
`