import React from "react";
let API = require("../../utils/API");

class AllListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listings: [] };
  }

  getListings = () => {
    API.listings().then(res => {
      this.setState({
        listings: res,
      })
    });
  };

  componentDidMount() {
    this.getListings();
  }

  render() {
    return (
        <div>{this.state.listings.map(i => {
            return(
            <h1>{i.property.description}</h1>
            )
        })}</div>
    );
  }
}

export default AllListings;
