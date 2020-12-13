import React from "react";
import ListingCard from "../../components/ListingCard";
import { listings } from "../../utils/API";

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
      <div className="row">
        <form>
          <label for="bedrooms" class="form-label">
            Bedrooms
          </label>
          <input
            type="text"
            class="form-control"
            id="bedrooms"
            onChange={(event) => this.handleChange(event)}
            value={this.state.bedrooms}
          />
          <label for="priceLow" class="form-label">
            Price Low
          </label>
          <input
            type="text"
            class="form-control"
            id="priceLow"
            onChange={(event) => this.handleChange(event)}
            value={this.state.priceLow}
          />
          <label for="priceHigh" class="form-label">
            Price High
          </label>
          <input
            type="text"
            class="form-control"
            id="priceHigh"
            onChange={(event) => this.handleChange(event)}
            value={this.state.priceHigh}
          />
          <label for="location" class="form-label">
            Location
          </label>
          <input
            type="text"
            class="form-control"
            id="location"
            onChange={(event) => this.handleChange(event)}
            value={this.state.location}
          />
        </form>

        {this.state.filteredListings.map((i) => {
          return (
            <div className="col-4">
              <ListingCard key={i.id} listing={i} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllListings;
