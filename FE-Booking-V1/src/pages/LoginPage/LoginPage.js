import "./LoginPage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleUserChange = (e) => {
    e.preventDefault();
    setEmail({
      email: e.target.value,
    });
  };
  let handlePasswordChange = (e) => {
    setPassword({ password: e.target.value });
  };

  return (
    <>
      <div>
        <div className="header containerLogin">
          <div className="header-main">
            <h1>Booking House Login</h1>
            <div className="header-bottom">
              <div className="header-right w3agile">
                <div className="header-left-bottom agileinfo">
                  <form
                    action="#"
                    onSubmit={(e) => {
                      e.preventDefault();

                      let newUser = {
                        email: email.email,
                        password: password.password,
                      };
                      console.log("handleSubmit", newUser);
                      console.log(newUser);
                      if (newUser.email === "" && newUser.password === "") {
                        Swal.fire({
                          position: "centen-end",
                          color: "red",
                          icon: "warning",
                          title: " Email end Password cannot be empty!",
                          showConfirmButton: false,
                          timer: 3000,
                        });
                      } else if (
                        newUser.password !== "" &&
                        newUser.email === ""
                      ) {
                        Swal.fire({
                          position: "centen-end",
                          color: "red",
                          icon: "warning",
                          title: " Email cannot be empty!",
                          showConfirmButton: false,
                          timer: 3000,
                        });
                      } else if (
                        newUser.password === "" &&
                        newUser.email !== ""
                      ) {
                        Swal.fire({
                          position: "centen-end",
                          color: "red",
                          icon: "warning",
                          title: " Password cannot be empty!",
                          showConfirmButton: false,
                          timer: 3000,
                        });
                      }

                      fetch(`http://127.0.0.1:3001/user/loginUser`, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newUser),
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          console.log("day la post", data);

                          if (data.message === "user is not exits") {
                            Swal.fire({
                              position: "centen-end",
                              color: "red",
                              icon: "warning",
                              title: "Email is not exits !",
                              showConfirmButton: false,
                              timer: 3000,
                            });
                          } else if (data.message === "sai passs") {
                            Swal.fire({
                              position: "centen-end",
                              color: "red",
                              icon: "warning",
                              title: "Wrong password",
                              showConfirmButton: false,
                              timer: 3000,
                            });
                          }
                          if (data.message === "login seccessfully") {
                            Swal.fire({
                              position: "centen-end",
                              icon: "success",
                              title: "Login successfully",
                              showConfirmButton: false,
                              timer: 3000,
                            });
                            // localStorage.setItem("user_info", data.user_info);

                            // let user_info = localStorage.getItem("user_info");

                            window.location.href = "http://localhost:3000/";
                          }
                          // setUser(data)
                        });
                    }}
                  >
                    <input
                      type="email"
                      name="name"
                      onChange={handleUserChange}
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      name="password"
                      onChange={handlePasswordChange}
                      placeholder="Password"
                    />
                    <div className="remember">
                      <span className="checkbox1">
                        <label className="checkbox">
                          <input type="checkbox" name="" />
                          <i> </i>Remember me
                        </label>
                      </span>
                      <div className="forgot">
                        <h6>
                          <Link to="/forgotPasswordPage">
                            <div>Forgot Password?</div>
                          </Link>
                        </h6>
                      </div>
                      <div className="clear"> </div>
                    </div>
                    <input type="submit" value="Login" />
                  </form>
                  <div className="header-left-top">
                    <div className="sign-up">
                      <h2>or</h2>
                    </div>
                  </div>
                  <div className="header-social wthree">
                    <Link to="/registerPage">
                      {" "}
                      <input type="submit" value="Register" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
