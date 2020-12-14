import React from "react";
import { Link } from "react-router-dom";
import StateBadge from "../StateBadge";
import {
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import currencyFormatter from "../../utils/currencyFormatter";
import "./styles.css";
const API = require("../../utils/API");

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
                  <div className="card mt-5">
                    <div className="row card-body text-center detail-price">
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
                  <div className="card mt-5">
                    <div className="row card-body text-center detail-agent">
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
                  <div className="mt-5">
                    <p className="text-uppercase text-center detail-agent">
                      Share this home!
                    </p>
                    <div className="d-flex justify-content-around">
                      <FacebookShareButton url={window.location.href}>
                        <button className="btn social-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-facebook"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                            />
                          </svg>
                        </button>
                      </FacebookShareButton>
                      <TwitterShareButton url={window.location.href}>
                        <button class="btn social-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-twitter"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </button>
                      </TwitterShareButton>
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
