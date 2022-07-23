import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


import Header from './Components/Header';
import Counter from './Components/CounterExample';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Products from './Views/Products';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className='p-3'>
          <Routes>
            <Route exact path='/' element= {<Home></Home>}/>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/products/:id' element={<Products></Products>}></Route>
            <Route path='*' element={<h1>Nothing fond</h1>}></Route>
          </Routes>
        </div>
          
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
