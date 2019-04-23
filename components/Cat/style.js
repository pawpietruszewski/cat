import styled, { css, keyframes } from 'styled-components';

const CAT_COLOR = '#ffa6fb';
const NOSE_HEIGHT = 50;

const bgColor = keyframes`
  0% {
    background-color: ${CAT_COLOR};
  }

  20% {
      background-color: #1af5c7;
  }

  40% {
      background-color: #1821f0;
  }

  60% {
      background-color: #f0ed12;
  }

  80% {
      background-color: ff1212;
  }

  100% {
      background-color: ${CAT_COLOR};
  }
`;

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
  width: 80vh;
  margin: auto;
  left: 0;
  right: 0;
  height: 80vh;
  border-radius: 100%;
  background-color: ${CAT_COLOR};
  top: 15vh;
  max-width: 80%;
  max-height: 80vw;
  animation: ${bgColor} 8s linear infinite;
`;

export const Eye = styled.div`
  position: absolute;
  width: 20%;
  margin: auto;
  height: 20%;
  border-radius: 100%;
  background-color: #000;
  top: 15%;
  z-index: 3;
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

    &::after {
      content: '';
      background-color: #fff;
      left: 50%;
      top: 50%;
      width: 70%;
      height: 70%;
      position: absolute;
      border-radius: 100%;
      transform: translate3d(-50%, -50%, 0);
      z-index: 2;
    }
`;

export const EyeBlink = styled.div`
  width: 0;
  height: 0;
  padding-left: 20%;
  padding-top: 20%;
  overflow: hidden;
  z-index: 3;
  position: absolute;
  transform: translate3d(0, -50%, 0) rotate(110deg);
  right: 9%;
  top: 41%;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      margin-left:-500px;
      margin-top:-500px;
      border-left: 500px solid transparent;
      border-top: 500px solid #000;
    }
`;

export const Pupil = styled.div`
width: 100%;
height: 100%;
overflow: hidden;

  &::after {
    width: 10%;
    height: 70%;
    position: absolute;
    transform: translate3d(-50%, 0, 0);
    left: 50%;
    top: 15%;
    z-index: 3;
    background-color: #000;
    border-radius: 100%;
  }
`;

export const Ear = styled.div`
  position: absolute;
  width: 40%;
  margin: auto;
  height: 40%;
  background-color: ${CAT_COLOR};
  animation: ${bgColor} 8s linear infinite;
  top: -5%;
  ${props =>
    props.left &&
    css`
      left: 10%;
      transform: rotate(15deg);
    `};
  ${props =>
    props.right &&
    css`
      right: 10%;
      transform: rotate(-15deg);
    `};

`;

export const Nose = styled.div`
  position: absolute;
  width: 14%;
  margin: auto;
  height: 7%;
  border-radius: 100%;
  background-color: #000;
  top: ${NOSE_HEIGHT}%;
  left: 50%;
  z-index: 4;
  transform: translate3d(-50%, -50%, 0);
`;

export const Mouth = styled.div`
  position: absolute;
  width: 20%;
  margin: auto;
  height: 20%;
  top: ${NOSE_HEIGHT + 5}%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export const Lip = styled.div`
  position: absolute;
  width: 80%;
  margin: auto;
  height: 60%;
  border-radius: 100%;
  background-color: #000;
  bottom: 0;
  z-index: -1;
  ${props =>
    props.left &&
    css`
      left: 10%;
      transform: translate3d(-50%, -50%, 0) rotate(15deg);
    `};
  ${props =>
    props.right &&
    css`
      left: 90%;
      transform: translate3d(-50%, -50%, 0) rotate(-15deg);
    `};

  &::after {
    content: '';
    background-color: ${CAT_COLOR};
    animation: ${bgColor} 8s linear infinite;
    left: 50%;
    top: 50%;
    width: 90%;
    height: 90%;
    position: absolute;
    border-radius: 100%;
    transform: translate3d(-50%, -50%, 0);
    z-index: -1;
  }

  &::before {
    content: '';
    background-color: ${CAT_COLOR};
    animation: ${bgColor} 8s linear infinite;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    ${props =>
      props.left &&
      css`
        right: 10%;
        bottom: 30%;
      `};
    ${props =>
      props.right &&
      css`
        left: 10%;
        bottom: 30%;
      `};
  }
`;

export const Whisker = styled.div`
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 20%;
    margin: auto;
    left: -10%;
    top: 40%;
    height: 2%;
    border-radius: 25%;
    background-color: ${CAT_COLOR};
    animation: ${bgColor} 8s linear infinite;

    ${props =>
      props.first &&
      css`
        left: -10%;
        transform: rotate(15deg);
        top: 50%;
      `};
    ${props =>
      props.second &&
      css`
        left: -10%;
        top: 55%;
      `}
    ${props =>
      props.third &&
      css`
        left: -10%;
        transform: rotate(-5deg);
        top: 60%;
      `}
  }

  &::after {
    content: '';
    position: absolute;
    width: 20%;
    margin: auto;
    right: -10%;
    top: 40%;
    height: 2%;
    border-radius: 25%;
    background-color: ${CAT_COLOR};
    animation: ${bgColor} 8s linear infinite;
    top: 50%;

    ${props =>
      props.first &&
      css`
        right: -10%;
        transform: rotate(-15deg);

      `};
    ${props =>
      props.second &&
      css`
        right: -10%;
        top: 55%;
      `}
    ${props =>
      props.third &&
      css`
        right: -10%;
        transform: rotate(5deg);
        top: 60%;
      `}
  }
`;
