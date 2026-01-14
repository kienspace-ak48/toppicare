import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {Header} from './components/Header'
import {Footer} from "./components/Footer";
import {HomePage} from './components/pages/HomePage'
import About from './components/pages/About'

export default function App(){
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 mt-[65px]">
        <div>
          <Header onMenuToggle={()=>{}}></Header>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  )
}