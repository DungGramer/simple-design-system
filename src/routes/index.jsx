import { Route } from 'react-router-dom';
import components from './components';

const Routes = components.map(route => (
  <Route
    key={route.path}
    exact
    path={`/${route.path}`}
    component={route.component}
  />
));

export default Routes;
