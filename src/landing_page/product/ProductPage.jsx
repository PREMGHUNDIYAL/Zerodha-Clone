import React from "react";
import Hero from "./Hero";
import LeftSection from "./Leftsection"; // Fixed case-sensitive import
import RightSection from "./Rightsection"; // Fixed case-sensitive import
import Universe from "./Universe"; // Fixed case-sensitive import

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/media/kite.png" // Ensure correct image path
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        
        tryDemo="#" // Avoid empty href
        learnMore="#"
        googlePlay="/media/googleplay.svg" // Ensure correct image path
        appStore="/media/appstore.svg" // Ensure correct image path
      />
      <RightSection />
      <LeftSection
        imageURL="/media/coin.png" // Ensure correct image path
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
        
        tryDemo="#" // Avoid empty href
        learnMore="#"
        googlePlay="/media/googleplay.svg" // Ensure correct image path
        appStore="/media/appstore.svg" // Ensure correct image path
      />
      <RightSection />
      <LeftSection
        imageURL="/media/varsity.png" // Ensure correct image path
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.."
        
        tryDemo="#" // Avoid empty href
        learnMore="#"
        googlePlay="/media/googleplay.svg" // Ensure correct image path
        appStore="/media/appstore.svg" // Ensure correct image path
      />


      <Universe />
    </>
  );
}

export default PricingPage;
