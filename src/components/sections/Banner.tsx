import { useEffect, useState } from 'react';
import BannerRowTop from '../ui/BannerRowTop';
import BannerRowCenter from '../ui/BannerRowCenter';
import BannerRowBottom from '../ui/BannerRowBottom';

const Banner = (): JSX.Element => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setPlayMarquee(true);
  }, []);

  return (
    <div className="banner">
      <BannerRowTop title={'brand'} />
      <BannerRowCenter title={'experience'} playMarquee={playMarquee} />
      <BannerRowBottom title={'studio'} />
    </div>
  );
};

export default Banner;
