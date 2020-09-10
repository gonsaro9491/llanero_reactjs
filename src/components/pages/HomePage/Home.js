import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne } from './Data'
import { homeObjTwo } from './Data'
import AboutSection from '../../AboutSection';

function Home() {
    return (
        <>
        <HeroSection {...homeObjOne} />
        <AboutSection {...homeObjTwo} />
        </>
    );
}

export default Home
