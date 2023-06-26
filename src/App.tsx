import { useState } from 'react';
import Banner from './components/sections/Banner';
import Header from './components/sections/Header';
import Loader from './components/sections/Loader';

const App = (): JSX.Element => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Banner />
          {/*           {!loading && (
            <div className="transition-image final">
              <img src={process.env.PUBLIC_URL + `/images/image-2.jpg`} />
            </div>
          )} */}
        </>
      )}
    </>
  );
};

export default App;
