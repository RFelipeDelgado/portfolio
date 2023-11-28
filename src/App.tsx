import './App.css'
import {Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage'
import About from './components/About/About';

function App() {

  return (
    <div id="app">
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </div>
  )
}

export default App
