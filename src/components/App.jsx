import React from 'react';
import Page from './Page';
import NavbarPrimary from './NavbarPrimary';
import NavbarSecondary from './NavbarSecondary';
import AboutIntro from './AboutIntro';

const App = () => (
  <Page>
    <NavbarPrimary />
    <NavbarSecondary />
    <AboutIntro />
  </Page>
);

export default App;
