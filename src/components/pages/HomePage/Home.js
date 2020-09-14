import React from 'react'
import HeroSection from '../../HeroSection'
import AboutSection from '../../AboutSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
import ReviewSection from '../../ReviewSection';
import ServiceSection from '../../ServiceSection';

function Home() {
    return (
        <>
        <HeroSection {...homeObjOne} />
        <AboutSection {...homeObjTwo} />
        <ReviewSection {...homeObjThree} />
        <ServiceSection />
        </>
    );
}

export default Home
