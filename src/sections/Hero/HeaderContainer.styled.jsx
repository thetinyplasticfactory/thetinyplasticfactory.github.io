import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #028843;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  padding: 0 30px;
  margin: 20px;

  // tablet + desktop positioning
  @media (min-width: 768px) {
    margin-top: -150px;
    margin-right: 150px;
  }
`;
