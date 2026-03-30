import HeroSection from "../components/Hero";
import About from "../components/About.jsx";
import Solutions from "../components/Solutions.jsx";
import LogisticsSection from "../components/LogisticsSection.jsx";
import ProductShowcaseData from "../components/Product/productShowcaseData";
import ViewAllCategories from "../components/viewAllCategoriesData";

import ContactSection from "../components/ContactSection.jsx";
import Faq from "../components/Faq";
import BrandCarousel from "../components/BrandCarousel";
import { row1Brands } from "../../constants/brandCarousel";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Solutions />
      <LogisticsSection />
      <BrandCarousel title="BRANDS WE WORK WITH" logos={row1Brands} />
      <ViewAllCategories />
      <ProductShowcaseData page={false} />
      <Faq />
    </>
  );
};

export default HomePage;
