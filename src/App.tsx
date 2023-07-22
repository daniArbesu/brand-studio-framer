import { useEffect, useState } from 'react';
import Banner from './components/sections/Banner';
import Header from './components/sections/Header';
import Loader from './components/sections/Loader';
import { TransitionImage } from './styles/components';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

const App = (): JSX.Element => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body')?.classList.add('loading')
      : document.querySelector('body')?.classList.remove('loading');
  }, [loading]);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <TransitionImage className="final">
                <motion.img
                  src={'/images/image-2.webp'}
                  layoutId="main-image-1"
                  transition={{ ease: [0.6, 0.01, -0.05, 0.91], duration: 1.6 }}
                />
              </TransitionImage>
            )}
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default App;
