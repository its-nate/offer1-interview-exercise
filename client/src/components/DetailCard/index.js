import { Link } from "react-router-dom";
import StateBadge from "../StateBadge";
import currencyFormatter from "../../utils/currencyFormatter";
import "./styles.css";

const formatter = currencyFormatter.format();

// KNOWN BUG: refresh on detail page causes props to be undefined. data routing needs to be refactored.

const DetailCard = (props) => {
  return (
    <>
      <div className="row detail-img-row">
        <img
          src={props.listing.property.primaryImageUrl}
          className="detail-img"
          alt="..."
        />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-8 mb-5">
            <div className="row mb-5">
              <div className="col-12 col-lg-8">
                <h5 className="detail-address mt-5">
                  {props.listing.property.address.addressLine1},{" "}
                  {props.listing.property.address.city},{" "}
                  {props.listing.property.address.state}{" "}
                  {props.listing.property.address.zip}
                </h5>
                <hr />
                <p className="detail-description">
                  {props.listing.property.description}
                </p>
              </div>
              <div className="col-12 col-lg-4">
                <div class="card mt-5">
                  <div className="row card-body text-center detail-card detail-price">
                    <div className="col-12">
                      <p className="">
                        Asking Price: <br />
                        <span className="detail-price-number">
                          {formatter.format(props.listing.price)}
                        </span>
                      </p>
                    </div>
                    <div className="col-6 py-4 border-end border-bottom">
                      {props.listing.property.numberBedrooms} Beds
                    </div>
                    <div className="col-6 py-4 border-bottom">
                      {props.listing.property.numberBaths} Baths
                    </div>
                    <div className="col-6 py-4 border-end">
                      {props.listing.property.squareFeet} Sq Ft
                    </div>
                    <div className="col-6 py-4">
                      <StateBadge state={props.listing.state}>
                        {props.listing.state}
                      </StateBadge>
                    </div>
                  </div>
                </div>
                <div class="card mt-5">
                  <div className="row card-body text-center detail-card detail-agent">
                    <p className="text-uppercase">Contact Agent</p>
                    <div className="col-12">
                      <p className="">
                        {props.listing.listingAgent.user.firstName}{" "}
                        {props.listing.listingAgent.user.lastName}
                      </p>
                    </div>
                    {props.listing.listingAgent.user.email ? (
                      <div className="col-12">
                        <a
                          href={`mailto:${props.listing.listingAgent.user.email}`}
                        >
                          <p>{props.listing.listingAgent.user.email}</p>
                        </a>
                      </div>
                    ) : null}
                    {props.listing.listingAgent.user.phone ? (
                      <div className="col-12">
                        <p>{props.listing.listingAgent.user.phone}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <Link className="detail-listings-link" to={"/listings"}>&#5176; Back to listings</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
