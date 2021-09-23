export const getNameComponents = (child) => {
  if (typeof child === 'object')
  return child.type.name;
};

export const findNameComponents = (children, name) => {
  if (Array.isArray(children)) {
    return children.find(child => getNameComponents(child) === name);
  } return '';
}

export const findPropsChildren = (children, name) => {
  if (Array.isArray(children)) {
    return children.find(child => child.props[name])?.props[name];
  } return '';
}