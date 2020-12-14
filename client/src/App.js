import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllListings from "./pages/AllListings";
import ListingDetail from "./pages/ListingDetail";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/listings">
          <AllListings />
        </Route>
        <Route path="/listings/:id">
          <ListingDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
