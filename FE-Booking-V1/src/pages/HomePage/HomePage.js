import "./HomePage.css";
import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>Đây là trang HomePage</h1>
      <Link to="/loginPage">LoginPage</Link>
      <br></br>
      <Link to="/registerPage">RegisterPage</Link>
      <br></br>
      <Link to="/roomPage">Room Page</Link>
      <br></br>
      <Link to="/userPage">User Page</Link>
    </div>
  )
}

export default HomePage;