import React from "react";
import WelcomeNavbar from "./Components/WelcomeNavbar/WelcomeNavbar";
import EmailNavbar from "./Components/EmailNavbar/EmailNavbar";
import HomeNavbar from "./Components/HomeNavbar/HomeNavbar";
import ProtectInsurance from "./Components/ProtectInsurance/ProtectInsurance";
import InsuranceProduct from "./Components/InsuranceProduct/InsuranceProduct";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import ContactUs from "./Components/ContactUs/ContactUs";
import KnowFact from "./Components/KnowFact/KnowFact";
import Slider from "./Components/Slider/Slider";
import LatestNews from "./Components/LatestNews/LatestNews";
import Collections from "./Components/Collections";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="overflow-hidden">
      <WelcomeNavbar />
      <EmailNavbar />
      <HomeNavbar />
      <ProtectInsurance />
      <InsuranceProduct />
      <WhoWeAre />
      <ContactUs />
      <KnowFact />
      <Slider />
      <LatestNews />
      <Collections />
      <Footer />
    </div>
  );
}

export default App;
