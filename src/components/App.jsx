import React, { useState } from 'react';
import Page from './Page';
import NavbarPrimary from './NavbarPrimary';
import NavbarSecondary from './NavbarSecondary';
import AboutIntro from './AboutIntro';
import CollageOne from './CollageOne';
import AboutMainOne from './AboutMainOne';
import CollageTwo from './CollageTwo';
import AboutMainTwo from './AboutMainTwo';
import CollageThree from './CollageThree';
import AboutJobs from './AboutJobs';
import Footer from './Footer';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Page>
      <NavbarPrimary menuIsOpen={showMenu} toggleMenu={() => setShowMenu((prev) => !prev)} />
      <NavbarSecondary />
      <AboutIntro />
      <CollageOne />
      <AboutMainOne />
      <CollageTwo />
      <AboutMainTwo />
      <CollageThree />
      <AboutJobs />
      <Footer />
    </Page>
  );
};

export default App;
