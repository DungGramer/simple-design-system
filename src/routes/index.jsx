import { Redirect, Route, Switch } from 'react-router-dom';
import components from './components.route';

const Routes = (
  <Switch>
    <Route exact path="/" component={() => <Redirect to="/components/avatar" />} />
    {components.map(route => (
      <Route
        key={route.path}
        exact
        path={route.path}
        component={route.component}
      />
    ))}
    <Route path="*" component={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
