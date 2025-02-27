import React from 'react'
import './Topic2.css'

function Topic2() {
  return (
    <div className='toic'>
        <h1>Артикли (определенный, неопределенный, нулевой)</h1>
        <div className='dueth'>
        <p>В немецком языке существуют три артикля: <b>определенный</b>, <b>неопределенный</b> и <b>нулевой</b>, то есть отсутствие артикля.

Артикли изменяются по падежам, а определенный артикль имеет множественное число.

В немецком языке артикли всегда ставятся перед существительным и относящимися к нему прилагательными, если такие имеются.

Неопределенный артикль существует только в единственном числе.</p></div>
    <h2>Неопределенный артикль</h2>
    <p>Как мы уже упоминали и что нужно запомнить: <b>неопределенный артикль </b>существует <b>только в единственном числе.</b></p>
    <div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Падеж</th>
      <th>Мужской род</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nominativ	</td>
      <td>ein Mann	</td>
    </tr>
    <tr>
      <td>Genitiv	</td>
      <td>ein<b>es</b> Mannes	</td>
    </tr>
    <tr>
      <td>Dativ	</td>
      <td>ein<b>em</b> Man</td>
    </tr>
    <tr>
      <td>Akkusativ</td>
      <td>ein<b>en</b> Mann</td>
    </tr>
  </tbody>
</table>
</div>
<div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Падеж</th>
      <th>Женский род</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nominativ	</td>
      <td>ein<b>e</b> Frau</td>
    </tr>
    <tr>
      <td>Genitiv	</td>
      <td>ein<b>er</b> Frau</td>
    </tr>
    <tr>
      <td>Dativ	</td>
      <td>ein<b>er</b> Frau</td>
    </tr>
    <tr>
      <td>Akkusativ</td>
      <td>ein<b>e</b> Frau	</td>
    </tr>
  </tbody>
</table>
</div>
<div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Падеж</th>
      <th>Средний род</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nominativ	</td>
      <td>ein Kind </td>
    </tr>
    <tr>
      <td>Genitiv	</td>
      <td>ein<b>es</b> Kindes</td>
    </tr>
    <tr>
      <td>Dativ	</td>
      <td>ein<b>em</b> Kind</td>
    </tr>
    <tr>
      <td>Akkusativ</td>
      <td>ein Kind</td>
    </tr>
  </tbody>
</table>
</div>
    <p>Теперь давайте посмотрим, когда же мы используем неопределенный артикль.</p>
    <p><b>мы о чем-то говорим впервые</b></p>
    <p>Wir kaufen <b>ein</b> Auto. — Мы покупаем машину. <br />
    Ich sehe <b>einen</b> Mann. — Я вижу мужчину.</p>
    <p><b>в значении «один» или при указании порции</b></p>
    <p>Sie bestellt <b>einen</b> Kaffee. — Она заказывает (один) кофе</p>
    <p><b>в конструкции <span>sein</span> + существительное</b> (кроме профессии, рода деятельности и принадлежности к группам)</p>
    <p>Der Walfisch ist <b>ein</b> Saugtier. — Кит — это млекопитающее. <br />
    Der Trabant ist <b>ein</b> Auto. — Трабант — это автомобиль.</p>
    <p><b>профессия, род деятельности, религиозная или национальная принадлежность уточнены прилагательным</b></p>
    <p>Ich bin <b>ein guter</b> Ingenieur. — Я хороший инженер. <br />
Sie ist <b>eine faule</b> Studentin. — Она ленивая студентка. <br />
Er ist <b>ein begabter</b> Geiger. — Он талантливый скрипач.</p> <br />
<p><b>если определения нет — то профессия, род деятельности и т.д. употребляются без артикля!</b></p>
<p><b>при сравнении</b></p>
<p>Sie bewegt sich wie <b>eine</b> Katze. — Она двигается как кошка. <br />
Er sieht wie <b>ein</b> Superstar aus. — Он выглядит как суперзвезда.</p> <br />
<p><b>с глаголами</b><span> haben </span>(иметь), <span> brauchen</span> (нуждаться в) <b>и конструкцией</b> <span> es gibt</span> (есть, имеется в наличии)</p>
<p><span>Hast</span> du <b>ein</b> Auto? — У тебя есть машина? <br />
Ich <span>brauche</span> <b>ein</b> Kleid, <b>eine</b> Tasche und <b>einen</b> Hut. — Мне нужны платье, сумка и шляпа. <br />
Gibt es hier <b>einen</b> Aufzug? — Здесь есть лифт?</p> <br />

    <h2>Определенный артикль</h2>
    <div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Падеж</th>
      <th>Мужской род	</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nominativ	</td>
      <td><b>der</b> Mann	 </td>
    </tr>
    <tr>
      <td>Genitiv	</td>
      <td> <b>des</b> Mannes	</td>
    </tr>
    <tr>
      <td>Dativ	</td>
      <td> <b>dem</b> Mann	</td>
    </tr>
    <tr>
      <td>Akkusativ</td>
      <td> <b>den</b> Mann	</td>
    </tr>
  </tbody>
</table>
</div>
<div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Падеж</th>
      <th>Женский род</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nominativ	</td>
      <td> <b>die</b> Frau	</td>
    </tr>
    <tr>
      <td>Genitiv	</td>
      <td> <b>der</b> Frau	</td>
    </tr>
    <tr>
      <td>Dativ	</td>
      <td> <b>der</b> Frau	</td>
    </tr>
    <tr>
      <td>Akkusativ</td>
      <td> <b>die</b> Frau	</td>
    </tr>
  </tbody>
</table>
</div>
<div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Падеж</th>
      <th>Средний род</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nominativ	</td>
      <td> <b>das</b> Kind</td>
    </tr>
    <tr>
      <td>Genitiv	</td>
      <td> <b>des</b> Kindes</td>
    </tr>
    <tr>
      <td>Dativ	</td>
      <td> <b>dem</b> Kind	</td>
    </tr>
    <tr>
      <td>Akkusativ</td>
      <td> <b>das</b> Kind	</td>
    </tr>
  </tbody>
</table>
</div>
<div className="table-container">
        <table class="styled-table">
  <thead>
    <tr>
      <th>Падеж</th>
      <th>Множественное число</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nominativ	</td>
      <td> <b>die</b> Leute</td>
    </tr>
    <tr>
      <td>Genitiv	</td>
      <td> <b>der</b> Leute</td>
    </tr>
    <tr>
      <td>Dativ	</td>
      <td> <b>den</b> Leuten</td>
    </tr>
    <tr>
      <td>Akkusativ</td>
      <td><b>die</b> Leute</td>
    </tr>
  </tbody>
</table>
</div>
<p>Определенный артикль употребляется, если:</p>
<p><b>то, о чем мы говорим, уже упоминалось ранее</b></p>
<p>Wir kaufen <b>ein</b> Auto. <b>Das</b> Auto ist teuer, aber gefällt mir so sehr. — Мы покупаем машину. Машина дорогая, но мне очень нравится. <br />
Ich sehe <b>einen</b> Mann. <b>Der</b> Mann spricht am Telefon. — Я вижу мужчину. Мужчина говорит по телефону.</p>
        <p><b>из ситуации ясно, о чем именно идет речь, либо объект находится в поле зрения собеседников</b></p>
        <p>Ist <b>der</b> Chef schon da? — Шеф уже здесь? <br />
        Schalte <b>den</b> Fernseher an. — Включи телевизор.</p>
        <p><b>объекту дано дополнительное пояснение, уточнение или определение</b></p>
        <p><b>Das</b> Auto <b>rechts</b> gehört meinem Freund. — Машина справа принадлежит моему другу. <br />
Ich kenne <b>das</b> Mädchen, <b>das neben Martin steht.</b> — Я знаю девушку, которая стоит рядом с Мартином. <br />
Sie ist <b>die</b> Tochter <b>eines Lehrers.</b> — Она дочь учителя. <br />
<b>Der</b> Tee <b>in meiner Tasse</b> ist schon kalt. — Чай в моей чашке уже холодный. <br /></p>
<p><b>с прилагательным превосходной степени — «самый…»</b></p>
<p>Du bist <b>der wichtigste</b> Mensch in meinem Leben. — Ты самый важный человек в моей жизни.</p>
<p><b>с порядковыми числительными — первый, второй и т.д.</b></p>
<p>Heute ist <b>der erste</b> September. — Сегодня первое сентября.</p>
<p><b>объекты и понятия, существующие в единственном экземпляре в мире</b></p>
<p>космические тела (der Himmel — небо, die Erde — Земля, die Milchstraße — Млечный путь),<br />
географически регионы (die Arktis — Арктика, der Nahe Osten — Ближний Восток),<br />
горы и горные вершины (der Kaukasus — Кавказ),<br />
географические объекты (der Äquator — экватор),<br />
острова и группы островов (die Kanaren — Канары), реки, озера и моря (der Rhein — Рейн, das Mittelmeer — Средиземное море),<br />
исторические эпохи (das Mittelalter — Средневековье),<br />
исторические события (der Zweite Weltkrieg — Вторая мировая война),<br />
архитектурные сооружения и памятники (das Brandenburger Tor — Бранденбургские ворота),<br />
улицы и площади (der Times Square — Таймс-сквер),<br />
общности людей (die Menschheit — человечество, die Intelligenz — интеллигенция),<br />
названия наук и отраслей (die Linguistik — лингвистика)
и т.д.</p>
<p><b>названия стран с компонентами <span>die Föderation, das Königreich, die Republik, die Union</span></b></p>
<p>die Russische Föderation — Российская Федерация <br />
das Vereinigte Königreich — Соединенное Королевство <br />
die Bundesrepublik Deutschland — Федеративная Республика Германия <br />
die Tschechische Republik — Чешская Республика <br />
die Sowjetunion — Советский Союз</p>

<p><b>а также</b></p>
<p>die Ukraine — Украина <br />
die Schweiz — Швейцария <br />
die Türkei — Турция <br />
die Slowakei — Словакия <br />
der Sudan — Судан</p>

<p><b>названия стран и городов при наличии определения</b></p>
<p><b><span>das alte</span></b> Prag — старая Прага
<b><span>das</span></b> Europa <b><span>von heute</span></b> — сегодняшняя Европа</p>
<p><b>Определенный артикль перед именами людей ставится, если перед именем есть прилагательное</b></p>
<p><b><span>Die kleine</span></b> Maria ist so süß. — Маленькая Мария такая миленькая.</p>
<p><b>в разговорной речи с фамильярным оттенком</b></p>
<p><b><span>Die</span></b> Anna ist wieder weg. — Анны снова нет</p>
<p><b>фамилия обозначает семью</b></p>
<p><b><span>Die</span></b> Müllers sind umgezogen. — Мюллеры переехали.</p>

<h2>Нулевой артикля</h2>
    <p>Артикль отсутствует:</p>
        <p><b>во множественном числе там, где в единственном числе стоял бы неопределенный</b></p>
        <p>Haben Sie Kinder? — У Вас есть дети? (В единственном числе — Haben Sie ein Kind?)</p>
        <p><b>перед притяжательными местоимениями</b>— <b><span>mein</span></b> (мой), <b><span>dein</span></b> (твой) и т. д.</p>
        <p>Wo ist denn <b><span>mein</span></b> Handy? — Где же мой мобильный телефон?</p>
        <p><b>при указании принадлежности «имя + s»</b></p>
        <p>Das ist Anna<b><span>s</span></b> Haus. — Это дом Анны</p>
        <p><b>после слов <span>dieser</span></b>(этот), <b><span>welcher </span></b>(какой), <b><span>jener</span></b> (тот), <b><span>viele</span></b> (многие)</p>
        <p>Ich mag <b><span>diese</span></b> Stadt. — Я люблю этот город. <br />
Sie hat <b><span>viele</span></b> Freunde. — У нее много друзей. <br />
<b><span>Welche</span></b> Bücher liest du? — Какие книги ты читаешь?</p>
<p><b>перед отрицанием <span>kein</span></b> (никакой)</p>
<p>Wir haben <b><span>keine</span></b> Möglichkeit. — Мы не имеем (никакой) возможности.</p>
<p><b>перед количественными числительными (сколько?)</b></p>
<p>Sie hat <b><span>20</span></b> Katzen. — У нее 20 кошек.</p>
<p><b>конструкция <span>ist</span> + профессия, род деятельности, принадлежность к различным группам и организациям без уточнения качеств</b></p>
<p>Er ist Manager. — Он менеджер. <br />
Meine Tochter ist Schülerin. — Моя дочь — школьница. <br />
Ist er Katholik? — Он католик?</p>
<p><b>после <span>als</span> в значении «в качестве»</b></p>
<p>Arbeiten Sie noch <b><span>als</span></b> Lehrerin? — Вы еще работаете учительницей?
<b><span>Als</span></b> Kind habe ich gern gelesen. — Ребенком я охотно читал.</p>
<p><b><span>es ist</span> + время года, месяцы, дни недели, части суток</b></p>
<p>Es ist Nacht. — Ночь. <br />
Es war Montag. — Был понедельник.</p>
<p><b>перед названиями учебных предметов</b></p>
<p>Sie studiert Wirtschaft. — Она изучает экономику. <br />
Mathe ist ein sehr schweres Fach. — Математика — сложный предмет. <br />
Ich bin gut in Physik. — Я хорош в физике.</p>
<p><b>в заголовках, объявлениях, вывесках</b></p>
<p>Vorsicht! — Осторожно! <br />
Polizei — Полиция (вывеска)</p>
<p><b>вид спорта или музыкальный инструмент + <span>spielen</span></b> (играть)</p>
<p>Sie spielt Klavier mit 5 Jahren. — Она играет на пианино с 5 лет. <br />
Spielen Sie Tennis? — Вы играете в теннис?</p>

<p><b>вещество, состояние, процесс или чувство в общем, без уточнений</b></p>
<p>Sie hat nie Schnee gesehen. — Она никогда не видела снег. <br />
Ich brauche Luft. — Мне нужен воздух. <br />
Das Kind hat Angst. — Ребенок боится (имеет страх).</p>

<p><b>указаны единицы измерения перед веществом</b></p>
<p>Ich bestelle 1 <span>Stück</span> Kuchen. — Я закажу кусок пирога.
Man muss 2 <span>Liter</span> Wasser pro Tag trinken. — Нужно пить два литра воды в день.</p>

<p><b>названия городов, континентов и большинства стран среднего рода</b></p>
<p>Sie wohnt in Berlin seit 2012. — Она живет в Берлине с 2012 года. <br />
Wir machen Urlaub in Frankreich. — Мы в отпуске (делаем отпуск) во Франции. <br />
Er hat Freunde in Amerika. — У него есть друзья в Америке.</p>
<p><b>перед именами людей, кличками животных</b></p>
<p>Sie mag Til Schweiger nicht. — Она не любит Тиля Швайгера. <br />
Rex ist mein Hund. — Рекс — это моя собака.</p>
<p><b>в некоторых устойчивых сочетаниях</b></p>
<p>Wir gehen nach Hause. — Мы идем домой. <br />
Bist du zu Hause? — Ты дома? <br />
Wir gehen zu Fuß. — Мы идем пешком. <br />
Nehmen Sie Platz! — Займите место! / Садитесь!</p>


    </div>
  )
}

export default Topic2