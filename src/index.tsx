import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import pack from '../package.json';
import { container } from './container';
import { setUpStore } from './container/store';
import { register as registerServiceWorker } from './serviceWorkerRegistration';
import { Welcome } from './welcome/Welcome';
import './index.scss';

const store = setUpStore(container);
const { App, ScrollToTop, ErrorHandler, appUpdateAvailable } = container;

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')!).render(
  // eslint-disable-line @typescript-eslint/no-non-null-assertion
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Provider store={store}>
      <BrowserRouter basename={pack.homepage}>
        <ErrorHandler>
          <ScrollToTop>
            <SignedIn>
              <App />
            </SignedIn>
            <SignedOut>
              <Welcome />
            </SignedOut>
          </ScrollToTop>
        </ErrorHandler>
      </BrowserRouter>
    </Provider>
  </ClerkProvider>,
);

// Learn more about service workers: https://cra.link/PWA
registerServiceWorker({
  onUpdate() {
    store.dispatch(appUpdateAvailable());
  },
});
