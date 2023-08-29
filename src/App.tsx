import './App.css'
import {Routes, Route} from "react-router-dom"
import LandingPage from './components/LandingPage/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div id="app">
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
        </Routes>
      </div>
  )
}

export default App
