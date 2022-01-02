
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './global/Nav';
import './app.scss'
// components
import Home from './home/home'
import SoldItemsPage from './soldItemsPage/SoldItemsPage'

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes >
      <Route path='/home' element={<Home/>}/>
      <Route path='/soldItems' element={<SoldItemsPage/>}/>

      </Routes >
    </Router>  
    );
}


export default App;
