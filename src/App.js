
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './global/Nav';
import './app.scss'
// components
import Home from './home/home'
import SoldItemsPage from './soldItemsPage/SoldItemsPage'
import PosPage from './posPage/PosPage'

function App() {
  return (
    <Router>

      <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/soldItems' element={<SoldItemsPage/>}/>
      <Route path="/posPage" element={<PosPage/>}/> 

      </Routes >
    </Router>  
    );
}


export default App;
