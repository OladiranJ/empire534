// Imports

import React, { Component, createRef }    from 'react';
import { Link }         from 'react-router-dom'


// ----------------------------------------------------------------------------------------------------------------------------------

// Navigation Bar

class Navbar extends Component {

    state = {

        hasScrolled: false,
        checked: false,
        menuChecked: false,
        isMobile: false

    }

    menuBackground = createRef()

    componentDidMount () {

        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY
            if (scrollPos > 10) {
                this.setState({
                    hasScrolled: true
                })
            } else {
                this.setState({
                    hasScrolled: false
                })
            }
        })

        window.addEventListener('resize', () => {
            const windowSize =  window.innerWidth
            if (windowSize < 769) {
                this.setState({
                    isMobile: true
                })
            } else {
                this.setState({
                    isMobile: false
                })
            }
        })

    }

    componentWillUnmount () {

        window.removeEventListener('scroll')
        
    }

    onChangeCheckbox = () => {
        this.setState({
            checked: !this.state.checked,
        })
    }

    onClickNavLinks = e => {
        if(e.target === this.menuBackground.current) {
            this.setState({
                menuChecked: false,
                checked: false
            })   
        }
    }

    onClickMenuCheckbox = () => {
        this.setState({
            menuChecked: !this.state.menuChecked,
            checked: false
        })
    }

    onClickRedirect = () => {
        this.setState({
            menuChecked: false,
            checked: false
        })
    }

    render () {
        const { checked, hasScrolled, menuChecked, isMobile} = this.state

        const translateClass = checked ? 'translate__y' : ''
        const afterClass = checked ? 'after' : ''
        const styleForUl = {
            visibility: checked ? 'visible' : 'hidden'
        }
        const navBarClass = hasScrolled ? 'navbar scrolled' : 'navbar'

        return (
            <div className={navBarClass} >
                <div className="navbar__logo-text">
                    <Link to="/">Empire 534</Link>
                </div>
    
                <input type="checkbox" className="menu__btn" id="menu__btn" checked={menuChecked} onChange={this.onClickMenuCheckbox} />
                <label htmlFor="menu__btn" className="menu__icon">
                    <span className="menu__icon-line"></span>
                </label>
    
                 <ul className="nav__links" onClick={this.onClickNavLinks} ref={this.menuBackground}>
                    <li className={`nav__links--link nav__links--link-1`}>
                        <input type="checkbox" 
                            className="about__btn" 
                            id="about__btn" 
                            checked={this.state.checked} 
                            onChange={this.onChangeCheckbox}
                        />
                        <label htmlFor="about__btn" className="about__dropdown">
                            <span className="about__dropdown-word">About &#xbb;</span>
                        </label>
                        

                        {isMobile ? (
                            <ul className="dropdown" style={styleForUl}>
                                <li className={`dropdown__link ${afterClass}`}>
                                    <Link to="/testimonials" onClick={this.onClickRedirect}>Testimonials</Link>
                                </li>
                                <li className={`dropdown__link ${afterClass}`}>
                                    <Link to="/faq" onClick={this.onClickRedirect}>FAQs</Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="dropdown">
                                <li className={`dropdown__link ${afterClass}`}><Link to="/testimonials" onClick={this.onClickRedirect}>Testimonials</Link></li>
                                <li className={`dropdown__link ${afterClass}`}><Link to="/faq" onClick={this.onClickRedirect}>FAQs</Link></li>
                            </ul>
                        )}

                        
                    </li>
                    <li className={`nav__links--link ${translateClass}`}>
                        <Link to="/training" onClick={this.onClickRedirect}>Training</Link>
                    </li>
                    <li className={`nav__links--link ${translateClass}`}>
                        <Link to="/" onClick={this.onClickRedirect}>Streaming</Link>
                    </li>
                    <li className={`nav__links--link ${translateClass}`}>
                        <Link to="/contact" onClick={this.onClickRedirect}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        )

    }


}



// ----------------------------------------------------------------------------------------------------------------------------------

// Exports

export default Navbar;