import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './screens/Home';
import About from './screens/About';
import Footer from './components/Footer';
import './css/App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <main>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about-me'>
          <About />
        </Route>
        </main>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
