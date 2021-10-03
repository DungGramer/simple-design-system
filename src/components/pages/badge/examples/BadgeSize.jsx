import Badge from "@atoms/badge/Badge";

const BadgeSize = () => {
  return (
    <>
      <div style={{ width: "35px" }}>
        <Badge appearance="dot" direction="top right" size="small" data={5}>
          <i className="fad fa-square" style={{ fontSize: "1.5rem" }} />
        </Badge>
      </div>

      <div style={{ width: "40px" }}>
        <Badge appearance="dot" direction="top right" size="large" data={5}>
          <i className="fad fa-square" style={{ fontSize: "40px" }} />
        </Badge>
      </div>
    </>
  )
}

export default BadgeSize;