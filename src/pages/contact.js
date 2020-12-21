// Imports

import React, { useState }    from 'react';
import Footer   from '../components/layouts/Footer';



// ----------------------------------------------------------------------------------------------------------------------------------

// Contact Page

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [telNumber, setTelNumber] = useState('');
    const [message, setMessage] = useState('');

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      };

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setTelNumber('');
        setMessage('');
    };

    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", firstName, lastName, email, telNumber, message })
        })
          .then(() => {
            clearForm();
            alert("Success!");
          })
          .catch(error => alert(error));
  
        e.preventDefault();
      };

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
                                <form data-netlify="true" name="contact" method="post" className="form" onSubmit={handleSubmit}>
                                    <input type="hidden" name="form-name" value="contact"/>

                                    <div className="u-center-text u-margin-bottom-big">
                                        <h2 className="heading-secondary">
                                            Send us a message!
                                        </h2>
                                    </div>
                            
                                    <div className="form__group">
                                        <input type="text" className="form__input" placeholder="First Name" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                                        <label htmlFor="name" className="form__label">First Name</label>
                                    </div>

                                    <div className="form__group">
                                        <input type="text" className="form__input" placeholder="Last Name" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                                        <label htmlFor="name" className="form__label">Last Name</label>
                                    </div>

                                    <div className="form__group">
                                        <input type="email" className="form__input" placeholder="Email Address" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                        <label htmlFor="email" className="form__label">Email Address</label>
                                    </div>

                                    <div className="form__group">
                                        <input type="tel" className="form__input" placeholder="Phone Number" id="tel" value={telNumber} onChange={(e) => setTelNumber(e.target.value)} required/>
                                        <label htmlFor="tel" className="form__label">Phone Number</label>
                                    </div>

                                    <div className="form__group">
                                        <textarea 
                                            name="message" 
                                            placeholder="Type your message here" 
                                            className="form__input form__input-message" 
                                            id="message" 
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="message" className="form__label">Message</label>
                                    </div>

                                    <div className="form__group">
                                        <input type="submit" className="btn btn--orange" value="Submit &rarr;"/>
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