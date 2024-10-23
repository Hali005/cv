import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css'
import Home from './Home';
import Project from './Projects';
import Navbar from './Navbar';
import Education from './Education';
import Experience from './Experience';
import Show from './Show';


function App() {
  return (
    <div> 
    <Router>
      <div>
        <Navbar/>
      </div>
    <div>    
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/Project">
          <Project />
          </Route>
          <Route exact path="/Education">
          <Education />
          </Route>
          <Route exact path="/Experience">
          <Experience />
          </Route>
        </Switch>
        </div>
    </Router>
    <>
    <Show/>
    </>
    </div>
  );
}

export default App;
