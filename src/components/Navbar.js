import React from 'react';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.about}</a>
            </li>
            {/* Add more navigation links here */}
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="fab fa-facebook"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="fab fa-twitter"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="fab fa-instagram"></i></a>
            </li>
            {/* Add more social media icons or links here */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
