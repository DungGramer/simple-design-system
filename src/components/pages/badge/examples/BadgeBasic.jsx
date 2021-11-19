import Badge from '@molecules/badge/Badge';

const BadgeBasic = () => {
  return (
    <>
      <div>
        <Badge appearance="dot" direction="top right">
          <i className="fad fa-bell" style={{ fontSize: '1.5rem' }} />
        </Badge>
      </div>

      <div style={{ width: '35px' }}>
        <Badge appearance="dot" direction="top right" size="small" data={5}>
          <i className="fad fa-square" style={{ fontSize: '1.5rem' }} />
        </Badge>
      </div>
    </>
  );
};

export default BadgeBasic;
