import logo from './logo.svg';
import './App.css';

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

export default App
