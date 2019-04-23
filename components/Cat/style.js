import styled, { css } from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100%;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  background-color: #2ae81f;
`;

export const Head = styled.div`
  position: fixed;
  width: 90vh;
  margin: auto;
  left: 0;
  right: 0;
  height: 90vh;
  border-radius: 100%;
  background-color: pink;
  top: 5vh;
`;

export const Eye = styled.div`
  position: absolute;
  width: 20%;
  margin: auto;
  height: 20%;
  border-radius: 100%;
  background-color: blue;
  top: 15%;
  ${props =>
    props.left &&
    css`
      left: 20%;
    `};
  ${props =>
    props.right &&
    css`
      right: 20%;
    `};
`;
