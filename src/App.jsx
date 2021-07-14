import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from '@components/Home/Home';
import Routes from './routes';

function App() {
  return (
    <Switch>
      {Routes}
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default App;
