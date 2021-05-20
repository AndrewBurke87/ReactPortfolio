import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './views/landingPage';
import Contact from './views/contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <>
        <Switch>
          <Route exact path="#" component={LandingPage} />
          <Route exact path="#contact" component={Contact} />
        </Switch>
      </>
    </Router>

  );
}

export default App
