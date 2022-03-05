import React from 'react';

import { Container, GridContainer, GridSection } from '../../components/Container';
import Darcy from '../../imgs/darcy-with-bike.jpeg';

export const AboutSection = () => {
  return (
    <Container className="about-section" id="about">
      <GridContainer>
        <GridSection>
          <h1>About</h1>
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
        </GridSection>
        <GridSection background={`url(${Darcy})`}></GridSection>
      </GridContainer>
    </Container>
  );
};
