import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Landing, Notfound, Signin, Signup } from './pages';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />

        <Route exact path='/signin' element={<Signin />} />

        <Route exact path='/signup' element={<Signup />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App