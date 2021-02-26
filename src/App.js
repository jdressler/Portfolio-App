import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header'
import MainContainer from './components/MainContainer/MainContainer'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
        <Switch>
          <Route exact path='/' component={MainContainer}/>
          {/* <Route exact path='/contact' component={ContactForm}/> */}
        </Switch>
      </Router>
      <Footer/>
  </div>
  );
}

export default App;
