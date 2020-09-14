import React from 'react';
import './ReviewSection.css';
import { BiUserCircle } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import {Link} from 'react-router-dom';
import { Button } from './Button';

function ReviewSection({
    buttonReview
}) {
    return (
        <>
        <div className='review__section'>
            <div className='header-review'>
                <h1 className='review__heading'>Reseñas de clientes</h1>
                <div className='border-review'></div>
            </div>    
            <div className='review__wrapper'>
                <div className='review__container'>
                    <div className='review__container-card'>
                        <div className='review__container-cardInfo'>
                            <div className='icon-review'><BiUserCircle/></div>
                            <h3>Efraín</h3>
                            <p>Excelente trato y respuesta. envio rapido. recomendable al 100%.</p>
                        </div>
                    </div>
                    <div className='review__container-card'>
                        <div className='review__container-cardInfo'>
                            <div className='icon-review'><BiUserCircle/></div>
                            <h3>Carlos Rafael</h3>
                            <p>Buen producto y excelente atención por parte del vendedor, recomiendo ampliamente tanto al vendedor como su producto.</p>
                        </div>
                    </div>
                    <div className='review__container-card'>
                        <div className='review__container-cardInfo'>
                            <div className='icon-review'><BiUserCircle/></div>
                            <h3>Jose De Jesus</h3>
                            <p>Como siempre el vendedor es garantía.</p>
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <Button buttonStyle='btn--word' buttonSize='btn--wide'>{buttonReview} <BsArrowRight className='arrow' /></Button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default ReviewSection
