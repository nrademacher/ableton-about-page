import React from 'react';
import Page from './Page';
import NavbarPrimary from './NavbarPrimary';
import NavbarSecondary from './NavbarSecondary';
import AboutIntro from './AboutIntro';
import CollageOne from './CollageOne';
import AboutMainOne from './AboutMainOne';
import CollageTwo from './CollageTwo';
import AboutMainTwo from './AboutMainTwo';

const App = () => (
  <Page>
    <NavbarPrimary />
    <NavbarSecondary />
    <AboutIntro />
    <CollageOne />
    <AboutMainOne />
    <CollageTwo />
    <AboutMainTwo />
  </Page>
);

export default App;
