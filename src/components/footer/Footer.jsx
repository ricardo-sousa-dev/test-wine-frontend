import React from 'react';
import { Link } from 'react-router-dom';
import '../footer/css/Footer.css';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';

function SimpleFooter() {
  return (
    <div className="simple-footer">
      <div className="developer">
        Developed by Ricardo Sousa
      </div>
      <div className="social-media">
        <a
          href="https://github.com/ricardo-sousa-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="link-github"
        >
          <FaGithub className="icon-social-media"/>
        </a>
        <a
          href="https://www.linkedin.com/in/rwmsousa/"
          target='_blank'
          rel="noopener noreferrer"
          className="link-linkedin"
        >
          <GrLinkedin className="icon-social-media"/>
        </a>
      </div>
    </div>
  );
}

export default SimpleFooter;