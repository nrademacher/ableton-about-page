import React from 'react';
import Page from './Page';
import NavbarPrimary from './NavbarPrimary';
import NavbarSecondary from './NavbarSecondary';
import AboutIntro from './AboutIntro';
import CollageOne from './CollageOne';
import AboutMain from './AboutMain';

const App = () => (
  <Page>
    <NavbarPrimary />
    <NavbarSecondary />
    <AboutIntro />
    <CollageOne />
    <AboutMain />
  </Page>
);

export default App;
