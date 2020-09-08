import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaRegUser } from 'react-icons/fa';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Button } from './Button';
import './Navbar.css';
import { ReactComponent as LogoLlanero } from "../assets/logoLlanero.svg";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () =>{
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <LogoLlanero height={80} />
                </Link>
                <div className="menu-icon fa-bars" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links border-bottom" onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tienda" className="nav-links border-bottom" onClick={closeMobileMenu}>
                            Tienda
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/taller" className="nav-links border-bottom" onClick={closeMobileMenu}>
                            Taller
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tattoo" className="nav-links border-bottom" onClick={closeMobileMenu}>
                            Tattoo Studio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacto" className="nav-links border-bottom" onClick={closeMobileMenu}>
                            Contacto
                        </Link>
                    </li>
                    <div className="navbar-icon-user">
                    <li className="nav-btn nav-icon">
                        <FiSearch />
                    </li>
                    <li className="nav-btn nav-icon">
                        <FaRegUser />
                    </li>
                    <li className="nav-btn nav-icon">
                        <FiShoppingCart />
                    </li>
                    {/* <li className="nav-btn">
                        {button ? (
                            <Link to='/' className="btn-link">
                                <Button buttonStyle='btn--outline'>Iniciar Sesion</Button>
                            </Link>
                        ) : (
                            <Link to='/' className="btn-link">
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobible'>Iniciar Sesion</Button>
                            </Link>
                        )}
                    </li> */}
                    </div>
                </ul>

            </div>
        </div>  
        </>
    )
}

export default Navbar
