import type { NextPage } from 'next';
import Footer from '../shared/Footer';
import HomeNavbar from '../shared/HomeNavbar';

const LandingPage: NextPage = ({ children }) => {
	return (
    <>
      <HomeNavbar />
        { children }
      <Footer />
    </>
	);
};

export default LandingPage;
