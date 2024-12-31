import '../styles/Home.css';
import { GiGrowth } from "react-icons/gi";
import features from '../data/features';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import HowItWorks from './HowItWorks';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import PricingSection from './PricingSection';
import Footer from './Footer';
const Home = ()=>{
    
return(
<>
<div className="MainPage">
<HeroSection />
<FeatureSection />
<HowItWorks />
<PricingSection />
<Footer />
</div>
</>
)
}
export default Home;



