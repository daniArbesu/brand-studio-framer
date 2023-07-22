import { BannerRow } from '../../styles/components';
import AnimatedLetters from './AnimatedLetters';

interface Props {
  title: string;
  playMarquee: boolean;
}

const BannerRowCenter = ({ title, playMarquee }: Props): JSX.Element => {
  return (
    <BannerRow className={`marquee  ${playMarquee ? 'animate' : ''}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </BannerRow>
  );
};

export default BannerRowCenter;
