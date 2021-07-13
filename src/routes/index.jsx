import { Route } from 'react-router-dom';
import { components } from './components';

function Routes() {
  return (
    <>
      {components.map(route => (
        <Route
          key={route.title}
          exact
          path={`/${route.path}`}
          component={route.component}
        />
      ))}
    </>
  );
}

export default Routes;
