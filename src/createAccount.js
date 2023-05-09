import React from 'react';
import { Link } from 'react-router-dom'
import Card from './card.js';


function validateEmail(emailStr) {
  const regex = /\w+@\w+\.\w+/g;
  let result = false;
  if (!regex.test(emailStr)) {
    console.log("email is invalid");
    result = false;
  }
  else {
    console.log("email is valid");
    result = true;
  }
  return result;
}

function testEmailInputIncomplete(emailStr) {
  const regex = /\w+@\b/g;
  let result = false;
  if (!regex.test(emailStr)) {
    console.log("email is invalid");
    result = false;
  }
  else {
    console.log("email is valid");
    result = true;
  }
  return result;
}
function onPasswordChanged(e) {
  //validate password satisfies the requirement

}

function getEmailValidMsgColor() {
  return "green";
}

function getEmailInvalidMsgColor() {
  return "red";
}

export default function CreateAccount() {
  // there will be two sub pages
  // one sub page is to enter the fields of personal information to create account
  // the second page is to show a message the account is successfully created
  const [showForm, setShowForm] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showEmailHelperMsg, setShowEmailHelperMsg] = React.useState(false);
  // email state
  const [emailHelperMsg, setEmailHelperMsg] = React.useState("");
  const [isEmailInput, setIsEmailInput] = React.useState(false);
  const [emailHelperMsgClassName, setEmailHelperMsgClassName] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(false);

  function onEmailChanged(e) {
    // when email input complete, it fires this method, validate and setEmail
    setIsEmailInput(true);

    console.log("email input is changed")
    setShowEmailHelperMsg(true);
    setEmailHelperMsg("...");


  }

  function onEmailGotFocus(e) {
    console.log("on email got focus");

  }

  function onEmailLostFocus(e) {
    console.log("on email lost focus");
    // check if valid
    const val = e.currentTarget.value;
    if (!validateEmail(val)) {
      setShowEmailHelperMsg(true);
      setEmailHelperMsg("invalid email");
      setEmailHelperMsgClassName(getEmailHelperMsgClass(false));
    }
    else {
      setShowEmailHelperMsg(true);
      setEmailHelperMsg("email is valid");
      setEmailHelperMsgClassName(getEmailHelperMsgClass(true));

    }

  }

  function getEmailHelperMsgClass(isEmailValid) {
    const base = "emailHelperMsg";
    return isEmailValid ? base + "-" + getEmailValidMsgColor() : base + "-" + getEmailInvalidMsgColor();
  }
  function getForm({ name, email, password }) {
    return (
      <>
        Name<br />
        <input type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}></input>
        <br />

        Email<br />
        <input type="text"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}></input>
        <br />

        Password<br />
        <input type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        ></input>
        <br />
        <button className="btn btn-primary" type="submit" onClick={handleCreate}>Submit</button>
      </>
    )
  }

  function showFormSubmittedDiv() {
    return (
      <>
        <h5>Success</h5>
        <p>Now login to your account first</p>
        <Link className="btn btn-primary" to="/login">Login</Link>
      </>

    );
  }
  function handleCreate() {
    console.log('handleCreate is called');
    setShowForm(false);
    clearForm();

  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <Card
        bgcolor='primary'
        txtcolor='black'
        title="Create Account"
        body={
          showForm ?
            getForm({ name, email, password }) : (showFormSubmittedDiv())
        }
        status={showForm}
      ></Card>
    </>
  );
}

