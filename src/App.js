import React from "react";
import Footer from "./components/footer/Footer";

// importing components....
import Header from "./components/header/Header";
import NavBar from "./components/header/NavBar";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div>
      <div style={{position:'sticky', top:'0px', zIndex:2}}>
          <Header />
          <NavBar />
        </div>
      <Home />
      <Footer/>
    </div>
  );
};

export default App;
