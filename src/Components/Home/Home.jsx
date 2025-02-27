import React from 'react'
import './Home.css'

// import Header from './header/Header.jsx'
import Banner from './Banner/Banner.jsx'
import MainKurs from './mainKurs/MainKurs.jsx'
// import MainKurs from './mainKurs/MainKurs.jsx'
import Main from './main/Main.jsx'

function Home() {
  return (
    <div>
        {/* <Header/> */}
        <Banner/>
        <MainKurs/>
        <Main/>
    </div>
  )
}

export default Home