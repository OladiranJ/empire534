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
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__item"><a href="" class="footer__link">Contact Us</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Privacy Policy</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Training</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Streaming</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-1-of-2">
                    <p className="footer__copyright">
                        Copyright &copy; 2020 Empire534 LLC. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>

    )

}



// ----------------------------------------------------------------------------------------------------------------------------------

// Exports

export default Footer