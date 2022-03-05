import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  width: 100vw;
  background: #02793b;

  ${props =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}

  ${props =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}

  // tablet + desktop positioning
  ${props =>
    props.desktopFlexEnd &&
    css`
      @media (min-width: 768px) {
        justify-content: flex-end;
      }
    `}

  // has background color/ image
  ${props =>
    props.background &&
    css`
      background: ${props.background};
    `}

  background-position: top center;
  background-size: cover;
`;
