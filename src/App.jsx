import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Forms from './components/Forms'
import Header from './components/Header'
import Main from './components/Main'
import Targets from './components/Targets'

function App() {

  return (
    <div className=" min-h-screen">
      <Header />
      <Main />
      <Forms />
      <Footer />
    </div>
  )
}

export default App
