import Home from './Components/Home/Home.jsx'
import logo from '/assets/logo.png'
import './App.css'
import DuetschA1 from './Components/DuetschA1/DuetschA1.jsx'
import DuetschAA1 from './Components/DuetschAA1/DuetschAA1.jsx'
import DuetschAAA1 from './Components/DuetschAAA1/DuetschAAA1.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


import Topic1 from './Components/Topics/TopicsA1/Topic1/Topic1.jsx'
import Topic2 from './Components/Topics/TopicsA1/Topic2/Topic2.jsx'
import Topic3 from './Components/Topics/TopicsA1/Topic3/Topic3.jsx'
import Topic4 from './Components/Topics/TopicsA1/Topic4/Topic4.jsx'

function App() {


  return (
      <div>
          <Router>
            <div className="header">
          <div className="header-photo">
              <Link to='/'>  <img src={logo} alt="" /></Link>
            </div>
            <div className="header-photo2">
                <a href="#">меню</a>
                <img src="" alt="" />

            </div>
            </div>
            
            <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/mainkurs' element={<DuetschA1/>}></Route>
                  <Route path='/main' element={<DuetschAA1/>}/>
                  <Route path='banner' element={<DuetschAAA1/>}/>
                  <Route path='DuetschA1' element={<Topic1/>}/>
                  <Route path='DuetschA12' element={<Topic2/>}/>
                  <Route path='DuetschA13' element={<Topic3/>}/>
                  <Route path='DuetschA14' element={<Topic4/>}/>

                  
            </Routes>
          </Router>
      </div>

  )
}

export default App
