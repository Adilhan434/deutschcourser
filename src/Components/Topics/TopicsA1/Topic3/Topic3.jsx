import React from 'react'
import './Topic3.css'

function Topic3() {
  return (
    <div className='topic11'>
        <h1>Местоимения (личные, притяжательные, указательные)</h1>
        <h2>1. Личные местоимения (Personalpronomen)</h2>
        <p>Используются вместо существительных, обозначают лицо, предмет.</p>
        <div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Лицо</th>
      <th>Единственное число</th>
      <th>Множественное число</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1-e	</td>
      <td><b>Ich</b>(я)</td>
      <td><b>Wir</b> (мы)</td>
    </tr>
    <tr>
      <td>2-е</td>
      <td> <b>du</b>ты</td>
      <td><b>ihr</b> (вы)</td>
    </tr>
    <tr>
      <td>3-e</td>
      <td> <b>er</b>(он) <b>sie</b>(она) <b>es</b>(оно)</td>
      <td> <b>sie</b> (они)</td>
    </tr>
    <tr>
      <td>Вежливое</td>
      <td><b>Sie</b>(Вы)</td>
      <td><b>Sie</b>(Вы)</td>
    </tr>
  </tbody>
</table>
</div>

<p>Примеры:</p>
<div className="ptext">
<p><b>Ich lerne Deutsch. (Я учу немецкий.) <br />
Sie kommen aus Deutschland. (Они из Германии.) <br />
ch lerne Deutsch. (Я учу немецкий.) <br /> 
Er ist mein Freund. (Он мой друг.) <br />
Wir wohnen in Berlin. (Мы живём в Берлине.) <br />
Sie kommen aus Deutschland. (Они из Германии.)</b></p>
</div>

    <h2>2. Притяжательные местоимения (Possessivpronomen)</h2>
    <p>Обозначают принадлежность. Согласуются с существительным по роду, числу и падежу.</p>

    <div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Лицо</th>
      <th>Муж. (der)</th>
      <th>Ср. (das)	</th>
  
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ich</td>
      <td>mein</td>
      <td>mein</td>
    </tr>
    <tr>
      <td>du</td>
      <td>dein</td>
      <td>dein</td>

    </tr>
    <tr>
      <td>er</td>
      <td>sein</td>
      <td>sein</td>
   
    </tr>
    <tr>
      <td>sie(она)</td>
      <td>ihr</td>
      <td>ihr</td>
  
    </tr>
    <tr>
      <td>es</td>
      <td>sein</td>
      <td>sein</td>
   
    </tr>
    <tr>
      <td>wir</td>
      <td>unser</td>
      <td>unser</td>
   
    </tr>
    <tr>
      <td>ihr</td>
      <td>euer</td>
      <td>euer	</td>
  
    </tr>
    <tr>
      <td>sie(они)</td>
      <td>ihr</td>
      <td>ihr</td>
    
    </tr>
    <tr>
      <td>Sie(Вы)</td>
      <td>ihr</td>
      <td>ihr</td>
   
    </tr>
  </tbody>
</table>
</div>
<div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Жен. (die)</th>
      <th>Мн. (die)</th>
      <th>Русс-й</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>meine</td>
      <td>meine</td>
      <td>мой</td>
    </tr>
    <tr>
      <td>deine</td>
      <td>deine</td>
      <td>твой</td>
    </tr>
    <tr>
      <td>seine</td>
      <td>seine</td>
      <td>его</td>
    </tr>
    <tr>
      <td>ihre</td>
      <td>ihre</td>
      <td>её</td>
    </tr>
    <tr>
      <td>seine</td>
      <td>seine</td>
      <td>его</td>
    </tr>
    <tr>
      <td>unsere</td>
      <td>unsere</td>
      <td>наш</td>
    </tr>
    <tr>
      <td>eure	</td>
      <td>eure	</td>
      <td>ваш</td>
    </tr>
    <tr>
      <td>ihre</td>
      <td>ihre</td>
      <td>их</td>
    </tr>
    <tr>
      <td>ihre</td>
      <td>ihre</td>
      <td>Ваш (вежливая форма) </td>
    </tr>
  </tbody>
</table>
</div>
<p>Примеры с переводом:</p>
<div className="ptext">
<p><b> Das ist mein Auto. – Это моя машина. <br />
Wo ist deine Jacke? – Где твоя куртка? <br />
 Sein Haus ist groß. – Его дом большой. <br />
 Das ist mein Buch. (Это моя книга.) <br />
 Wo ist deine Tasche? (Где твоя сумка?)</b></p>
 </div>
    </div>
  )
}

export default Topic3