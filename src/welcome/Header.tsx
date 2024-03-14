import { SignInButton } from '@clerk/clerk-react';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import './styles.scss';

export const Header = () => (
  <>
    <Navbar
      color="light"
      container
      style={{ position: 'fixed', width: '100%', top: '0' }}
    >
      <NavbarBrand href="/">
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://my.educationevidence.io/favicon.ico"
            alt="logo"
            width={32}
            height={32}
          />
          &nbsp; Shlink
        </p>
      </NavbarBrand>
      <SignInButton>
        <Button style={{ backgroundColor: '#E78123', border: 'none' }}>
          Sign In
        </Button>
      </SignInButton>
    </Navbar>
  </>
);
