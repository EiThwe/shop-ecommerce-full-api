import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Guard from './components/Guard'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Guard><Dashboard/></Guard>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </div>
  )
}

export default App