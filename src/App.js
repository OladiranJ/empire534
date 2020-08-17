// Imports

import React, { Component }                       from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home                                       from './pages/home';
import Contact                                    from './pages/contact'
import FAQ                                        from './pages/faq';
import PrivacyPolicy                              from './pages/privacypolicy';
import Testimonials                               from './pages/testimonials'
import Training                                   from './pages/training'
import NavBar                                     from './components/layouts/NavBar';




// ----------------------------------------------------------------------------------------------------------------------------------

// App Class

class App extends Component {

  render () {

    return (
      <Router>
        <NavBar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/faq" component={FAQ}/>
            <Route exact path="/privacy" component={PrivacyPolicy}/>
            <Route exact path="/testimonials" component={Testimonials}/>
            <Route exact path="/training" component={Training}/>
          </Switch>
        </div>
      </Router>
    )

  }

}



// ----------------------------------------------------------------------------------------------------------------------------------

// Exports

export default App;
