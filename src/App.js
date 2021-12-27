
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// components
import Home from './home/home'


function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<Home/>}/>

      </Routes >
    </Router>  
    );
}


export default App;
