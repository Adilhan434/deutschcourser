import React from 'react'
import './Main.css'
import {Link} from 'react-router-dom';

import photo2 from '/assets/photo2.png'

function Main() {
  return (
    <div className='main'>
       
        <div className="main-photo">
        <a href="">
        <Link to='/main'><img src={photo2} alt="" /></Link>
        </a>
        </div>
    </div>
  )
}

export default Main