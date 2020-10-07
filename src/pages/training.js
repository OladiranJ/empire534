// Imports

import React    from 'react';
import Footer   from '../components/layouts/Footer';



// ----------------------------------------------------------------------------------------------------------------------------------

// Training Page

const Training = () => {

    return (

        <div>
            <header className="header header__training">
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
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary">
                                Small Group Sessions
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        <p className="paragraph u-center-text u-bigger-text">
                            4 week session (8 classes): $320 ($40/class)
                            (3 person minimum, 6 person maximum)
                        </p>
                        <p className="paragraph u-center-text u-bigger-text">
                            The small groups run in 4 week sessions starting at the beginning of each month. 
                        </p>
                        <p className="paragraph u-center-text u-bigger-text">
                            You can join at any time during the 4 week session at a prorated rate: $40 X # of Classes Remaining in Session.
                        </p>
                        <p className="paragraph u-center-text u-bigger-text">
                            Feel free to jump in with an existing group or create your own group.
                        </p>
                    </div>
                </section>

                <section className="section-private">
                    <div className="row">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary-white">
                                Personal One-on-One Training
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        <p className="paragraph paragraph-white u-center-text u-bigger-text">
                            1 Session: $115
                        </p>
                        <p className="paragraph paragraph-white u-center-text u-bigger-text">
                            5 Pack: $550
                        </p>
                        <p className="paragraph paragraph-white u-center-text u-bigger-text">
                            10 Pack: $1000
                        </p>
                    </div>
                </section>

                <section className="section-duo">
                    <div className="row">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary">
                                Duo Sessions
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        <p className="paragraph u-center-text u-bigger-text">
                            1 Session: $140
                        </p>
                        <p className="paragraph u-center-text u-bigger-text">
                            5 Pack: $650
                        </p>
                        <p className="paragraph u-center-text u-bigger-text">
                            10 Pack: $1100
                        </p>
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