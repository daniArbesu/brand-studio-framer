import { styled } from 'styled-components';

interface Props {
  title: string;
}

const RowTitle = styled.span`
  font-size: 28rem;
  font-weight: 500;
  position: relative;
  letter-spacing: -0.8rem;
  display: inline-block;
  white-space: nowrap;
  @media (max-width: $layout-breakpoint-xsmall) {
    font-size: 13rem;
  }
`;

const RowLetter = styled(RowTitle)``;

const AnimatedLetters = ({ title }: Props): JSX.Element => {
  return (
    <RowTitle>
      {[...title].map(({ letter, index }) => (
        <RowLetter key={index}>{letter}</RowLetter>
      ))}
    </RowTitle>
  );
};

export default AnimatedLetters;
