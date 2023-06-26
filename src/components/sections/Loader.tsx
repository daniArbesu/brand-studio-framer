import type { Dispatch, SetStateAction } from 'react';

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Loader = ({ setLoading }: Props): JSX.Element => {
  return <div>Loader</div>;
};

export default Loader;
