// Imports

import React, { Component }    from 'react';



// ----------------------------------------------------------------------------------------------------------------------------------

// Navigation Bar

class Navbar extends Component {

    state = {

        nameOfClass: 'navbar'

    }

    componentDidMount () {

        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY
            if (scrollPos > 10) {
                this.setState({
                    nameOfClass: 'navbar scrolled'
                })
            } else {
                this.setState({
                    nameOfClass: 'navbar'
                })
            }
        })

    }

    componentWillUnmount () {

        window.removeEventListener('scroll')
        
    }

    render () {

        return (
            <div className={this.state.nameOfClass}>
                <div className="navbar__logo-text">
                    <a href="/">Empire 534</a>
                </div>
    
                <input type="checkbox" className="menu__btn" id="menu__btn"/>
                <label for="menu__btn" className="menu__icon">
                    <span className="menu__icon-line"></span>
                </label>
    
                <ul className="nav__links">
                    <li className="nav__links--link"><a href="#">About</a></li>
                    <li className="nav__links--link"><a href="#">Contact Us</a></li>
                    <li className="nav__links--link"><a href="#">Training</a></li>
                    <li className="nav__links--link"><a href="#">Streaming</a></li>
                </ul>
            </div>
        )

    }


}



// ----------------------------------------------------------------------------------------------------------------------------------

// Exports

export default Navbar;