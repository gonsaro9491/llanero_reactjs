import React from 'react';
import './ServiceSection.css';
import { AiOutlineFieldTime } from 'react-icons/ai'
import { IoMdAirplane } from 'react-icons/io'
import { RiMotorbikeFill } from 'react-icons/ri'
import { FaShoppingBag } from 'react-icons/fa'


function ServiceSection({
    
}) {
    return (
        <>
        <div className='service__section'>
            <div className='header-service'>
                <h1 className='service__heading'>Nuestros servicios</h1>
                <div className='border-service'></div>
            </div>    
            <div className='service__wrapper'>
                <div className='service__container'>
                    <div className='service__container-card'>
                        <div className='service__container-cardInfo'>
                            <div className='icon-service'><AiOutlineFieldTime/></div>
                            <h4>Entregas a tiempo</h4>
                            <p>Todos nuestros productos llegan sin demora.</p>
                        </div>
                    </div>
                    <div className='service__container-card'>
                        <div className='service__container-cardInfo'>
                            <div className='icon-service'><IoMdAirplane/></div>
                            <h4>Envíos a todo el mundo</h4>
                            <p>Todos los artículos de nuestra tienda tiene envío completamente gratis.</p>
                        </div>
                    </div>
                    <div className='service__container-card'>
                        <div className='service__container-cardInfo'>
                            <div className='icon-service'><RiMotorbikeFill/></div>
                            <h4>Garantía con tu compra </h4>
                            <p>Ofrecemos reembolso como garantía o reenvió del producto en caso de no haber llegado a su destino.</p>
                        </div>
                    </div>
                    <div className='service__container-card'>
                        <div className='service__container-cardInfo'>
                            <div className='icon-service'><FaShoppingBag/></div>
                            <h4>Buena atención</h4>
                            <p>Todos nuestros compadores están satisfechos. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceSection
