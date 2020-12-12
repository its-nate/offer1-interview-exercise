import React from "react";
import ListingCard from "../../components/ListingCard";

class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrooms: "",
      priceLow: "",
      priceHigh: "",
      location: "",
      filteredListings: [],
    };
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value }, this.filter);
  }

  filter() {
    let { bedrooms, priceLow, priceHigh } = this.state;
    let filtered = [];

    this.props.listings.map((listing) => {
      if (
        listing.property.numberBedrooms >= bedrooms &&
        (priceLow
          ? listing.price >= priceLow
          : true) &&
        (priceHigh
          ? listing.price <= priceHigh
          : true)
      ) {
        filtered.push(listing);
      }
    });

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
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => this.handleChange(event)}
            id="location"
          >
            <option value="0" selected>
              0
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
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
