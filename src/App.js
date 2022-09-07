import React from "react";
import WelcomeNavbar from "./Components/WelcomeNavbar/WelcomeNavbar";
import EmailNavbar from "./Components/EmailNavbar/EmailNavbar";
import HomeNavbar from "./Components/HomeNavbar/HomeNavbar";
import ProtectInsurance from "./Components/ProtectInsurance/ProtectInsurance";
import InsuranceProduct from "./Components/InsuranceProduct/InsuranceProduct";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import ContactUs from "./Components/ContactUs/ContactUs";
function App() {
  return (
    <div>
      <WelcomeNavbar />
      <EmailNavbar />
      <HomeNavbar />
      <ProtectInsurance />
      <InsuranceProduct />
      <WhoWeAre />
      <ContactUs />
    </div>
  );
}

export default App;
