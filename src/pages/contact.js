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
                        <div className="book">
                            <div className="book__form">
                                <form name="contact" method="POST" data-netlify="true" className="form">

                                    <div className="u-center-text u-margin-bottom-big">
                                        <h2 className="heading-secondary">
                                            Send us a message!
                                        </h2>
                                    </div>
                            
                                    <div className="form__group">
                                        <input type="text" className="form__input" placeholder="First Name" id="name" required/>
                                        <label for="name" className="form__label">First Name</label>
                                    </div>

                                    <div className="form__group">
                                        <input type="text" className="form__input" placeholder="Last Name" id="name" required/>
                                        <label for="name" className="form__label">First Name</label>
                                    </div>

                                    <div className="form__group">
                                        <input type="email" className="form__input" placeholder="Email Address" id="email" required/>
                                        <label for="email" className="form__label">Email Address</label>
                                    </div>

                                    <div className="form__group">
                                        <input type="tel" className="form__input" placeholder="Phone Number" id="tel" required/>
                                        <label for="tel" className="form__label">Phone Number</label>
                                    </div>

                                    <div className="form__group">
                                        <textarea 
                                            name="message" 
                                            placeholder="Type your message here" 
                                            className="form__input form__input-message" 
                                            id="message" 
                                            required
                                        />
                                        <label for="message" className="form__label">Message</label>
                                    </div>

                                    <div className="form__group">
                                        <button className="btn btn--red">Submit &rarr;</button>
                                    </div>

                                </form>
                            </div>
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