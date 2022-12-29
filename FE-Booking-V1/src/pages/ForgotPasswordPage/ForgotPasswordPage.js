import "./ForgotPasswordPage.css";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  let handleChange = (e) => {
    e.preventDefault();
    setEmail({
      email: e.target.value,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let emailReset = {
      email: email.email,
    };
    console.log(emailReset);
    fetch(`http://127.0.0.1:3001/user/forgotpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailReset),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("day la post", data);

        if (data.message === "Email is not exits") {
          Swal.fire({
            position: "centen-end",
            color: "red",
            icon: "warning",
            title: "Email is not exits !",
            showConfirmButton: false,
            timer: 3000,
          });
        } else {
          Swal.fire({
            position: "centen-end",
            color: "red",
            icon: "warning",
            title: "Email cannot be empty!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        if (data.message === "Email is exits") {
          Swal.fire({
            position: "centen-end",
            color: "green",
            icon: "success",
            title: "Email is exits",
            showConfirmButton: false,
            timer: 3000,
          });
          window.location.href = "http://localhost:3000/resetpassword";
        }
      });
  };
  return (
    <>
      <div>
        <div className="header containerForgot">
          <div className="header-main">
            <h1> Forgot Password</h1>
            <div className="header-bottom">
              <div className="header-right w3agile">
                <div className="header-left-bottom agileinfo">
                  <form action="#" onSubmit={handleSubmit}>
                    <input type="email" name="name" onChange={handleChange} />
                    <div className="remember">
                      <div className="forgot">
                        <h6>
                          <Link to="/loginPage">
                            <div>Login</div>
                          </Link>
                        </h6>
                      </div>
                      <div className="clear"> </div>
                    </div>
                    <input type="submit" value="Forgot password" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div> */}
        </div>
      </div>
    </>
  );
}
export default ForgotPasswordPage;
