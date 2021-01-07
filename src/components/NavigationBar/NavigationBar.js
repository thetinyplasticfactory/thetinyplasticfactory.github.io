import React from "react";
import logo from "../../imgs/tpf.png";
import SocialsBlock from "../SocialsBlock/SocialsBlock";
import styled from "styled-components";

const Logo = styled.img`
  width: 8rem;
`;

const LogoContainer = styled.div`
  width: 45%;
`;

const Header = styled.header`
  display: flex;
  margin: 0;
  max-width: 1400px;
  box-sizing: border-box;
  width: 100%;
  padding: 0 6rem;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  flex: 1;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;

  padding: 0;
`;

const CallToActionLink = styled.a`
  background: orange;
  padding: 0.75rem 2rem;
  margin: -1rem 1rem -2rem;
  border-radius: 1rem;
`;

const NavigationBar = () => {
  return (
    <Header>
      <LogoContainer>
        <a href="#top" tabIndex={0}>
          <Logo src={logo} alt="Tiny Plastic Factory Logo" />
        </a>
      </LogoContainer>

      <Nav>
        <NavList className="hide-on-mobile">
          <li>
            <a href="#about" tabIndex={0}>
              About
            </a>
          </li>
          <li>
            <a href="#collections" tabIndex={0}>
              Collection
            </a>
          </li>
          <li>
            <a href="#sales" tabIndex={0}>
              Sales
            </a>
          </li>
          <li>
            <a href="#contact" tabIndex={0}>
              Contact
            </a>
          </li>
          <li>
            <a href="#partners" tabIndex={0}>
              Partners
            </a>
          </li>
          <li>
            <CallToActionLink href="#cta" tabIndex={0}>
              Do stuff
            </CallToActionLink>
          </li>
        </NavList>
      </Nav>
    </Header>
  );
};

export default NavigationBar;
