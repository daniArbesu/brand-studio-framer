import { styled } from 'styled-components';
import { theme } from './theme';

export const BannerRow = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  @media (max-width: ${theme.breakpoint.md}) {
    &:first-child {
      margin-top: 48px;
    }
  }

  &.center {
    justify-content: center;
    text-align: center;
    .row-letter {
      left: 0;
    }
  }
  &.right {
    justify-content: flex-end;
  }

  &.marquee {
    position: relative;
    overflow: hidden;
    &.animate .marquee__inner {
      animation-play-state: running;
    }
    .marquee__inner {
      width: fit-content;
      display: flex;
      position: relative;
      transform: translate3d(${theme.animation.bannerInitial}, 0, 0);
      animation: marquee 5s linear infinite;
      animation-play-state: paused;
      @media (min-width: ${theme.breakpoint.lg}) {
        transform: translate3d(calc(-25% + 10vw), 0, 0);
        animation: marquee-lg 5s linear infinite;
        animation-play-state: paused;
      }
    }
    .row-title {
      padding: 0 8vw;
      @media (min-width: ${theme.breakpoint.lg}) {
        padding: 0 10vw;
      }
    }
  }

  @keyframes marquee {
    0% {
      transform: translate3d(${theme.animation.bannerInitial}, 0, 0);
    }

    100% {
      transform: translate3d(${theme.animation.bannerFinal}, 0, 0);
    }
  }

  @keyframes marquee-lg {
    0% {
      transform: translate3d(calc(-25% + 10vw), 0, 0);
    }

    100% {
      transform: translate3d(calc(-50% + 10vw), 0, 0);
    }
  }
`;
