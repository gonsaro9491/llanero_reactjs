import React from 'react'
import HeroSection from '../../HeroSection'
import AboutSection from '../../AboutSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'
import ReviewSection from '../../ReviewSection';

function Home() {
    return (
        <>
        <HeroSection {...homeObjOne} />
        <AboutSection {...homeObjTwo} />
        <ReviewSection {...homeObjThree} />
        </>
    );
}

export default Home
