import 'App.scss';

import { Switch, useLocation } from 'react-router-dom';

import Routes from './routes';
import Sidebar from '@organisms/sidebar/Sidebar';
import Header from '@organisms/header/Header';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Suspense } from 'react';
import Loading from '@atoms/loading/Loading';
import './translations/i18n';
import { ThemeProvider } from './context/themeContext/themeContext';
import ScrollToTop from './helpers/scrollToTop';

function App() {
  const location = useLocation();
  // const nodeRef = useRef(null);

  return (
    <>
      <ScrollToTop />
      <ThemeProvider>
        <Header />
        <main className="main-container">
          <Sidebar />
          <section id="main">
            <TransitionGroup appear className="transition-group">
              <CSSTransition
                // nodeRef={nodeRef}
                unmountOnExit
                key={location.key}
                classNames="fade"
                timeout={{ enter: 250, exit: 0 }}
              >
                <Switch location={location}>
                  <Suspense fallback={<Loading />}>{Routes}</Suspense>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </section>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
