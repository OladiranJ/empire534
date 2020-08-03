// Imports

import React    from 'react';
import Footer   from '../components/layouts/Footer';



// ----------------------------------------------------------------------------------------------------------------------------------

// Testimonials Page

const Testimonials = () => {

    return (
        <div>
            <header className="header header__testimonials">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary__sub">
                            Testimonials
                        </span>
                    </h1>
                </div>
            </header>

            <main>
                <section className="section-testimonials">
                    <div class="u-center-text u-margin-bottom-big">
                        <h2 class="heading-secondary">
                            We help people make change
                        </h2>
                    </div>

                    <div className="row">
                        <div class="story">
                            <figure class="story__shape">
                                <img 
                                    src={require("../images/fitness-sample-1.jpg")}
                                    alt="Person on a tour" 
                                    class="story__img story__img-1"
                                />
                                <figcaption class="story__caption">Mary Smith</figcaption>
                            </figure>
                            <div class="story__text">
                                <h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore, in beatae exercitationem qui et harum quibusdam repellat officiis corporis. Aspernatur, labore illum nulla accusamus sit eos impedit laboriosam consectetur. Audantium, ea? Magni fugit, doloribus rem nisi asperiores a iste ut reiciendis!</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="story">
                            <figure class="story__shape">
                                <img 
                                    src={require("../images/fitness-sample-3.jpg")} 
                                    alt="Person on a tour" 
                                    class="story__img story__img-2"
                                />
                                <figcaption class="story__caption">Jack Wilson</figcaption>
                            </figure>
                            <div class="story__text">
                                <h3 class="heading-tertiary u-margin-bottom-small">Wow! My life is completely different now</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore, in beatae exercitationem qui et harum quibusdam repellat officiis corporis. Aspernatur, labore illum nulla accusamus sit eos impedit laboriosam consectetur. Audantium, ea? Magni fugit, doloribus rem nisi asperiores a iste ut reiciendis!</p>
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

export default Testimonials