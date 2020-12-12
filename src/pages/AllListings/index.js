import React from "react";
import ListingCard from "../../components/ListingCard";

class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrooms: "",
      price: "",
      location: ""
    };
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value});
  }

  render() {
    return (
      <div className="row">
        <form>
          <label for="bedrooms" class="form-label">
            Bedrooms
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => this.handleChange(event)}
            id="bedrooms"
          >
            <option value="0" selected>
              0
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
          <label for="price" class="form-label">
            Price
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => this.handleChange(event)}
            id="price"
          >
            <option value="0" selected>0</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
          <label for="location" class="form-label">
            Location
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => this.handleChange(event)}
            id="location"
          >
            <option value="0" selected>0</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
          </select>
        </form>
        
        {this.props.listings.map((i) => {
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
