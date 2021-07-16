import './App.scss';

import { Switch } from 'react-router-dom';

import Routes from './routes';
import { Sidebar } from '@templates/Sidebar/Sidebar';
import Header from '@templates/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Switch>{Routes}</Switch>
    </>
  );
}

export default App;
