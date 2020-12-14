import React from "react";
import { Link } from "react-router-dom";
import StateBadge from "../StateBadge";
import API from "../../utils/API";
import currencyFormatter from "../../utils/currencyFormatter";
import "./styles.css";

const formatter = currencyFormatter.format();

class DetailCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  async componentDidMount() {
    await API.listing(this.props.listingId).then((res) => {
      console.log(res.data);
      this.setState({ loaded: true, listing: res.data });
    });
  }

  content() {
    return (
      <>
        <div className="row detail-img-row">
          <img
            src={this.state.listing.property.primaryImageUrl}
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
                    {this.state.listing.property.address.addressLine1},{" "}
                    {this.state.listing.property.address.city},{" "}
                    {this.state.listing.property.address.state}{" "}
                    {this.state.listing.property.address.zip}
                  </h5>
                  <hr />
                  <p className="detail-description">
                    {this.state.listing.property.description}
                  </p>
                </div>
                <div className="col-12 col-lg-4">
                  <div class="card mt-5">
                    <div className="row card-body text-center detail-card detail-price">
                      <div className="col-12">
                        <p className="">
                          Asking Price: <br />
                          <span className="detail-price-number">
                            {formatter.format(this.state.listing.price)}
                          </span>
                        </p>
                      </div>
                      <div className="col-6 py-4 border-end border-bottom">
                        {this.state.listing.property.numberBedrooms} Beds
                      </div>
                      <div className="col-6 py-4 border-bottom">
                        {this.state.listing.property.numberBaths} Baths
                      </div>
                      <div className="col-6 py-4 border-end">
                        {this.state.listing.property.squareFeet} Sq Ft
                      </div>
                      <div className="col-6 py-4">
                        <StateBadge state={this.state.listing.state}>
                          {this.state.listing.state}
                        </StateBadge>
                      </div>
                    </div>
                  </div>
                  <div class="card mt-5">
                    <div className="row card-body text-center detail-card detail-agent">
                      <p className="text-uppercase">Contact Agent</p>
                      <div className="col-12">
                        <p className="">
                          {this.state.listing.listingAgent.user.firstName}{" "}
                          {this.state.listing.listingAgent.user.lastName}
                        </p>
                      </div>
                      {this.state.listing.listingAgent.user.email ? (
                        <div className="col-12">
                          <a
                            href={`mailto:${this.state.listing.listingAgent.user.email}`}
                          >
                            <p>{this.state.listing.listingAgent.user.email}</p>
                          </a>
                        </div>
                      ) : null}
                      {this.state.listing.listingAgent.user.phone ? (
                        <div className="col-12">
                          <p>{this.state.listing.listingAgent.user.phone}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <Link className="detail-listings-link" to={"/listings"}>
                &#5176; Back to listings
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  render() {
    return <>{this.state.loaded ? this.content() : null}</>;
  }
}

export default DetailCard;
