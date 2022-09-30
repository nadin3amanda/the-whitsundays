import React from "react";
import Navbar from "./Components/navbar";
import Banner from "./Components/banner";
import MiddleBanner from "./Components/middle-banner";
import BottomBanner from "./Components/bottom-banner";
import Footer from "./Components/footer";


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <MiddleBanner />
      <BottomBanner />
      <Footer />
    </div>
  );
}

export default App;
