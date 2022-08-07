import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/projects'
import Reviews from './components/reviews'
import Footer from './components/footer'
function App() {
  const id = {
    navbar: 'navbar',
    home : 'home',
    about : 'about',
    projects : 'projects',
    reviews : 'reviews',
    contact : 'contact'
  }
  return (
       <>
        <Navbar id={id}/>
        <Home id={id}/>
        <About id={id}/>
        <Projects id={id}/>
        <Reviews id={id}/>
        <Footer id={id}/>
       </>
  )
}

export default App
