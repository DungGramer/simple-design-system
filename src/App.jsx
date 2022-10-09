import 'App.scss';

import { useLocation } from 'react-router-dom';

import Header from '@organisms/header/Header';
import Sidebar from '@organisms/sidebar/Sidebar';
import RoutersMap from './routes';

import Loading from '@atoms/loading/Loading';
import { Suspense, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ThemeProvider } from './context/themeContext/themeContext';
import ScrollToTop from './helpers/scrollToTop';
import './translations/i18n';

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <>
      <ScrollToTop />
      <ThemeProvider>
        <Header />
        <main className="main-container">
          <Sidebar />
          <section ref={nodeRef} id="main">
            <TransitionGroup appear className="transition-group">
              <CSSTransition
                nodeRef={nodeRef}
                unmountOnExit
                key={location.key}
                classNames="fade"
                timeout={{ enter: 0, exit: 250 }}
              >
                <Suspense fallback={<Loading />}>
                  <RoutersMap />
                </Suspense>
              </CSSTransition>
            </TransitionGroup>
          </section>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
