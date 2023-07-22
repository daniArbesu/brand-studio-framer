import { type Dispatch, type SetStateAction } from 'react';
import { ImageBlock } from '../ui/ImageBlock';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
import { TransitionImage } from '../../styles/components';
import { motion } from 'framer-motion';

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoaderInner = styled(motion.div)`
  .image-block {
    position: absolute;
    transform-origin: center;
    display: flex;
    align-items: center;
    justify-content: center;
    &.image-1 {
      width: 400px;
      left: 16%;
      bottom: 14%;
      @media (max-width: ${theme.breakpoint.xs}) {
        left: 4%;
        bottom: 28%;
      }
    }
    &.image-3 {
      width: 300px;
      right: 12%;
      top: 8%;
      @media (max-width: ${theme.breakpoint.xs}) {
        top: 16%;
        right: 4%;
      }
    }
    &.image-4 {
      max-width: 400px;
      width: 40%;
      right: 20%;
      bottom: 10%;
      @media (max-width: ${theme.breakpoint.xs}) {
        right: 6%;
        bottom: 32%;
      }
    }
    &.image-5 {
      width: 280px;
      left: 14%;
      top: 12%;
      @media (max-width: ${theme.breakpoint.xs}) {
        left: 6%;
        top: 18%;
      }
    }
    img {
      width: 100%;
      object-fit: fill;
    }
  }
`;

// Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.35
    }
  }
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0, transition: { ease: [0.6, 0.01, -0.05, 0.91], duration: 1.6 } }
};

const Loader = ({ setLoading }: Props): JSX.Element => {
  return (
    <div className="loader">
      <LoaderInner
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => {
          setLoading(false);
        }}
      >
        <ImageBlock id="image-1" />
        <TransitionImage variants={itemMain}>
          <motion.img src="/images/image-2.webp" alt="random alt" layoutId="main-image-1" />
        </TransitionImage>
        <ImageBlock id="image-3" />
        <ImageBlock id="image-4" />
        <ImageBlock id="image-5" />
      </LoaderInner>
    </div>
  );
};

export default Loader;
