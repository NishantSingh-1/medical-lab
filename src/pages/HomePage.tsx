import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularTests from "../components/Popular Packages/PopularTests";
import WhyChooseUs from "../components/WhyChooseUs";

import Footer from "../components/Footer";
import MostBookedCheckups from "../components/MostBookTest/MostBookedCheckups";
import HowItWorks from "../components/work/HowItWorks";
import TrustCarousel from "../components/Trust/TrustCarousel";
import VitalOrgans from "../components/VitalOrgans";
import PromotionalBanner from "../components/PromotionalBanner";
import SafeCollectionBanner from "../components/SafeCollectionBanner";
import HealthBlogs from "../components/blogs/HealthBlogs";
import CareEveryGeneration from "../components/CareEveryGeneration";
import SmartReportSection from "../components/SmartReportSection";

import Banner from "../components/production/Banner";
import WomensHealthSection from "../components/WomenHealthPackage/WomensHealthSection";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PromotionalBanner />
      <PopularTests />
      <VitalOrgans />
      <WomensHealthSection />
      <SafeCollectionBanner />
      <MostBookedCheckups />
      <CareEveryGeneration />
      <WhyChooseUs />
      <HowItWorks />
      <SmartReportSection />
      <Banner />
      <HealthBlogs />
      <TrustCarousel />
      <Footer />
    </div>
  );
};

export default HomePage;