import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
        />
        <div className="home__row">
          <Product
            title="The Lean startup"
            price={20.0}
            rating={4}
            image="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Lean_Startup.png/220px-Lean_Startup.png"
          />
          <Product
            title="Amazon Basics iphone Charger"
            price={17.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/812coPwnITL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            title="Selfie Ring Light with 50'' Extendable Tripod Stand           "
            price={49.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61nUK64JBPL._AC_SL1000_.jpg"
          />
          <Product
            title="Dexnor iPhone 11 Pro Max Case with Screen Protector Slim Clear"
            price={15.9}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71NLLCkxpHL._AC_SL1200_.jpg"
          />
          <Product
            title="Kasa Spot Indoor Camera by TP-Link, 1080p HD Smart Home"
            price={41.85}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61qP-LCNVNL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            title="TCL 43S425 43 Inch 4K Ultra HD Smart Roku LED TV"
            price={400.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71tN5cFBvFL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
