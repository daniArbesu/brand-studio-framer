import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  disabled?: boolean;
}

const RowTitle = styled(motion.span)`
  font-size: 28rem;
  font-weight: 500;
  position: relative;
  letter-spacing: -0.8rem;
  display: inline-block;
  white-space: nowrap;
  @media (max-width: ${theme.breakpoint.xs}) {
    font-size: 13rem;
  }
`;

// motion variants
const banner = {
  animate: { transition: { delayChildren: 0.4, staggerChildren: 0.1 } }
};

const letterAnimation = {
  initial: { y: 400 },
  animate: { y: 0, transition: { ease: [0.6, 0.01, -0.05, 0.91], duration: 1 } }
};

const RowLetter = styled(RowTitle)``;

const AnimatedLetters = ({ title, disabled = false }: Props): JSX.Element => {
  return (
    <RowTitle variants={disabled ? undefined : banner} initial="initial" animate="animate">
      {[...title].map((letter, index) => (
        <RowLetter variants={letterAnimation} key={index}>
          {letter}
        </RowLetter>
      ))}
    </RowTitle>
  );
};

export default AnimatedLetters;
