import React, { useState } from "react";
import "./loginmodal.scss";
import { Modal } from "react-bootstrap";
import axiosInstance from "../../service/baseService";
import AppServices from "../../service/appservice";

const LoginModal = ({ showLogin, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [showMessage, setMessage] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const [emailError, setEmailError] = useState(false);

  const loginUser = (e) => {
    e.preventDefault();
    console.log("Credentials: ", email, password);

    if (validateEmail()) {
      console.log("Login");
    }
  };

  const validateEmail = () => {
    if (/\S+@\S+\.\S+/.test(email)) {
      setEmail(email.toLowerCase().trim());
      setEmailError(false);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  };
  return (
    <Modal
      show={showLogin}
      onHide={handleLogin}
      dialogClassName={"modal_user"}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        <div className={"modalBody_user"}>
          <div className={"heading_modal_user"}>Login</div>
          <form>
            <span className={"span_user"}>Email</span>
            <div className={emailError ? `${"showError"}` : ""}>
              <input
                className={"input_user"}
                type="text"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={"errorCont"}>
                <span className={"error"}>Invalid email</span>
              </div>
            </div>

            <span className={"span_user"}>Password</span>
            <div>
              <input
                className={"input_user"}
                type="password"
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {showMessage ? (
              succeeded ? (
                <div className={"messagecont"}>
                  <span>Login Successful</span>
                </div>
              ) : (
                <div className={"messagecont"}>
                  <span className={"errormessage"}>Invalid Credentials</span>
                </div>
              )
            ) : null}
            <div className={"flexbox_button_user"}>
              <button
                disabled={isLoading}
                className={`${"confirmBtn"} ${"width_constraint_edit"}`}
                onClick={(e) => loginUser(e)}
              >
                {isLoading ? "Submitting" : <div>Login</div>}
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default LoginModal;