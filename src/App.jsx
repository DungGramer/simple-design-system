import 'App.scss';

import { Switch, useLocation } from 'react-router-dom';

import Routes from './routes';
import { Sidebar } from '@organisms/Sidebar/Sidebar';
import Header from '@organisms/Header/Header';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Suspense, useRef } from 'react';
import Loading from '@atoms/loading/Loading';

function App() {
  const location = useLocation();
  // const nodeRef = useRef(null);
  return (
    <>
      <Header />
      <main className="main-container">
        <Sidebar />
        <section className="main">
          <TransitionGroup appear>
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
    </>
  );
}

export default App;
