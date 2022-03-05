import React from 'react';
import styled from 'styled-components';
import Hero from '../../imgs/hero.jpeg';

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    max-width: auto;
    height: 100vh;
  }
`;

const Header = styled.div`
  background-color: #028843;
  border-radius: 20px;
  color: white;
  padding: 0 30px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  font-size: 1.6em;
  line-height: 1.1;
  margin: 20px;
  margin-top: -150px;
  margin-right: 150px;

  @media (max-width: 1024px) {
    margin: 0 15px;
    font-size: 1em;
    margin-right: 50px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    max-width: 250px;
  }
`;

const HeroSection = () => {
  return (
    <div className="landing-section" id="landing">
      <Wrapper
        style={{
          background: `url(${Hero})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <Header>
          <h1>The Tiny Plastic Factory</h1>
        </Header>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
