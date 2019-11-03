import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1>
          <Link to="/" className="title">
            TODO List
          </Link>
        </h1>
        <h2 className="subtitle">This is a project to manage your tasks with bulma with react.</h2>
      </div>
    </div>
  </section>
);

export default Header;
