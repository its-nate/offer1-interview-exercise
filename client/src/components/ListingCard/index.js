import { Link, useRouteMatch } from "react-router-dom";
import StateBadge from "../StateBadge";
import currencyFormatter from "../../utils/currencyFormatter";
import "./styles.css";

const formatter = currencyFormatter.format();

const ListingCard = (props) => {
  let { url } = useRouteMatch();

  return (
    <Link to={`${url}/${props.listing.id}`}>
      <div className="card" style={{ width: "18rem;" }}>
        <div className="position-relative lc-img-container">
          <img
            src={props.listing.property.primaryImageUrl}
            className="card-img-top lc-img"
            alt="..."
          />
          <p className="card-text mb-0 lc-escrow-company">
            {props.listing.escrowCompany.name}
          </p>
          <div className="lc-state-badge">
            <StateBadge state={props.listing.state}>
              {props.listing.state}
            </StateBadge>
          </div>
        </div>
        <div className="card-body">
          <div className="row d-flex justify-content-between">
            <h5 className="card-title col-sm-12 col-lg-5 lc-price">
              {formatter.format(props.listing.price)}
            </h5>
            <p className="card-text col-sm-12 col-lg-7 lc-property-info text-lg-end">
              {props.listing.property.numberBedrooms} bds{" | "}
              {props.listing.property.numberBaths} ba{" | "}
              {props.listing.property.squareFeet.toLocaleString()} sqft
            </p>
          </div>
          <p className="card-text lc-address">
            {props.listing.property.address.addressLine1}, 
            {props.listing.property.address.city},{" "}
            {props.listing.property.address.state}{" "}
            {props.listing.property.address.zip}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
