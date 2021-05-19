// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './views/landingPage';
import Contact from './views/contact';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/index.html" component={LandingPage} />
          <Route exact path="/contact.js" component={Contact} />
        </Switch>
      </>
    </Router>

  );
}

export default App;
