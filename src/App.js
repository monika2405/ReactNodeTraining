import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Home from './views/Home';
import EmployeeList from './views/EmployeeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-wrapper'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/employee-list' element={<EmployeeList />}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
      
    </div>
  );
}

export default App;
