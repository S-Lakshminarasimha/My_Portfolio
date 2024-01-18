import React from "react"
import { createRoot } from "react-dom/client"
import './App.css'
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"


const root = createRoot(document.getElementById('root'))

const App = function(){
    return(
        <div className="app">
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

root.render(<App/>)