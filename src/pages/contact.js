// Imports

import React    from 'react';
import Footer   from '../components/layouts/Footer';



// ----------------------------------------------------------------------------------------------------------------------------------

// Contact Page

const Contact = () => {

    return (

        <div>
            <header className="header header__contact">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary__sub">
                            Contact Us
                        </span>
                    </h1>
                </div>
            </header>

            <main>
                <section className="section-contact-form">
                    <div className="row">
                        <div class="u-center-text u-margin-bottom-big">
                            <h2 class="heading-secondary">
                                Send us a message!
                            </h2>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
        

    )

}



// ----------------------------------------------------------------------------------------------------------------------------------

// Exports

export default Contact