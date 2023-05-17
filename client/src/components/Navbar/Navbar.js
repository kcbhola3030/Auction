import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
        <nav className="navbar  navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="#" to = "/auction">Auction</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text">
      <Link class="navbar-brand" to = "/login">Login</Link>
      <Link class="navbar-brand" to = "/signup">SignUp</Link>
      </span>
    </div>
  </div>
</nav>
    </>
  )
}
