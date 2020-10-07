// Imports

import React from 'react'



// ----------------------------------------------------------------------------------------------------------------------------------

// Footer

const Footer = () => {

    return (

        <footer className="footer">
            <div className="footer__text-box">
                <h2 className="footer-primary">Empire534</h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="/contact" className="footer__link">Contact Us</a></li>
                            <li className="footer__item"><a href="/privacy" className="footer__link">Privacy Policy</a></li>
                            <li className="footer__item"><a href="/training" className="footer__link">Training</a></li>
                            <li className="footer__item"><a href="/" className="footer__link">Streaming</a></li>
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
                                <a href="/" className="footer__socials-link">
                                    <img 
                                        src={require("../../images/colorinsta.png")} 
                                        alt="Empire534 Instagram" 
                                        className="footer__socials-icon"
                                    />
                                </a>
                            </li>
                            <li className="footer__socials-item">
                                <a href="/" className="footer__socials-link">
                                    <img 
                                        src={require("../../images/colorfacebook.png")} 
                                        alt="Empire534 Facebook" 
                                        className="footer__socials-icon"
                                    />
                                </a>
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