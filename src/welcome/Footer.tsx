import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

export const Footer = () => (
  <footer className="ode_footer">
    <ul>
      <li>
        <a href="https://my.educationevidence.io/privacy-policy">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="https://opendeved.net/about/">Who We Are</a>
      </li>
      <li>
        <a href="https://opendeved.net/contact-us/">Contact Us</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="https://opendeved.net/">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/opendeved">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/opendeved">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
    <p>© 2024 Opendeved, All rights reserved.</p>
  </footer>
);
