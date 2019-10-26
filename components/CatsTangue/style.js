import styled, { css, keyframes } from 'styled-components';


export const Tounge = styled.div`
  width: 94%;
  position: absolute;
  top: 39%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 25px;
  overflow: hidden;
  opacity: ${(props) => props.showTangue ? '1' : '0'};
  height: ${(props) => props.showTangue ? '210%' : '0'};
  transition: height 0.2s ease-out,opacity 0s linear ${(props) => props.showTangue ? '0s' : '0.2s'};

  svg {
    fill: red;
    width: 101%;
  }
`;
