import type { NextPage } from 'next';
import InventorsHero from '../src/components/LandingPage/InventorsHero';
import InventorsMobile from '../src/components/LandingPage/InventorsMobile';

const Home: NextPage = () => {
	return (
		<div>
      <InventorsHero />
      <InventorsMobile />
		</div>
	);
};

export default Home;
