import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
import { motion } from 'framer-motion';

const HeaderSection = styled(motion.header)`
  font-size: 1.8rem;
  height: 156px;
  display: flex;
  justify-content: center;
  padding: 0 108px;
  color: ${theme.color.black};
  @media (max-width: ${theme.breakpoint.md}) {
    padding: 0 72px;
    font-size: 1.6rem;
  }
  @media (max-width: ${theme.breakpoint.xs}) {
    padding: 0 12px;
    height: 96px;
    font-size: 1.2rem;
  }
`;

const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: ${theme.weight.bold};
  font-size: 3.6rem;
  @media (max-width: ${theme.breakpoint.md}) {
    font-size: 3.2rem;
    flex: 4;
  }
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${theme.breakpoint.sm}) {
    display: none;
  }

  li {
    list-style: none;
    margin: 0 20px;
    a {
      text-decoration: none;
      color: ${theme.color.black};
      white-space: nowrap;
    }
  }
`;

const Contact = styled.div`
  @media (max-width: ${theme.breakpoint.md}) {
    flex: 1;
  }
  a {
    color: ${theme.color.black};
    text-decoration: none;
    border-bottom: 2px solid ${theme.color.black};
    padding-bottom: 12px;
    white-space: nowrap;
    @media (max-width: ${theme.breakpoint.xs}) {
      border: none;
    }
  }
`;

const HamburgerMenu = styled.div`
  height: 56px;
  width: 56px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  cursor: pointer;
  &:hover {
    background: darken($color: ${theme.color.white}, $amount: 12);
  }
  @media (min-width: ${theme.breakpoint.sm}) {
    display: none;
  }
  span {
    width: 20px;
    height: 3px;
    margin: 2px 0;
    background: ${theme.color.black};
    display: block;
  }
`;

const Header = (): JSX.Element => {
  return (
    <HeaderSection
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
    >
      <HeaderInner>
        <Logo>Brandy</Logo>
        <NavBar>
          <li>
            <a href="/design">Design</a>
          </li>
          <li>
            <a href="/strategy">Strategy</a>
          </li>
          <li>
            <a href="/cases">Cases</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why">Why work with us?</a>
          </li>
        </NavBar>
        <Contact>
          <a href="/contact">Let&apos;s work together</a>
        </Contact>
        <HamburgerMenu>
          <span></span>
          <span></span>
        </HamburgerMenu>
      </HeaderInner>
    </HeaderSection>
  );
};

export default Header;
