import { useEffect, useState } from 'react';
import Banner from './components/sections/Banner';
import Header from './components/sections/Header';
import Loader from './components/sections/Loader';
import { TransitionImage } from './styles/components';

const App = (): JSX.Element => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body')?.classList.add('loading')
      : document.querySelector('body')?.classList.remove('loading');
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Banner />
          {!loading && (
            <TransitionImage className="final">
              <img src={'/images/image-2.webp'} />
            </TransitionImage>
          )}
        </>
      )}
    </>
  );
};

export default App;
