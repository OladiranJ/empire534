// Imports

import React, { Component }                       from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home                                       from './pages/home';
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
          </Switch>
        </div>
      </Router>
    )

  }

}



// ----------------------------------------------------------------------------------------------------------------------------------

// Exports

export default App;
