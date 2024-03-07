import Navbar from "../Navbar/Navbar.jsx";
import "../Data/Data.css";
import React, { useState } from "react";

export default function Data() {
  return (
    <>
      <Navbar />
      <h2 className="title"> Data </h2>
      <div className="data-container">
        {/* this is dummy data */}
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          {/* <h5 className="card-title">Card title</h5> */}
          <h6 className="card-subtitle mb-2 text-body-secondary">
            FirstName LastName
          </h6>
          <p className="card-text">
           College / University
          </p>
          <p className="card-text">
            Major
          </p>
          <p className="card-text">
            Your Fun Fact
          </p>
        </div>
        <div>
            <button> delete</button>
            <button>update</button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          {/* <h5 className="card-title">Card title</h5> */}
          <h6 className="card-subtitle mb-2 text-body-secondary">
            FirstName LastName
          </h6>
          <p className="card-text">
           College / University
          </p>
          <p className="card-text">
            Major
          </p>
          <p className="card-text">
            Your Fun Fact
          </p>
        </div>
        <div>
            <button> delete</button>
            <button>update</button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          {/* <h5 className="card-title">Card title</h5> */}
          <h6 className="card-subtitle mb-2 text-body-secondary">
            FirstName LastName
          </h6>
          <p className="card-text">
           College / University
          </p>
          <p className="card-text">
            Major
          </p>
          <p className="card-text">
            Your Fun Fact
          </p>
        </div>
        <div>
            <button> delete</button>
            <button>update</button>
        </div>
      </div>


      </div>

    </>
  );
}
