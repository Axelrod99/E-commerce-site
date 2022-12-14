import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Details from './component/Details';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Router>
   <Routes>
     <Route path='/' element={<App/>}/> 
     <Route path='/Dashboard' element={<Dashboard/>}/>
     <Route path='/Details/:product_id' element={<Details/>}/>
     {/* <Route path='/' */}
   </Routes>
  </Router>,

 document.getElementById('root')
);

