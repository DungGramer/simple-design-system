const withRoutes = (routes) => {
  const result = [];
  routes.forEach((item) => {
    const { component: Comp, children, ...rest } = item;
    const route = {
      ...rest,
      element: <Comp />,
      ...(Array.isArray(children) && children.length > 0 && { children: withRoutes(children) }),
    };

    result.push(route);
  });

  return result;
};

export default withRoutes;
