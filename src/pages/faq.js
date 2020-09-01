// Imports

import React    from 'react';
import Footer   from '../components/layouts/Footer';



// ----------------------------------------------------------------------------------------------------------------------------------

// FAQ Page


const FAQ = () => {

    return (

        <div>
            <header className="header header__faq">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary__sub">
                            FAQ
                        </span>
                    </h1>
                </div>
            </header>

            <main>
                <section className="section-questions">
                    <div className="row">
                        <div className="col-1-of-4">
                            <h2 className="heading-secondary">
                                General
                            </h2>
                        </div>

                        <div className="col-3-of-4">
                            <h3 className="heading-tertiary">
                                What if I have not worked out in a while, or ever?
                            </h3>
                            <p className="paragraph">
                                We ask that you come in with a good attitude and you're ready to work hard with us! We will discuss all your concerns or questions upon initial contact.
                            </p>

                            <h3 className="heading-tertiary">
                                Do you provide towels and water?
                            </h3>
                            <p className="paragraph">
                                We currently do not offer towel service and please bring your water bottle filled.
                            </p>

                            <h3 className="heading-tertiary">
                                What if I have injuries?
                            </h3>
                            <p className="paragraph">
                                We will sit down and discuss any injuries and concerns prior to your first workout and then create a customized plan for you.
                            </p>
                        </div>
                    </div>

                    {/* <div className="row u-margin-top-big">
                        <div className="col-1-of-4">
                            <h2 className="heading-secondary">
                                Membership
                            </h2>
                        </div>

                        <div className="col-3-of-4">
                            <h3 className="heading-tertiary">
                                Elit amet reprehenderit ea nisi voluptate reprehenderit nisi?
                            </h3>
                            <p className="paragraph">
                                Ex nulla cupidatat commodo quis in qui exercitation. Occaecat nisi in laborum id culpa labore. Elit minim dolore fugiat consequat. Ea exercitation laborum sunt veniam qui labore.
                            </p>

                            <h3 className="heading-tertiary">
                                Lorem commodo laboris incididunt duis sint non laborum laboris magna?
                            </h3>
                            <p className="paragraph">
                                Tempor pariatur culpa magna aute do minim id tempor voluptate. Elit anim Lorem laborum excepteur aute labore consectetur labore excepteur eu. Ex aliqua anim cupidatat ut deserunt sit. Dolor veniam eiusmod occaecat aute consectetur et eu.
                            </p>

                            <h3 className="heading-tertiary">
                                Consequat ipsum eiusmod anim exercitation exercitation esse fugiat amet in?
                            </h3>
                            <p className="paragraph">
                                Anim deserunt nisi incididunt sit. Ex commodo commodo commodo duis veniam. Nisi dolore aliqua dolore irure nulla ut eiusmod. Incididunt Lorem nisi aliqua nostrud est id sit fugiat. Veniam sit eu aliquip enim sunt incididunt laboris adipisicing minim.
                            </p>
                        </div>
                    </div> */}
                </section>
            </main>

            <Footer/>
        </div>

    )

}



// ----------------------------------------------------------------------------------------------------------------------------------

// Exports

export default FAQ