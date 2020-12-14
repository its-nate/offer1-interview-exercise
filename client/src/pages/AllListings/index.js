import React from "react";
import ListingCard from "../../components/ListingCard";
import Header from "../../components/Header";
import "./styles.css";
const API = require("../../utils/API");

class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrooms: undefined,
      priceLow: undefined,
      priceHigh: undefined,
      location: undefined,
      filteredListings: [],
    };
  }

  getListings = () => {
    API.listings().then((res) => {
      this.setState({
        listings: res.data,
      });
      this.filter();
    });
  };

  componentDidMount() {
    this.getListings();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, this.filter);
  }

  filter() {
    let listings = this.state.listings;
    let { bedrooms, priceLow, priceHigh, location } = this.state;
    let filtered = [];

    for (let i = 0; i < listings.length; i++) {
      if (bedrooms || priceLow || priceHigh || location) {
        if (
          (bedrooms ? listings[i].property.numberBedrooms >= bedrooms : true) &&
          (priceLow ? listings[i].price >= priceLow : true) &&
          (priceHigh ? listings[i].price <= priceHigh : true) &&
          (location ? listings[i].property.address.city.toLowerCase() === location.toLowerCase() : true)
        ) {
          filtered.push(listings[i]);
        }
      } else {
        filtered.push(listings[i]);
      }
    }

    this.setState({ filteredListings: filtered });
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row my-5">
            <form>
              <div className="col-3 d-inline-block px-3">
                <label htmlFor="bedrooms" className="form-label">
                  Bedrooms (Minimum)
                </label>
                <input
                  name="bedrooms"
                  type="text"
                  className="form-control"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.bedrooms}
                  placeholder="0"
                />
              </div>
              <div className="col-3 d-inline-block px-3">
                <label htmlFor="priceLow" className="form-label">
                  Min Price
                </label>
                <input
                  name="priceLow"
                  type="text"
                  className="form-control"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.priceLow}
                  placeholder="$0"
                />
              </div>
              <div className="col-3 d-inline-block px-3">
                <label htmlFor="priceHigh" className="form-label">
                  Max Price
                </label>
                <input
                  name="priceHigh"
                  type="text"
                  className="form-control"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.priceHigh}
                  placeholder="$0"
                />
              </div>
              <div className="col-3 d-inline-block px-3">
                <label htmlFor="location" className="form-label">
                  City
                </label>
                <input
                  name="location"
                  type="text"
                  className="form-control"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.location}
                  placeholder="San Diego"
                />
              </div>
            </form>
          </div>
          <div className="row">
            {this.state.filteredListings.map((i) => {
              return (
                <div className="col-4" key={i.id}>
                  <ListingCard listing={i} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default AllListings;
