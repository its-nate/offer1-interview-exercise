const StateBadge = (props) => {
  let bgColor;
  let textColor = "text-light";

  switch (props.state) {
    case "Active":
      bgColor = "success";
      break;
    case "Pending":
      bgColor = "warning";
      textColor = "text-dark";
      break;
    case "PreSale":
      bgColor = "danger";
      break;
    case "Sold":
      bgColor = "primary";
      break;
    default:
      bgColor = "success";
      break;
  }

  return (
    <p className={`badge rounded-pill bg-${bgColor} ${textColor}`}>
      {props.children}
    </p>
  );
};

export default StateBadge