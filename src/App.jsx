import 'App.scss';

import { Switch } from 'react-router-dom';

import Routes from './routes';
import { Sidebar } from '@organisms/Sidebar/Sidebar';
import Header from '@organisms/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main className='main-container'>
        <Sidebar />
        <section className='main'>{Routes}</section>
      </main>
    </>
  );
}

export default App;
