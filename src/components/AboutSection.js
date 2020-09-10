import React from 'react';
import './AboutSection.css'


function AboutSection({
    lightBg, lightText, lightTextDesc, headline, description1, description2, description3, img, alt, imgStart
}) {
    return (
        <>
            <div className={lightBg ? 'home__about-section' : 'home__about-section darkBg'}>
                <div className="container">
                    <div className="row-about home__about-row"
                    style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col-about">
                            <div className="home__about-img-wrapper">
                            <img src={img} alt={alt} className="home__about-img" />
                            </div>
                        </div>

                        <div className="col-about">
                            <div className="home__about-text-wrapper">
                                
                                    <h1 className={lightText ? 'about-heading' : 'about-heading dark'}>{headline}</h1>
                                    <div className="border"></div>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>{description1}</p>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>{description2}</p>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>{description3}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AboutSection
