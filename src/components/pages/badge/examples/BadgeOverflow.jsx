import Badge from "@atoms/badge/Badge";

const BadgeOverflow = () => {
  return <>
    <div style={{ width: "35px" }}>
      <Badge appearance="dot" direction="top right" size="small" data={10} max={5}>
        <i className="fad fa-square" style={{ fontSize: "1.5rem" }} />
      </Badge>
    </div>
  </>;
};

export default BadgeOverflow;