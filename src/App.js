
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
        <Routes>
          <Route exact path='/' element= {App}/>
          <Route path='/about' element={<h1>Text</h1>}></Route>
          <Route path='*' element={<h1>Nothing fond</h1>}></Route>
        </Routes>
        <Footer/>
        
      </Router>
      
    </div>
  );
}

export default App;
