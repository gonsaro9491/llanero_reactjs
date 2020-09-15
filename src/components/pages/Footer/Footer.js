import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
    RiFacebookFill,
    RiInstagramLine,
} from 'react-icons/ri';
import {FiMail} from 'react-icons/fi'


function Footer({
    llaneroFooter, llaneroAlt, urbanFooter, urbanAlt, mercadoLibre
}) {
return (
    <div className='footer-container'>
    <div className='divider'></div>
    <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div>
                <Link to='/' 
                className='llanero-footer'
                >
                    <img src={llaneroFooter} alt={llaneroAlt} className="" />
                </Link>
            </div>
        
        </div>
        <div className='footer-link-wrapper'>
            <p>Pagos</p>
            <p className='footer-link-description'>Accede a nuestra tienda por Mercado Libre.</p>
            <Link className='mercadoLibre'
            to='/'
            target='_blank'
            >
            <img src={mercadoLibre} alt='Logo de Mercado Libre' />
            </Link>
        </div>
        <div className='footer-link-wrapper'>
            <p>Contactos</p>
            <div className='mail-Logo'>
            <p className='footer-link-description'><FiMail className='mail-Logo' /> <a href="mailto:llaneroventas@gmail.com">llaneroventas@gmail.com</a></p>
            </div>
            <p className='title-social'>Nuestras redes</p>
            <div className='social-icons'>
                <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Facebook'
                >
                <RiFacebookFill />
                </Link>
                <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Instagram'
                >
                <RiInstagramLine />
                </Link>
                </div>
        
        </div>
        <div className='footer-link-wrapper'>
            <Link to='/' 
            className='urbancustom-footer'
            >
                <img src={urbanFooter} alt={urbanAlt} className="" />
            </Link>
        
        </div>
    </div>
    
        <div className='divider'></div>
        <small className='website-rights'>Gonzalo Sanchez & Rodrigo Urban - 2020</small>
    </div>
);
}

export default Footer;