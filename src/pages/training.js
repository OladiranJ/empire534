// Imports

import React    from 'react';
import Footer   from '../components/layouts/Footer';



// ----------------------------------------------------------------------------------------------------------------------------------

// Training Page

const Training = () => {

    return (

        <div>
            <header className="header header__testimonials">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary__sub">
                            Training
                        </span>
                    </h1>
                </div>
            </header>

            <main>
                <section className="section-small-group">
                    <div className="row">
                        <div class="u-center-text u-margin-bottom-big">
                            <h2 class="heading-secondary">
                                We help people make change
                            </h2>
                        </div>
                    </div>
                </section>

                <section className="section-private">
                    <div className="row">
                        <div class="u-center-text u-margin-bottom-big">
                            <h2 class="heading-secondary">
                                We help people make change
                            </h2>
                        </div>
                    </div>
                </section>

                <section className="section-duo">
                    <div className="row">
                        <div class="u-center-text u-margin-bottom-big">
                            <h2 class="heading-secondary">
                                We help people make change
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

export default Training