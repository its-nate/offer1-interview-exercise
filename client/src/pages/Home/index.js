import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row home-row">
          <div className="col-12 d-flex justify-content-center align-items-end mb-5">
            <img src="/assets/offer1_logo.png"></img>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-start">
            <Link to="/listings">
              <button className="btn">
                Browse Listings
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
