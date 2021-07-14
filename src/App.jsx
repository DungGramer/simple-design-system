import './App.scss';

import { Switch } from 'react-router-dom';

import Routes from './routes';
import { Sidebar } from '@templates/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <Switch>{Routes}</Switch>
    </>
  );
}

export default App;
