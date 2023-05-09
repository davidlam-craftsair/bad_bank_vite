import React from 'react';
import { UserContext } from './context.js'
import Card from './card.js';

export default function Login() {
  // create an React Component, namely a page for user login 
  // using Card component for user to input email and password to login
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);

  function getLoginForm() {
    //  return a label and input tag
    const labelClassName = "col-form-label";
    const inputDivClassName = "input-group"
    return (
      <>
        <div>
          <label className={labelClassName}>Username or Email</label>
          <div className={inputDivClassName}>
            <input type="text" className="form-control" ></input>
          </div>
        </div>
        <div>
          <label className={labelClassName}>Password</label>
          <div className={inputDivClassName}>
            <input type="text" className="form-control" ></input>
          </div>
        </div>
      </>
    );
  }

  function getLoginSuccessful() {
    return (
      <p>Login successfully.</p>
    )
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "250px" }}>
          <Card
            bgcolor="primary"
            title="Login"
            text="Please login to your account"
            body={
              show ? getLoginForm() : getLoginSuccessful()
            }

          >
          </Card>
        </div>
      </div>
    </>
  );
}
