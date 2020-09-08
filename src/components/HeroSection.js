import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './HeroSection.css'


function HeroSection({
    lightBg, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart, altLogo, logoBg
}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col">
                        <img src={logoBg} alt={altLogo} className="home__hero-logoBg" />
                            <div className="home__hero-text-wrapper">
                                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                    <Link to="/tienda">
                                        <Button buttonSize='btn--wide'>{buttonLabel}</Button>
                                    </Link>
                            </div>
                        </div>
                        <div className="col">
                            <img src={img} alt={alt} className="home__hero-img" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HeroSection
