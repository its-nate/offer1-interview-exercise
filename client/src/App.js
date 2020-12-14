import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllListings from "./pages/AllListings";
import ListingDetail from "./pages/ListingDetail";
import "./App.css";
let API = require("./utils/API");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  getListings = () => {
    API.listings().then((res) => {
      this.setState({
        listings: res,
      });
    });
  };

  getListing = (id) => {
    for (let i = 0; i < this.state.listings.length; i++) {
      if (this.state.listings[i].id === parseInt(id)) {
        return this.state.listings[i];
      }
    }
  };

  componentDidMount() {
    this.getListings();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/listings">
            <AllListings listings={this.state.listings} />
          </Route>
          <Route path="/listings/:id">
            <ListingDetail getListing={this.getListing} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
