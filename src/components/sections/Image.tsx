interface Props {
  src: string;
  type?: string;
}

const Image = ({ src, type = 'image/webp' }: Props): JSX.Element => {
  return (
    <picture>
      <source srcSet={src} type={type} />
    </picture>
  );
};

export default Image;
