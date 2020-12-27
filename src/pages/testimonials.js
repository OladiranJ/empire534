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
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Love in our Empire
                        </h2>
                    </div>

                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img 
                                    src={require("../images/christine-m.jpg")}
                                    alt="Person on a tour" 
                                    className="story__img story__img-1"
                                />
                                <figcaption className="story__caption">Christine M.</figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">Felt better day 1</h3>
                                <p>Working out on my own can be really intimidating and confusing sometimes.. I was looking for someone to help me commit to my goals and increase my strength (and self confidence). Armina and Steph help me feel so empowered. They're really thorough and determined to help me maintain my goals. They have taught me so much and challenged me to be my best self. If you get a chance to meet and train with them, I swear you'll feel better after day 1!</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img 
                                    src={require("../images/cjg.jpg")} 
                                    alt="Person on a tour" 
                                    className="story__img story__img-2"
                                />
                                <figcaption className="story__caption">CJ G.</figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">Healthier, Happier, and Stronger</h3>
                                <p>I have been training with Armina and Stephanie for 6 months and couldn’t be more thrilled with my results. The workouts are challenging, well organized, and include a combination of strength, core training and cardio. Thanks to their knowledge of fitness and nutrition, I have become healthier, happier and stronger. I highly recommend this duo to anyone looking for personal training and a healthier lifestyle.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img 
                                    src={require("../images/esther-g.jpg")} 
                                    alt="Person on a tour" 
                                    className="story__img story__img-3"
                                />
                                <figcaption className="story__caption">Esther G.</figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">A breath of fresh air</h3>
                                <p>Training with Stephanie has been a life changer. She has taught me how to appreciate and love my body in all aspects . She knows just how to give me the right push that I need to motivate me or remind me of how much stronger I am then I think. She is a breath of fresh air mixed with fun and strength that keeps me going every workout.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img 
                                    src={require("../images/dino-p.jpg")} 
                                    alt="Person on a tour" 
                                    className="story__img story__img-4"
                                />
                                <figcaption className="story__caption">Dino P.</figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">More than just clients</h3>
                                <p>I’ve had trainers who’ve cared about my physical wellbeing, and not much beyond that, but Stephanie understands that the body is intrinsically tied to the mind and heart, and she she never neglects these aspects in her clients. She understands that health is a symbiotic system, and her routines celebrate this.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img 
                                    src={require("../images/gina-o-2.PNG")} 
                                    alt="Person on a tour" 
                                    className="story__img story__img-5"
                                />
                                <figcaption className="story__caption">Gina O.</figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary u-margin-bottom-small">Warm and Supportive Approach</h3>
                                <p>I have been fortunate enough to train with Stephanie for the past several years and cannot sing her praises enough!  The workouts she develops are unique, challenging, and have helped me work toward and achieve my fitness goals.  Her positive attitude and energy are contagious, and she is always engaged, motivating, and attentive to the individual needs of her clients.  Most importantly, Stephanie’s warm and supportive approach creates a community of individuals who encourage and push each other to work hard and play hard at the same time.  Not to mention her DJ skills and dance moves are second to none!</p>
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