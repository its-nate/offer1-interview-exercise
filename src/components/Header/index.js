import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/">
            <img
              src="/assets/offer1_logo.png"
              alt="Offer1"
              width="40%"
              className="p-2"
            />
          </Link>

          <form class="d-flex">
            <Link to="/">
              <button class="btn me-2">
                Home
              </button>
            </Link>
            <Link to="/listings">
              <button class="btn">
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
