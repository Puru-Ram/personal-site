import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me1.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Purushotham Ram</h2>
        <p>
          <a href="mailto:lt.pururam@gmail.com">Chandan@cparam.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> Hi, I&apos;m Purushotham. I am a B.E Graduate in Industrial Engineering & Management from Bengaluru. Currently, I
        am employed as Technical Content Specialist II at <a href="https://www.tti.com/content/ttiinc/en.html">TTI.Inc</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Purushotham <Link to="/">cparam.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
