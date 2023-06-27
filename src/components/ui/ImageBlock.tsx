import Image from '../sections/Image';

interface Props {
  id: string;
}

export const ImageBlock = ({ id }: Props): JSX.Element => {
  return (
    <div className={`image-block ${id}`}>
      <Image src={`/images/${id}.webp`} />
    </div>
  );
};
