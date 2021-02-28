import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from './components/Header/Header'
import MainContainer from './components/MainContainer/MainContainer'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer/>
      <Footer/>
  </div>
  );
}

export default App;
