import { useEffect, type Dispatch, type SetStateAction } from 'react';
import { ImageBlock } from '../ui/ImageBlock';
import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoaderInner = styled.div`
  .loader-inner {
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
  }
`;

const Loader = ({ setLoading }: Props): JSX.Element => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="loader">
      <LoaderInner>
        <ImageBlock id="image-1" />
        <div className="transition-image">
          <img src="/images/image-2.webp" alt="random alt" />
        </div>
        <ImageBlock id="image-3" />
        <ImageBlock id="image-4" />
        <ImageBlock id="image-5" />
      </LoaderInner>
    </div>
  );
};

export default Loader;
