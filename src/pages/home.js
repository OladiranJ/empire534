// Imports

import React    from 'react';
import Footer   from '../components/layouts/Footer';
import PhotoCarousel    from '../components/layouts/PhotoCarousel'
import { Link }         from 'react-router-dom'



// ----------------------------------------------------------------------------------------------------------------------------------

// Home page

const Home = () => {

    return (

        <div>
            <header className="header header__home">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Empire 534</span>
                    </h1>
                </div>
            </header>

            <main>
                <section className="section-introduction">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">Who We Are</h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">Mission Statement</h3>
                            <p className="paragraph">
                                Our mission is to create a place where we can sweat, learn, and grow together. We are dedicated to changing lives through heart-pumping, muscle-shaking workouts and a supportive community.
                            </p>
                            <p className="paragraph">
                                We believe in courage, dedication, commitment and hard work in all aspects of life. Together we not only strengthen our body, but our mind and soul.
                            </p>
                            <p className="paragraph">
                                We are Empire534.
                            </p>

                            <Link to="/training" className="btn-text">Learn more &rarr;</Link>
                        </div>

                        <div className="col-1-of-2">
                            <PhotoCarousel/>
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

export default Home;