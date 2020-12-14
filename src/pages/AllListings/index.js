import React from "react";
import ListingCard from "../../components/ListingCard";
import Header from "../../components/Header";
import "./styles.css";

class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrooms: null,
      priceLow: null,
      priceHigh: null,
      location: null,
      filteredListings: [],
    };
  }

  componentDidMount() {
    setTimeout(() => this.filter(), 100);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value }, this.filter);
  }

  filter() {
    let listings = this.props.listings;
    let { bedrooms, priceLow, priceHigh, location } = this.state;
    let filtered = [];

    for (let i = 0; i < listings.length; i++) {
      if (bedrooms || priceLow || priceHigh || location) {
        if (
          (bedrooms ? listings[i].property.numberBedrooms >= bedrooms : true) &&
          (priceLow ? listings[i].price >= priceLow : true) &&
          (priceHigh ? listings[i].price <= priceHigh : true) &&
          (location ? listings[i].property.address.city === location : true)
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
                <label for="bedrooms" class="form-label">
                  Bedrooms (Minimum)
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="bedrooms"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.bedrooms}
                  placeholder="0"
                />
              </div>
              <div className="col-3 d-inline-block px-3">
                <label for="priceLow" class="form-label">
                  Min Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="priceLow"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.priceLow}
                  placeholder="$0"
                />
              </div>
              <div className="col-3 d-inline-block px-3">
                <label for="priceHigh" class="form-label">
                  Max Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="priceHigh"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.priceHigh}
                  placeholder="$0"
                />
              </div>
              <div className="col-3 d-inline-block px-3">
                <label for="location" class="form-label">
                  City (Case Sensitive)
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
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
                <div className="col-4">
                  <ListingCard key={i.id} listing={i} />
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
