import React from "react";
import { useLocation } from "react-router-dom";
import inners from "../images/inners.png"; // Local asset

function HeroBanner() {
  const location = useLocation();
  const route = location.pathname.replace("/", "");

  return (
    <div
      className="hero-banner-inner"
      style={{
        backgroundImage: `url(${inners})`,
        padding: "100px 25px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "100px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white">
            <h2>
              <b>{route || "Home"}</b>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
