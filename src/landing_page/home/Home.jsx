import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education'
import OpenAcc from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';


function Home() {
    return (
       <>
       
       <Hero></Hero>
       <Awards></Awards>
       <Stats></Stats>
       <Pricing></Pricing>
       <Education></Education>
       <OpenAcc></OpenAcc>
       

       
       </>
     );
}

export default Home;