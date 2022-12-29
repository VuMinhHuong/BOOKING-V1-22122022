import "./RegisterPage.css";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let handleUserChange = (e) => {
    e.preventDefault();
    setUser({
      userName: e.target.value,
    });
  };

  let handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword({
      password: e.target.value,
    });
  };
  let handleEmailChange = (e) => {
    e.preventDefault();
    setEmail({
      emailName: e.target.value,
    });
  };

  let handleSubmitRegister = (e) => {
    e.preventDefault();
    let profileUser = {
      userName: user.userName,
      email: email.emailName,
      password: password.password,
    };
    // console.log(profileUser.userName);

    // if (
    //   profileUser.userName === "" &&
    //   profileUser.password !== "" &&
    //   profileUser.email !== ""
    // ) {
    //   Swal.fire({
    //     position: "centen-end",
    //     icon: "warning",
    //     title: " Username cannot be empty!",
    //     showConfirmButton: false,
    //     timer: 3000,
    //   });
    // }
    // if (
    //   profileUser.password !== "" &&
    //   profileUser.email === "" &&
    //   profileUser.userName !== ""
    // ) {
    //   Swal.fire({
    //     position: "centen-end",
    //     icon: "warning",
    //     title: " Email cannot be empty!",
    //     showConfirmButton: false,
    //     timer: 3000,
    //   });
    // }
    // if (
    //   profileUser.password === "" &&
    //   profileUser.email !== "" &&
    //   profileUser.userName !== ""
    // ) {
    //   Swal.fire({
    //     position: "centen-end",
    //     icon: "warning",
    //     title: " Password cannot be empty!",
    //     showConfirmButton: false,
    //     timer: 3000,
    //   });
    // }

    // if (
    //   profileUser.email === "" &&
    //   profileUser.password === "" &&
    //   profileUser.userName === ""
    // ) {
    //   Swal.fire({
    //     position: "centen-end",
    //     icon: "warning",
    //     title: " Email end password , userName cannot be empty!",
    //     showConfirmButton: false,
    //     timer: 3000,
    //   });
    // }

    console.log(profileUser);
    fetch(`http://127.0.0.1:3001/user/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Email end password , userName cannot be empty!") {
          Swal.fire({
            position: "centen-end",
            color: "red",
            icon: "warning",
            title: "Username end email , password cannot be empty!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        if (data.message === "Email cannot be empty!") {
          Swal.fire({
            position: "centen-end",
            color: "red",
            icon: "warning",
            title: "Email cannot be empty!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        if (data.message === "Password cannot be empty!") {
          Swal.fire({
            position: "centen-end",
            icon: "warning",
            color: "red",
            title: "Password cannot be empty!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        if (data.message === "Username cannot be empty!") {
          Swal.fire({
            position: "centen-end",
            color: "red",
            icon: "warning",
            title: "Username cannot be empty!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        if (data.message === "Username end Email cannot be empty!") {
          Swal.fire({
            position: "centen-end",
            color: "red",
            icon: "warning",
            title: "Username end email cannot be empty!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        if (data.message === "Username end Password cannot be empty!") {
          Swal.fire({
            position: "centen-end",
            color: "red",
            icon: "warning",
            title: "Username end password cannot be empty!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        if (data.message === "Email end Password cannot be empty!") {
          Swal.fire({
            position: "centen-end",
            color: "red",
            icon: "warning",
            title: "Email end password cannot be empty!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        if (data.message === "Password is not strong enough") {
          Swal.fire({
            position: "centen-end",
            color: "red",
            icon: "warning",
            title: "Password is not strong enough!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
        if (data.message === "user alreadey exits") {
          Swal.fire({
            position: "centen-end",
            color: "red",
            icon: "warning",
            title: "User alreadey exits !",
            showConfirmButton: false,
            timer: 3000,
          });
        }

        if (data.message === "creat one successfully") {
          Swal.fire({
            position: "centen-end",
            icon: "success",
            title: "Create successfully",
            showConfirmButton: false,
            timer: 3000,
          });

          window.location.href = "http://localhost:3000/loginPage";
        }
      });
  };

  return (
    <>
      <div>
        <div className="header containerRegister">
          <div className="header-main">
            <h1>Booking House Register</h1>
            <div className="header-bottom">
              <div className="header-right w3agile">
                <div className="header-left-bottom agileinfo">
                  <form onSubmit={handleSubmitRegister}>
                    <input
                      type="text"
                      name="name"
                      onChange={handleUserChange}
                      placeholder="Username"
                    />
                    <input
                      type="email"
                      name="name"
                      onChange={handleEmailChange}
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      name="password"
                      onChange={handlePasswordChange}
                      placeholder="Password"
                    />
                    <div className="remember">
                      <span className="checkbox1"></span>
                      <div className="forgot">
                        <h6>
                          <Link to="/forgotPasswordPage">
                            <div>Forgot Password ?</div>
                          </Link>
                        </h6>
                      </div>
                      <div className="clear"> </div>
                    </div>
                    <input type="submit" value="Register" />
                  </form>
                  <div className="header-left-top">
                    <div className="sign-up">
                      <h2>or</h2>
                    </div>
                  </div>
                  <div className="header-social wthree">
                    <Link to="/loginPage">
                      <input type="submit" value="Login" />
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
export default RegisterPage;
