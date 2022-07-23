
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Counter from './Components/CounterExample';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        {/* <HelloWorld name = "Rohit patel"></HelloWorld> */}
        <Routes>
          <Route exact path='/' element={<Counter/>}/>
          <Route path='/about'>About</Route>
        </Routes>
        <Footer/>
        
      </Router>
      
    </div>
  );
}

export default App;
