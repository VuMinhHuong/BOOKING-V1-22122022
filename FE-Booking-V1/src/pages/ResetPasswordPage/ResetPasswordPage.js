import "./ResetPasswordPage.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function ResetPasswordPage() {
  const [passWord, setpassWord] = useState("");
  const [password2, setpassword2] = useState("");
  let handlePassWordChange = (e) => {
    setpassWord({
      newPassWord: e.target.value,
    });
  };
  let handlePassWordNewChange = (e) => {
    setpassword2({
      newPassWord2: e.target.value,
    });
  };
  let handleSubmitPass = () => {
    let resetpass = {
      passWord: passWord.newPassWord,
      password2: password2.newPassWord2,
    };
    console.log(resetpass);
  };
  return (
    <>
      <div>
        <div className="header containerReset">
          <div className="header-main">
            <h1> Reset Password</h1>
            <div className="header-bottom">
              <div className="header-right w3agile">
                <div className="header-left-bottom agileinfo">
                  <form action="#" onSubmit={handleSubmitPass}>
                    <input
                      type="password"
                      name="password"
                      onChange={handlePassWordChange}
                      placeholder="New Password"
                    />
                    <input
                      type="password"
                      name="password"
                      onChange={handlePassWordNewChange}
                      placeholder="Enter a new password"
                    />
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
                    <input type="submit" value="Reset password" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ResetPasswordPage;
