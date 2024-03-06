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
    <div>
      {/* write 3 cards to show case the features */}
      <div>
        <h2>Feature 1</h2>
        <p>
          This is the first feature of the application. It allows you to do
          something really cool.
        </p>
      </div>
      <div>
        <h2>Feature 2</h2>
        <p>
          This is the second feature of the application. It allows you to do
          something really cool.
        </p>
      </div>
      <div>
        <h2>Feature 3</h2>
        <p>
          This is the third feature of the application. It allows you to do
          something really cool.
        </p>
      </div>
    </div>
  </main>
);
