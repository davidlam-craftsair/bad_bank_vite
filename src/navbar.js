import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="d-flex" style={{ background: "red" }} >
        <nav className="navbar navbar-expand bg-body-tertiary" style={{ alignItems: "center", justifyContent: "center" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <p >Home</p>
            </a>
            <button className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <ul className="navbar-nav mb-2">
              <li className="d-flex nav-item">
                <Link className="nav-link" to="pay">
                  <p>Pay</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="transfer">
                  <p>Transfer</p>
                </Link>
              </li>
              <li className="d-flex nav-item">
                <Link className="nav-link" to="login">Login</Link>
              </li>
              <li className="d-flex nav-item">
                <Link className="nav-link" to="createaccount">Create Account</Link>
              </li>
            </ul>
          </div>
        </nav >

      </div>
    </>
  );
}
