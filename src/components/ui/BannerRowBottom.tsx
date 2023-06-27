import { styled } from 'styled-components';
import { BannerRow } from '../../styles/components';
import AnimatedLetters from './AnimatedLetters';
import { theme } from '../../styles/theme';

interface Props {
  title: string;
}

const ScrollSign = styled.div`
  height: 160px;
  width: 160px;
  border-radius: 100%;
  background: ${theme.color.white};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  left: 160px;
  @media (max-width: ${theme.breakpoint.md}) {
    left: 60px;
  }
  @media (max-width: 1240px) {
    display: none;
  }
  span {
    font-size: 18px;
    font-weight: 600;
    margin: 4px 0;
    @media (max-width: ${theme.breakpoint.xs}) {
      font-size: 10px;
      margin: 2px 0;
    }
  }
`;

const BannerRowBottom = ({ title }: Props): JSX.Element => {
  return (
    <BannerRow className="center">
      <ScrollSign>
        <span>scroll</span>
        <span>down</span>
      </ScrollSign>
      <AnimatedLetters title={title} />
    </BannerRow>
  );
};

export default BannerRowBottom;
