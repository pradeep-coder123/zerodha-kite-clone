import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid" style={{ background: "#f8f9fa" }}>
      
      {/* Top Header */}
      <div className="p-5" style={{ borderBottom: "1px solid #eee" }}>
        <h4 style={{ fontWeight: "600" }}>Support Portal</h4>
        <Link 
          to="/support" 
          style={{ color: "#387ed1", textDecoration: "none", fontSize: "14px" }}
        >
          Track Tickets
        </Link>
      </div>

      {/* Main Section */}
      <div className="row p-5 m-3">
        
        {/* Left Side */}
        <div className="col-6 p-3">
          <h1 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "20px" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            placeholder="Eg. how do I activate F&O, why is my order rejected..."
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              marginBottom: "20px",
              outline: "none",
            }}
          />

          <div style={{ fontSize: "14px" }}>
            <Link to="/support" style={linkStyle}>Track account opening</Link>
            <Link to="/support" style={linkStyle}>Track segment activation</Link>
            <Link to="/support" style={linkStyle}>Intraday margins</Link>
            <Link to="/support" style={linkStyle}>Kite user manual</Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-6 p-3">
          <h1 style={{ fontSize: "18px", fontWeight: "500", marginBottom: "20px" }}>
            Featured
          </h1>

          <ol style={{ lineHeight: "2", fontSize: "14px", paddingLeft: "20px" }}>
            <li>
              <Link to="/support" style={linkStyle}>
                Current Takeovers and Delisting - January 2026
              </Link>
            </li>
            <li>
              <Link to="/support" style={linkStyle}>
                Latest Intraday leverages - MIS & CO
              </Link>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

const linkStyle = {
  marginRight: "15px",
  display: "inline-block",
  color: "#387ed1",
  textDecoration: "none",
  marginBottom: "8px",
};

export default Hero;