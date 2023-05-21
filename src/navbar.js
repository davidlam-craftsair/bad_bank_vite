import React from 'react';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

window.addEventListener('DOMContentLoaded', function() {
}, false);

export default function Navbar() {
  const [activeNavItemId, setActiveNavItemId] = React.useState("home");
  //
  React.useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-toggle="tooltip"]');
    for (let t of tooltipTriggerList) {
      var tooltip = new bootstrap.Tooltip(t, {
        title: t.getAttribute("data-title"),
        placement: t.getAttribute('data-placement'),
        trigger: 'hover',

      })
      // t.onClick = (e) => { tooltip.hide };
    }

  }, [])

  function removeActiveFromElementClassListById(elementId) {
    if (elementId == "") {
      return;
    }
    document.getElementById(elementId)?.classList.remove('active');
  }

  function addActiveToElementClassListById(elementId) {
    document.getElementById(elementId)?.classList.add('active');

  }

  function onNavItemClicked(e) {
    const element = e.currentTarget;
    // remove active from the class list of the previous nav-item 
    removeActiveFromElementClassListById(activeNavItemId);
    // add active to the class list of current nav-item 
    addActiveToElementClassListById(element.id);
    // set the current active nav-item id
    setActiveNavItemId(element.id);

  }

  return (
    <>
      <div className="nav nav-pills d-flex justify-content-between vw-100">
        <div className="nav-item"  >
          <Link className="nav-link active" id="home" to="/"
            onClick={onNavItemClicked}
          >
            Home
          </Link>
        </div>
        <div className="d-flex ">
          <ul className="nav justify-content-end">
            <li className="nav-item" data-toggle="tooltip" data-placement="bottom" data-title="Create an account">
              <Link className="nav-link" id="createAccount" to="createaccount"
                onClick={onNavItemClicked}
              >Create Account
              </Link>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="bottom"
              data-title="Deposit money to your account">
              <Link className="nav-link" id="deposit" to="deposit"
                onClick={onNavItemClicked}
              >Deposit</Link>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="bottom"
              data-title="Withdraw money from your account">
              <Link className="nav-link" id="withdraw" to="withdraw"
                onClick={onNavItemClicked}
              >Withdraw</Link>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="bottom"
              data-title="View all the bank users data">
              <Link className="nav-link" id="alldata" to="alldata"
                onClick={onNavItemClicked}
              >All Data</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
