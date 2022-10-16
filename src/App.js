import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Nav/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <div className='App'>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;
