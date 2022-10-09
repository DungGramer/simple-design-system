import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import components from './components.route';
import withRoutes from './withRoutes';

// const RoutersMap = () => useRoutes(withRoutes(components));

const RoutersMap = () => {
  const routes = withRoutes(components);

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route index element={<Navigate to="/components/avatar" />} />
      <Route path="*" element={<Navigate replace to="/components/avatar" />} />
    </Routes>
  );
};

export default RoutersMap;
