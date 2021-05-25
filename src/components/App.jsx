import React from 'react';
import Page from './Page';
import NavbarPrimary from './NavbarPrimary';
import NavbarSecondary from './NavbarSecondary';
import AboutIntro from './AboutIntro';
import CollageOne from './CollageOne';

const App = () => (
  <Page>
    <NavbarPrimary />
    <NavbarSecondary />
    <AboutIntro />
    <CollageOne />
  </Page>
);

export default App;
