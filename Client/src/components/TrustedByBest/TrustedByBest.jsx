import React from "react";

import  styles from "./TrustedByBest.module.css";

import boxDarkIcon from "/images/brands/box-dark.svg";
import eventbriteIcon from "/images/brands/eventbrite-dark.svg";
import nasdaqIcon from "/images/brands/nasdaq-dark.svg";
import tcsIcon from "/images/brands/tcs-dark.svg";
import netappIcon from "/images/brands/netapp-dark.svg";
import volkswagenIcon from "/images/brands/volkswagen-dark.svg";

const TrustedByBest = () => {
  let brands = [
    boxDarkIcon,
    eventbriteIcon,
    nasdaqIcon,
    tcsIcon,
    netappIcon,
    volkswagenIcon,
  ];

  return (
    <div className={ styles.outerDiv}>
      <div className={ styles.innerDiv}>
        <h2 className={ styles.ttl}>Trusted by over 15,000 companies and millions of learners around the world</h2>
        <div className={ styles.brands}>
          {brands?.map((item, id) => {
            return (
              <img key={id} src={item} alt="brand icon" className={ styles.img} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrustedByBest;