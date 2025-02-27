import React from 'react'
import './banner.css'
import banner from '/assets/banner.png'
import {Link} from 'react-router-dom'

function Banner() {
  return (
    <div className='banner'>
        <div className="banner-one">
        <img src={banner} alt="" />
            <h1>Willkommen</h1>
            <h2>Для чего стоит <br />     учить    немецкий язык</h2>
                <Link to='/banner'>подробнее</Link>
        </div>
    </div>
  )
}

export default Banner