import { styled } from 'styled-components';
import AnimatedLetters from './AnimatedLetters';
import { theme } from '../../styles/theme';
import { BannerRow } from '../../styles/components';

interface Props {
  title: string;
}

const RowCol = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  @media (max-width: ${theme.breakpoint.md}) {
    width: 70%;
  }
  @media (max-width: 1240px) {
    &:last-child {
      display: none;
    }
  }
  @media (max-width: ${theme.breakpoint.xs}) {
    width: 100%;
    justify-content: flex-start;
  }
  .row-message {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.6rem;
    width: 320px;
  }
`;

const BannerRowTop = ({ title }: Props): JSX.Element => {
  return (
    <BannerRow>
      <RowCol>
        <AnimatedLetters title={title} />
      </RowCol>
      <RowCol>
        <span className="row-message">
          We are specialised in setting up the foundation of your brand and setting you up for
          success.
        </span>
      </RowCol>
    </BannerRow>
  );
};

export default BannerRowTop;
