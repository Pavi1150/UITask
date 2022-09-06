import React from "react";
import WelcomeNavbar from "./Components/WelcomeNavbar/WelcomeNavbar";
import EmailNavbar from "./Components/EmailNavbar/EmailNavbar";
import HomeNavbar from "./Components/HomeNavbar/HomeNavbar";
import ProtectInsurance from "./Components/ProtectInsurance/ProtectInsurance";
function App() {
  return (
    <div>
      <WelcomeNavbar />
      <EmailNavbar />
      <HomeNavbar />
      <ProtectInsurance />
    </div>
  );
}

export default App;
