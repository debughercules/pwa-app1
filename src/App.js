import "./App.css";


import Home from './Home'
import About from './About'
import Users from './Users'
import Navigation from './Navbar'

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navigation/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
