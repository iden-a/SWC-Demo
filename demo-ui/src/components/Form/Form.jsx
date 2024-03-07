import Navbar from "../Navbar/Navbar.jsx";
import "../Form/Form.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    collegeMajor: "",
    funFact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
        firstName: "",
        lastName: "",
        college: "",
        major: "",
        funFact: "",
    })
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend or display it
    console.log(formData);
    clearForm();
    navigateTo("/data")
  };

  return (
    <>
      <Navbar />
      <h2 className="heading">Enter Details</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="first-last-container">
            <div>
              <p>First Name</p>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="college-university">
              <p>College/University</p>
              <input
                type="text"
                id="collegeMajor"
                name="collegeMajor"
                value={formData.college}
                onChange={handleChange}
              />
            </div>

            <div className="college-major ">
              <p>Major</p>
              <input
                type="text"
                id="collegeUniversity"
                name="collegeUniversity"
                value={formData.major}
                onChange={handleChange}
              />
            </div>

          <div className="fun-fact">
            <p>Fun Fact</p>
            <textarea
              id="funFact"
              name="funFact"
              value={formData.funFact}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="form-btn">Submit</button>
        </form>
      </div>
    </>
  );
}
