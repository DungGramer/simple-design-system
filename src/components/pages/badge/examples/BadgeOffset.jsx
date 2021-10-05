import Badge from '@molecules/badge/Badge';

const BadgeOffset = () => {
  return (
    <>
      <div style={{ width: "35px" }}>
        <Badge appearance="dot" direction="top right" data={5} size="small" offset={[11, -10]}>
          <i className="fad fa-square" style={{ fontSize: "1.5rem" }} />
        </Badge>
      </div>
    </>
  )
}

export default BadgeOffset;