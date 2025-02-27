import React from 'react'
import './DuetschA1.css'
import {Link} from 'react-router-dom';

function DuetschA1() {
  return (
    <div className='block'>
      <h1>Грамматика для уровня А1</h1>
      <h2>Грамматика</h2>
      
        <Link to='/DuetschA1'>1.Алфавит и произношение </Link>
      <Link to='/DuetschA12'>﻿2.﻿﻿Артикли (определенный, неопределенный, нулевой)</Link>
      <Link to='/DuetschA13'>3.Местоимения (личные, притяжательные, указательные)</Link>
      <Link to='/DuetschA14'>4.Основные времена</Link>
      
      <a className='text' href="">﻿4.1.Präsens (настоящее время)</a>
      <a className='text' href="">﻿4.2.Perfekt (прошедшее время для разговорной речи)</a>
      <a href="">﻿5.Глаголы</a>
      <a className='text' href="">5.1.Правильные и неправильные</a>
      <a className='text'href="">5.2.Основные модальные глаголы (können, müssen, wollen, dürfen, sollen)</a>
      <a className='text'href="">5.3.Sein, haben</a>
      <a className='text'href="">5.4.Отделяемые приставки (aufstehen, anrufen и т. д.)</a>
      <a href="">6.Словообразование (основные суффиксы и префиксы)</a>
      <a href="">7.Склонение существительных</a>
      <a href="">8.Простые предлоги места и времени (in, auf, unter, neben, mit, nach, seit и т. д.)</a>
      <a href="">9.Простые союзы (und, aber, oder, weil, denn)</a>
      <a href="">10.Вопросительные слова (wer, was, wo, wann, warum и т. д.)</a>
    </div>
  )
}

export default DuetschA1