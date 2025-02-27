import React from 'react';
import { Link } from 'react-router-dom';
import './Mainkurs.css'



import photo1 from '/assets/photo1.png'

function MainKurs() {
  return (
    <div className='main-kurs'>
        <h1>ваши курсы</h1>
        <div className="main-kurs-photo">
        
      <Link  to='/mainkurs'><img src={photo1} alt="" /></Link> 
     
        </div>
    </div>
  )
}

export default MainKurs