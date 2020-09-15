import React from 'react'
import HeroSection from '../../HeroSection'
import AboutSection from '../../AboutSection';
import { homeObjOne, homeObjTwo, homeObjThree, footer } from './Data'
import ReviewSection from '../../ReviewSection';
import ServiceSection from '../../ServiceSection';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <>
        <HeroSection {...homeObjOne} />
        <AboutSection {...homeObjTwo} />
        <ReviewSection {...homeObjThree} />
        <ServiceSection />
        <Footer {...footer} />
        </>
    );
}

export default Home
