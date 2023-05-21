import React from 'react';
import { Link } from 'react-router-dom'
import Card from './card.js';

const baseHelperMsg = "helperMsg";
var isEmailValidOnce = false;

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

function getValidMsgColor() {
  return "green";
}

function getInvalidMsgColor() {
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
  const [createAccountButtonName, setCreateAccountButtonName] = React.useState("Create Account");

  // password related state 
  const [passwordValidationHelperMsg, setPasswordValidationHelperMsg] = React.useState("");
  const [passwordValidationHelperMsgElementClassName, setPasswordValidationHelperMsgElementClassName] = React.useState("");

  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [isAccountNameValid, setIsAccountNameValid] = React.useState(false);
  const [isCreateAccountButtonDisabled, setIsCreateAccountButtonDisabled] = React.useState(true);

  function tryToValidateEmail(val) {
    if (validateEmail(val)) {
      isEmailValidOnce = true;
      onEmailValid();

    }
    else {
      if (isEmailValidOnce) {
        setEmailHelperMsg("Email invalid")
      }
      onEmailInvalid();
    }
  }
  function onEmailChanged(e) {
    // when email input complete, it fires this method, validate and setEmail
    const val = e.currentTarget.value;
    setEmail(val);
    tryToValidateEmail(val);
    tryToCheckIfAllFieldsValidated();


  }

  function onEmailLostFocus(e) {
    console.log("on email lost focus");
    // check if valid
    const val = e.currentTarget.value;
    if (!validateEmail(val)) {
      setEmailHelperMsg("Email invalid");
      if (val == "") {
        alert("email is blank. Please input email in the form");
      }
    }
    else {
      setEmailHelperMsg("Email valid");
    }

  }

  function onAccountNameLostFocus(e) {
    console.log("on account name field lost focus");
    // check if valid
    const val = e.currentTarget.value;
    if (!validateAccountName(val)) {
      alert("Name is blank in the form. Please input your name in the Name field");
    }
  }


  function validatePassword(val) {
    // return true if passing the requirement
    return val.length >= 8;
  }

  function validateAccountName(val) {
    // return true if passing the requirement
    return val != "";
  }

  function onEmailValid() {
    setIsEmailValid(true);
    setEmailHelperMsg("Email valid");
    setEmailHelperMsgClassName(getHelperMsgClass(true));
    tryToCheckIfAllFieldsValidated();
  }

  function onEmailInvalid() {
    setIsEmailValid(false);
    setEmailHelperMsgClassName(getHelperMsgClass(false));

  }

  function onPasswordFieldLostFocus(e) {
    console.log("on password field lost focus");
    const val = e.currentTarget.value;

    if (!validatePassword(val)) {
      setIsCreateAccountButtonDisabled(true);
      alert("Password must at least contains 8 characters");
    }
  }

  function onPasswordValid() {
    setIsPasswordValid(true);
    setPasswordValidationHelperMsg("Password valid");
    setPasswordValidationHelperMsgElementClassName(getHelperMsgClass(true));
    tryToCheckIfAllFieldsValidated();
  }

  function onPasswordInvalid() {
    setIsPasswordValid(false);
    setPasswordValidationHelperMsg("Password needs 8 or more characters");
    setPasswordValidationHelperMsgElementClassName(getHelperMsgClass(false));
  }

  function checkIfAllValidated() {
    return isAccountNameValid && isEmailValid && isPasswordValid;
  }

  function tryToCheckIfAllFieldsValidated() {
    if (checkIfAllValidated()) {
      onAllFieldsValidated();
    }
    else {
      setIsCreateAccountButtonDisabled(true);
    }
  }

  function getHelperMsgClass(isValid) {
    return isValid ? baseHelperMsg + "-" + getValidMsgColor() : baseHelperMsg + "-" + getInvalidMsgColor();
  }

  function onAllFieldsValidated() {
    console.log("all fields are validated");
    setIsCreateAccountButtonDisabled(false);
  }

  function tryValidatePassword(val) {
    if (validatePassword(val)) {
      onPasswordValid();
      setIsCreateAccountButtonDisabled(false);
    }
    else {
      onPasswordInvalid();
      setIsCreateAccountButtonDisabled(true);
    }

  }

  function onPasswordChanged(e) {
    const val = e.currentTarget.value;
    setPassword(val)
    tryValidatePassword(val);
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
          onChange={e => {
            const val = e.currentTarget.value;
            setName(val);
            if (validateAccountName(val)) {
              setIsAccountNameValid(true);
              if (checkIfAllValidated()) {
                onAllFieldsValidated();
              }
            }
            else {
              setIsAccountNameValid(false);
            }
          }
          }
          onBlur={onAccountNameLostFocus}
        ></input>
        <br />

        Email<br />
        <input type="text"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={onEmailChanged}
          onBlur={onEmailLostFocus}
        ></input>
        <p className={emailHelperMsgClassName}>{emailHelperMsg}</p>
        <br />

        Password<br />
        <input type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={onPasswordChanged}
          onBlur={onPasswordFieldLostFocus}
        ></input>
        <p className={passwordValidationHelperMsgElementClassName}>{passwordValidationHelperMsg}</p>
        <br />

        <button className="btn btn-primary"
          type="submit"
          disabled={isCreateAccountButtonDisabled}
          onClick={handleCreate}>{createAccountButtonName}</button>
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

  function setAllFieldsToBeInvalid() {
    setIsEmailValid(false);
    setIsAccountNameValid(false);
    setIsPasswordValid(false);
  }

  function handleCreate() {
    console.log('handleCreate is called');
    // validate all necessary are input

    alert("Successfully Created Account");
    setShowForm(true);
    clearForm();
    setAllFieldsToBeInvalid();
    setIsCreateAccountButtonDisabled(true);
    setCreateAccountButtonName("Add Another Account");
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setEmailHelperMsg("");
    setPasswordValidationHelperMsg("");
  }

  return (
    <>
      <div>
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
      </div>
    </>
  );
}

