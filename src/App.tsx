import { useState } from 'react';
import Banner from './components/sections/Banner';
import Header from './components/sections/Header';
import Loader from './components/sections/Loader';

const App = (): JSX.Element => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Banner />
          {!loading && (
            <div className="transition-image final">
              <img src={'/images/image-2.webp'} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default App;
