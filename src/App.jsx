import styles from './App.module';

import { Switch } from 'react-router-dom';

import Routes from './routes';
import { Sidebar } from '@templates/Sidebar/Sidebar';
import Header from '@templates/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main className={styles['main-container']}>
        <Sidebar />
        <section className={styles.main}><h1>{Routes}</h1></section>
      </main>
    </>
  );
}

export default App;
