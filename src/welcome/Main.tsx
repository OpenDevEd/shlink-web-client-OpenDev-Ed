import { SignInButton } from '@clerk/clerk-react';
import { Button } from 'reactstrap';
import './styles.scss';

export const Main = () => (
  <main className="ode_main">
    <h1>Welcome to OpenDevEd Shlink</h1>
    <p>
      This is the OpenDevEd Shlink application. It is a URL shortener that
      allows you to create short URLs and share them with others.
    </p>
    <SignInButton>
      <Button style={{ backgroundColor: '#E78123', border: 'none' }}>
        Get started
      </Button>
    </SignInButton>
    <a href="https://opendeved.net/about/">About OpenDevEd &rarr;</a>
    <div className="features">
      {/* write 3 cards to show case the features */}
      <ul className="features_list">
        <li>
          <h2>Web client</h2>
          <p>
            Shlink web client is the official Progressive Web Application for
            Shlink.
          </p>
        </li>
        <li>
          <h2>Beautiful UI</h2>
          <p>
            It provides a beautiful UI from which you can handle your short
            URLs, create new ones or see very detailed and customizable visits
            stats.
          </p>
        </li>
        <li>
          <h2>Same organization as slink</h2>
          <p>
            It is part of the same organization and usually supports all Shlink
            features, soon after they are released.
          </p>
        </li>
      </ul>
    </div>
  </main>
);
