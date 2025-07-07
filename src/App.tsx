import { Layout } from './components/Layout';
import { AboutUs } from './components/sections/AboutUs';
import { Brands } from './components/sections/Brands';
import { FAQ } from './components/sections/FAQ';
import { Hero } from './components/sections/Hero';
import { Pricing } from './components/sections/Pricing';
import { Services } from './components/sections/Services';

function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands />
      <Services />
			<AboutUs />
			<Pricing />
			<FAQ />
    </Layout>
  );
}

export default App;
