import React from 'react'
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {Home} from './component'

render(
   <Router>
        <Route path="/" component={Home}/>
    </Router>, 
  document.getElementById('container'));