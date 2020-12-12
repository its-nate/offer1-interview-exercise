import { Link } from "react-router-dom";
import currencyFormatter from "../../utils/currencyFormatter";

const formatter = currencyFormatter.format();

const DetailCard = (props) => {

  return (
    <div className="card" style={{ width: "18rem;" }}>
      <img
        src={props.listing.property.primaryImageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.listing.property.address.addressLine1}
        </h5>
        <h5 className="card-title">
          {props.listing.property.address.city},{" "}
          {props.listing.property.address.state}{" "}
          {props.listing.property.address.zip}
        </h5>
        <p className="card-text">
          {formatter.format(props.listing.price)}
        </p>
        <p className="card-text">{props.listing.property.description}</p>
        <p className="card-text">{props.listing.state}</p>
        <Link to={'/listings'}>Back to listings</Link>
      </div>
    </div>
  );
};

export default DetailCard;