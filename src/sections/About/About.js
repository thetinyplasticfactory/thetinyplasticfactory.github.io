import React from 'react';
import styled from 'styled-components';
import Darcy from '../../imgs/darcy-with-bike.jpeg';
import './styles.scss';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  color: white;

  h2 {
    font-size: 2.2em;
    line-height: 1.1;
    margin-bottom: 0.5em;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const Section = styled.div`
  padding: 2rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const AboutSection = () => {
  return (
    <div className="about-section" id="about">
      <Container>
        <Section>
          <h2>About</h2>
          <p>
            The Tiny Plastic Factory is a social enterprise startup founded in 2018, based in
            Wellington City, New Zealand. Our purpose is to accelerate the transition of the New
            Zealand plastics industry toward a circular economy.
          </p>
          <p>
            We believe that the use of plastic as a material should be carefully considered and
            responsibly managed. We create and support circular systems that prioritise the
            redesign, reduction and reuse of plastic.
          </p>
          <p>
            If you'd like to support our work, please consider purchasing one of our{' '}
            <a href="https://tpf-store.web.app/">Poneke Pots.</a>
          </p>
        </Section>
        <Section
          style={{
            background: `url(${Darcy})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
          }}
        ></Section>
      </Container>
    </div>
  );
};

export default AboutSection;
