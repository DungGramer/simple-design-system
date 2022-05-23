import Badge from '@molecules/badge/Badge';

const BadgeStatus = () => {
  return (
    <>
      <Badge appearance="dot" />
      <Badge appearance="primary" data="primary" />
      <Badge appearance="primaryInverted" data="primaryInvert" />
      <Badge appearance="important" data="important" />
      <Badge appearance="added" data="added" />
      <Badge appearance="removed" data="removed" />
      <Badge appearance="success" data="success" />
      <Badge appearance="danger" data="danger" />
      <Badge appearance="warning" data="warning" />
    </>
  );
};

export default BadgeStatus;
