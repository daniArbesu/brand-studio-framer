import { useEffect, useState } from 'react';
import BannerRowTop from '../ui/BannerRowTop';
import BannerRowCenter from '../ui/BannerRowCenter';
import BannerRowBottom from '../ui/BannerRowBottom';
import { motion } from 'framer-motion';

// motion variants
const banner = {
  animate: { transition: { delayChildren: 0.4, staggerChildren: 0.1 } }
};

const Banner = (): JSX.Element => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={'brand'} />
      <BannerRowCenter title={'experience'} playMarquee={playMarquee} />
      <BannerRowBottom title={'studio'} />
    </motion.div>
  );
};

export default Banner;
