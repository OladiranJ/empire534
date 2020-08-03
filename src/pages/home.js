// Imports

import React    from 'react';
import Footer   from '../components/layouts/Footer';
import PhotoCarousel    from '../components/layouts/PhotoCarousel'



// ----------------------------------------------------------------------------------------------------------------------------------

// Home page

const Home = () => {

    return (

        <div>
            <header className="header header__home">
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Empire 534</span>
                        {/* <span class="heading-primary--sub"></span> */}
                    </h1>
                </div>
            </header>

            <main>
                <section className="section-introduction">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">Lorem Ipsum</h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">Lorem ipsum dolor sit amet consectetur</h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Magni fugit, doloribus rem nisi asperiores a iste ut reiciendis nesciunt blanditiis, iure autem nam minima sed vel alias ratione!
                            </p>

                            <h3 className="heading-tertiary u-margin-bottom-small">Lorem ipsum dolor sit amet consectetur</h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ea? Magni fugit, doloribus rem nisi asperiores a iste ut reiciendis!
                            </p>

                            <a href="#" className="btn-text">Learn more &rarr;</a>
                        </div>

                        <div className="col-1-of-2">
                            <PhotoCarousel/>
                            {/* <div className="carousel-container"> */}
                                {/* <PhotoCarousel /> */}
                            {/* </div> */}
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