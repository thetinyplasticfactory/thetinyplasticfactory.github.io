import React from 'react';
import SocialsBlock from '../../components/SocialsBlock/SocialsBlock';

import { Container } from '../../components';

import { StyledP } from './StyledP.styled';
import { StyledH1 } from './StyledH1.styled';

export const ContactSection = () => {
  return (
    <Container className="contact-section" id="contact" flexDirection="column" background="#028843">
      <StyledH1>The Tiny Plastic Factory</StyledH1>

      <h3>Plastic recycling, reinvented.</h3>

      <StyledP>
        For business inquiries, more information or a chat over coffee,
        <br /> flick us a line - we'd love to hear from you!
      </StyledP>
      <p>
        <a href="mailto:thetinyplasticfactory@gmail.com">thetinyplasticfactory@gmail.com</a>
      </p>
      <SocialsBlock />
    </Container>
  );
};
