import { Link, useRouteMatch } from "react-router-dom";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const ListingCard = (props) => {
  let { url} = useRouteMatch();

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
          {currencyFormatter.format(props.listing.price)}
        </p>
        <p className="card-text">{props.listing.property.description}</p>
        <p className="card-text">{props.listing.state}</p>
        <Link to={`${url}/${props.listing.id}`}>Details</Link>
      </div>
    </div>
  );
};

export default ListingCard;
