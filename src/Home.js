import React from "react";
import "./Home.css";
import Product from "./Product";
import poster from './Amazon-pos.png';
import oneplus from './Product images/oneplus.jpg';
import hplap from './Product images/hplap.jpg';
import shoe from './Product images/shoe.jpg';
import speaker from './Product images/speaker.jpg';
import headset from './Product images/jblheadset.jpg';
import tv from './Product images/tv.jpg';

function Home() {
  return ( 
    <div className="home">
      <div className="home__container">
        <img
          className="home_image"
          src={poster}
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="HP Envy x360 Convertible Touchscreen 13.3-inch FHD Laptop (3rd Gen Ryzen 5) "
            price={74990}
            rating={4}
            image={hplap}
          />
          <Product
            id="49538094"
            title="Adidas Men's Vs Pace Skateboarding Shoes "
            price={2400}
            rating={5}
            image={shoe}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)"
            price={29999}
            rating={4}
            image={oneplus}
          />
          <Product
            id="23445930"
            title="JBL Flip 4 Portable Wireless Speaker with Powerful Bass & Mic (Squad)  "
            price={6999}
            rating={5}
            image={speaker}
          />
          <Product
            id="3254354345"
            title="JBL T460BT Extra Bass Wireless On-Ear Headphones with 11 Hours Playtime & Mic (Blue)  "
            price={2799}
            rating={4}
            image={headset}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Panasonic 147 cm (58 inches) 4K Ultra HD Certified Android Smart LED TV TH-58HX450DX (Black) (2020 Model) "
            price={45990}
            rating={4}
            image={tv}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
