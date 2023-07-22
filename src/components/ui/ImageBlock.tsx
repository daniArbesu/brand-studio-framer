import { motion } from 'framer-motion';

interface Props {
  id: string;
}

const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.91], duration: 1.6 }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8
    }
  }
};

export const ImageBlock = ({ id }: Props): JSX.Element => {
  return (
    <motion.div className={`image-block ${id}`} variants={item}>
      <img src={`/images/${id}.webp`} alt="random" />
    </motion.div>
  );
};
