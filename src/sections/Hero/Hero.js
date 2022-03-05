import React from 'react';
import Hero from '../../imgs/hero.jpeg';
import { HeaderContainer } from './HeaderContainer.styled';
import { Container } from '../../components/Container';

export const HeroSection = () => {
  return (
    <Container background={`url(${Hero})}`} desktopFlexEnd id="landing">
      <HeaderContainer>
        <h1>The Tiny Plastic Factory</h1>
      </HeaderContainer>
    </Container>
  );
};
