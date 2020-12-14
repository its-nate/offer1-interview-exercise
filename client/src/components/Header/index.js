import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="nav-img" to="/">
            <img
              src="/assets/offer1_logo.png"
              alt="Offer1"
              width="100%"
              className="p-2"
            />
          </Link>

          <form className="d-flex">
            <Link to="/">
              <button className="btn me-2">
                Home
              </button>
            </Link>
            <Link to="/listings">
              <button className="btn">
                Listings
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
