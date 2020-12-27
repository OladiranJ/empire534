// Imports

import React from 'react'
import { Link }         from 'react-router-dom'



// ----------------------------------------------------------------------------------------------------------------------------------

// Footer

const Footer = () => {

    return (

        <footer className="footer">
            <div className="footer__text-box">
                <img
                    src={require("../../images/empire534-logo.png")}
                    alt="Empire534 Footer Logo"
                    className="footer-primary"
                />
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><Link to="/contact" className="footer__link">Contact Us</Link></li>
                            <li className="footer__item"><Link to="/privacy" className="footer__link">Privacy Policy</Link></li>
                            <li className="footer__item"><Link to="/training" className="footer__link">Training</Link></li>
                            <li className="footer__item"><Link to="/" className="footer__link">Streaming</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Copyright &copy; 2020 Empire534 LLC. All Rights Reserved.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__socials">
                        <ul className="footer__socials-list">
                            <li className="footer__socials-item">
                                <Link to="/" className="footer__socials-link">
                                    <img 
                                        src={require("../../images/colorinsta.png")} 
                                        alt="Empire534 Instagram" 
                                        className="footer__socials-icon"
                                    />
                                </Link>
                            </li>
                            <li className="footer__socials-item">
                                <Link to="/" className="footer__socials-link">
                                    <img 
                                        src={require("../../images/colorfacebook.png")} 
                                        alt="Empire534 Facebook" 
                                        className="footer__socials-icon"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )

}



// ----------------------------------------------------------------------------------------------------------------------------------

// Exports

export default Footer