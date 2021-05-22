// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './views/landingPage';
import Contact from './views/contact';
const basename = "/";
function App() {
  return (
    <Router basename="/">
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </>
    </Router>

  );
}

export default App
