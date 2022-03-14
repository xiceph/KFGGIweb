const handleVyber = e => {
  
  const pr = e.target.parentNode;
  const pov = pr.querySelector('.povinnost');
  console.log(pr,pov);
  if(pov.textContent != 'A'){
    pr.classList.toggle('on');
  }
  
}

const handleList = e => {
  
  const pr = e.target.parentNode;
  const id = pr.id;
  window.open(`docs/infolisty/${id}.pdf`);
  
}

export const LegendaPredmety = () => {
  const colors = ['#cfb1ec','#a2c2f4','#8fdce5','#9dd5a4','#cde299','#f3d798','#E2E2E2'];
  const desc = ['Matematicko-štatistický základ', 'Geoinformatika a kartografia', 'Diaľkový prieskum Zeme a zber dát', 'Fyzická geografia a jej aplikácie', 'Environmentalistika', 'Všeobecná, humánna a regionálna geografia', 'Ostatné predmety'];
  
  return (
    <div className="flex flex-col text-sm">
      {
        colors.map((item, i) => (
          <div key={item}>
            <span className="inline-block w-6 h-4 mr-2 align-middle" style={{background: item}}></span>
            {desc[i]}
          </div>
        ))
      }
    </div>
  )
}

export const SchemaPredmety = (props) => (
  <svg viewBox="0 0 1080 1510" {...props} >
    <style type="text/css">{`
      .a{font-family:'PTserif';font-weight:bold;}
      .b{font-family:'PTSerif';font-weight:bold;font-style:italic;}
      .c{font-family:'PTSerif';font-style:italic;}
      .predmet{font-size:12px;}
      .linia{cursor:help;}
      text:not(.kredity):not(.povonnost){cursor:help;pointer-events:none}
      .vyber{fill:#ccc;cursor:pointer;}
      .on .vyber{fill: #102f48;}
      .on .kredity,.on .povinnost{fill: #fff;}
      .kredity,.povinnost{cursor:pointer;pointer-events:none}
      .st0{fill:#cfb1ec;}
      .st6{fill:#a2c2f4;}
      .st8{fill:#8fdce5;}
      .st9{fill:#9dd5a4;}
      .st10{fill:#cde299;}
      .st11{fill:#f3d798;}
      .st12{fill:#E2E2E2;}
      `}
    </style>
    <g id="a1" className="predmet on">
      <rect x="40" y="12" onClick={handleList} className="linia st0" width="137.9" height="53"/>
      <rect x="12" y="12" onClick={handleVyber} className="vyber" width="28" height="53" />
      <text transform="matrix(1 0 0 1 22.6098 49.8999)" className="a kredity">5</text>
      <text transform="matrix(1 0 0 1 21.6261 35.5)" className="a povinnost">A</text>
      <text id="nazov" transform="matrix(1 0 0 1 69.2908 42.3335)" className="a">Matematika 1</text>
    </g>
    <g id="a2" className="predmet">
      <rect x="218" y="12" onClick={handleList} className="linia st0" width="137.9" height="53"/>
      <rect x="190" y="12" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 200.64 49.8999)" className="b kredity">5</text>
      <text transform="matrix(1 0 0 1 200.1364 35.5)" className="b povinnost">B</text>
      <text id="nazov" transform="matrix(1 0 0 1 248.8929 42.3335)" className="b">Matematika 2</text>
    </g>
    <g id="a3" className="predmet">
      <rect x="396" y="12" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="368" y="12" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 378.64 49.8999)" className="b kredity">4</text>
      <text transform="matrix(1 0 0 1 378.1364 35.5)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 429.2027 35.5)" className="b">Matematická </text>
      <text transform="matrix(1 0 0 1 434.3027 49.8999)" className="b">kartografia</text>
    </g>
    <g id="a5" className="predmet">
      <rect x="724" y="12" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 735.108 50.604)" className="c kredity">2</text>
      <text transform="matrix(1 0 0 1 733.938 34.0623)" className="c povinnost">C</text>
      <rect x="752" y="12" onClick={handleList} className="linia st0" width="137.9" height="53"/>
      <text id="nazov" transform="matrix(1 0 0 1 785.4607 42.3335)" className="c">Matematika 3</text>
    </g>
    <g id="b3" className="predmet">
      <rect x="396" y="77" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="368" y="77" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 378.8923 115.6041)" className="b kredity">3</text>
      <text transform="matrix(1 0 0 1 377.8842 99.0623)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 430.7025 100.8755)" className="b">Planéta Zem </text>
      <text transform="matrix(1 0 0 1 425.9025 115.2755)" className="b">ako geosystém</text>
    </g>
    <g id="b4" className="predmet">
      <rect x="546" y="77" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="574" y="77" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 630.9497 99.5)" className="c">Kurz </text>
      <text transform="matrix(1 0 0 1 606.2497 113.9)" className="c">ArcGIS Online</text>
      <text transform="matrix(1 0 0 1 557.108 115.6041)" className="c kredity">2</text>
      <text transform="matrix(1 0 0 1 555.938 99.0623)" className="c povinnost">C</text>
    </g>
    <g id="b5" className="predmet on">
      <rect x="752" y="77" onClick={handleList} className="linia st0" width="137.9" height="53"/>
      <rect x="724" y="77" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 734.3577 116.0419)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 733.374 99.5)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 793.5428 100.8755)" className="a">Štatistika </text>
      <text transform="matrix(1 0 0 1 761.9428 115.2755)" className="a">pre geoinformatikov</text>
    </g>
    <g id="c1" className="predmet on">
      <rect x="40" y="142" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="12" y="142" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 22.862 180.6041)" className="a kredity">5</text>
      <text transform="matrix(1 0 0 1 21.374 164.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 52.7129 174.2089)" className="a">Základy kartografie</text>
    </g>
    <g id="c2" className="predmet on">
      <rect x="218" y="142" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="190" y="142" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 200.862 180.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 199.374 164.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 223.0988 165.8754)" className="a">Tematická kartografia </text>
      <text transform="matrix(1 0 0 1 237.6988 180.2754)" className="a">v geoinformatike</text>
    </g>
    <g id="c3" className="predmet on">
      <rect x="396" y="142" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="368" y="142" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 378.862 180.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 377.374 164.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 439.8221 165.8755)" className="a">Kurz GIS </text>
      <text transform="matrix(1 0 0 1 432.2221 180.2755)" className="a">technológií</text>
    </g>
    <g id="c4" className="predmet on">
      <rect x="574" y="142" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="546" y="142" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 556.8621 180.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 555.374 164.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 603.6387 174.2089)" className="a">Analýzy v GIS</text>
    </g>
    <g id="c5" className="predmet">
      <rect x="724" y="142" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="752" y="142" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 773.0645 164.5)" className="c">Informačný systém </text>
      <text transform="matrix(1 0 0 1 763.2645 178.9)" className="c">katastra nehnuteľností</text>
      <text transform="matrix(1 0 0 1 735.108 180.6041)" className="c kredity">2</text>
      <text transform="matrix(1 0 0 1 733.938 164.0623)" className="c povinnost">C</text>
    </g>
    <g id="c6" className="predmet">
      <rect x="902" y="142" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="930" y="142" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 938.8008 164.5)" className="c">Národná infraštruktúra </text>
      <text transform="matrix(1 0 0 1 944.8008 178.9)" className="c">priestorových údajov </text>
      <text transform="matrix(1 0 0 1 913.108 180.6041)" className="c kredity">3</text>
      <text transform="matrix(1 0 0 1 911.938 164.0623)" className="c povinnost">C</text>
    </g>
    <g id="d1" className="predmet on">
      <rect x="40" y="207" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="12" y="207" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 22.862 245.6041)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 21.374 229.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 75.0144 230.8755)" className="a">Geografické </text>
      <text transform="matrix(1 0 0 1 46.3144 245.2755)" className="a">informačné systémy 1</text>
    </g>
    <g id="d2" className="predmet on">
      <rect x="218" y="207" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="190" y="207" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 200.862 245.6041)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 199.374 229.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 251.2742 230.8755)" className="a">Geografická  </text>
      <text transform="matrix(1 0 0 1 224.2742 245.2755)" className="a">informačné systémy 2</text>
    </g>
    <g id="d3" className="predmet on">
      <rect x="396" y="207" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="368" y="207" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text id="kredit" transform="matrix(1 0 0 1 378.862 245.6041)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 377.374 229.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 415.9666 230.8755)" className="a">Geografická báza </text>
      <text transform="matrix(1 0 0 1 440.5666 245.2755)" className="a">údajov 1</text>
    </g>
    <g id="d4" className="predmet on">
      <rect x="574" y="207" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="546" y="207" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 556.8621 245.6041)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 555.374 229.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 593.9666 230.8755)" className="a">Geografická báza </text>
      <text transform="matrix(1 0 0 1 618.5666 245.2755)" className="a">údajov 2</text>
    </g>
    <g id="e3" className="predmet">
      <rect x="396" y="272" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <rect x="368" y="272" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 378.8923 310.6041)" className="b kredity">2</text>
      <text transform="matrix(1 0 0 1 377.8842 294.0623)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 424.1146 295.8755)" className="b">Základy tvorby </text>
      <text transform="matrix(1 0 0 1 408.9146 310.2755)" className="b">webových prezentícií</text>
    </g>
    <g id="e4" className="predmet">
      <rect x="546" y="272" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="574" y="272" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 604.1782 294.5)" className="c">Programovanie </text>
      <text transform="matrix(1 0 0 1 596.3782 308.9)" className="c">geoweb aplikácií 1</text>
      <text transform="matrix(1 0 0 1 557.108 310.6041)" className="c kredity">2</text>
      <text transform="matrix(1 0 0 1 555.938 294.0623)" className="c povinnost">C</text>
    </g>
    <g id="e5" className="predmet">
      <rect x="724" y="272" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="752" y="272" onClick={handleList} className="linia st6" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 782.1283 294.5)" className="c">Programovanie </text>
      <text transform="matrix(1 0 0 1 774.3283 308.9)" className="c">geoweb aplikácií 2</text>
      <text transform="matrix(1 0 0 1 735.0581 310.6041)" className="c kredity">2</text>
      <text transform="matrix(1 0 0 1 733.8879 294.0623)" className="c povinnost">C</text>
    </g>
    <g id="f3" className="predmet on">
      <rect x="396" y="337" onClick={handleList} className="linia st8" width="137.9" height="53"/>
      <rect x="368" y="337" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 378.862 375.6041)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 377.374 359.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 425.6443 360.8755)" className="a">Metódy zberu </text>
      <text transform="matrix(1 0 0 1 404.5443 375.2755)" className="a">priestorových údajov</text>
    </g>
    <g id="f4" className="predmet">
      <rect x="574" y="337" onClick={handleList} className="linia st8" width="137.9" height="53"/>
      <rect x="546" y="337" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 556.8923 375.6041)" className="b kredity">3</text>
      <text transform="matrix(1 0 0 1 555.8843 359.0623)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 592.0586 353.7505)" className="b">Zber priestorových </text>
      <text transform="matrix(1 0 0 1 624.6586 368.1505)" className="b">údajov </text>
      <text transform="matrix(1 0 0 1 595.2586 382.5505)" className="b">- terénne cvičenia</text>
    </g>
    <g id="g2" className="predmet on">
      <rect x="218" y="402" onClick={handleList} className="linia st8" width="137.9" height="53"/>
      <rect x="190" y="402" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 200.862 440.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 199.374 424.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 230.0286 425.8755)" className="a">Úvod do diaľkového </text>
      <text transform="matrix(1 0 0 1 238.8286 440.2755)" className="a">prieskumu Zeme</text>
    </g>
    <g id="g4" className="predmet on">
      <rect x="574.1" y="402" onClick={handleList} className="linia st8" width="137.9" height="53"/>
      <rect x="546.1" y="402" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 556.912 440.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 555.4241 424.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 605.2666 418.8755)" className="a">Interpretácia </text>
      <text transform="matrix(1 0 0 1 605.4666 433.2755)" className="a">a klasifikácia </text>
      <text transform="matrix(1 0 0 1 603.2666 447.6755)" className="a">údajov DPZ 1 </text>
    </g>
    <g id="g5" className="predmet on">
      <rect x="752" y="402" onClick={handleList} className="linia st8" width="137.9" height="53"/>
      <rect x="724" y="402" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 734.8619 440.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 733.374 424.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 783.2166 418.8755)" className="a">Interpretácia </text>
      <text transform="matrix(1 0 0 1 783.4166 433.2755)" className="a">a klasifikácia </text>
      <text transform="matrix(1 0 0 1 781.2166 447.6755)" className="a">údajov DPZ 2 </text>
    </g>
    <g id="h1" className="predmet on">
      <rect x="40.1" y="467" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="12.1" y="467" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 22.962 505.6041)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 21.474 489.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 59.1967 499.2089)" className="a">Fyzická geografia</text>
    </g>
    <g id="h2" className="predmet on">
      <rect x="218.1" y="467" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="190.1" y="467" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 200.962 505.6041)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 199.474 489.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 227.5798 499.2087)" className="a">Geomorfológia + cv.</text>
    </g>
    
    <g id="h3" className="predmet on">
      <rect x="396.1" y="467" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="368.1" y="467" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 378.962 505.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 377.474 489.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 425.9782 490.8755)" className="a">Meteorológia </text>
      <text transform="matrix(1 0 0 1 406.7782 505.2755)" className="a">a klimatológia + cv.</text>
    </g>
    <g id="h4" className="predmet on">
      <rect x="574.1" y="467" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="546.1" y="467" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 556.962 505.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 555.474 489.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 590.15 499.2086)" className="a">Biogeografia + cv.</text>
    </g>
    
    <g id="h5" className="predmet on">
      <rect x="752" y="467" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="724" y="467" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 734.8621 505.6041)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 733.374 489.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 768.4288 484.1246)" className="a">Geomorfometria a </text>
      <text transform="matrix(1 0 0 1 782.1288 498.5247)" className="a">kvantitatívna </text>
      <text transform="matrix(1 0 0 1 777.4288 512.9246)" className="a">geomorfológia</text>
    </g>
    <g id="i2" className="predmet on">
      <rect x="218.1" y="532" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="190.1" y="532" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 200.962 570.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 199.474 554.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 256.108 555.8755)" className="a">Geológia a </text>
      <text transform="matrix(1 0 0 1 233.608 570.2755)" className="a">litogeografia + cv.</text>
    </g>

    <g id="i3" className="predmet on">
      <rect x="396.1" y="532" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="368.1" y="532" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 378.962 570.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 377.474 554.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 427.6219 555.8755)" className="a">Hydrológia a </text>
      <text transform="matrix(1 0 0 1 404.8219 570.2755)" className="a">hydrogeografia  + cv.</text>
    </g>
    
    <g id="i4" className="predmet on">
      <rect x="574.1" y="532" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="546.1" y="532" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 556.962 570.6041)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 555.474 554.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 590.7861 562.459)" className="a">Geoekológia + cv.</text>
    </g>
    
    <g id="i5" className="predmet">
      <rect x="752.1" y="532" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="724.1" y="532" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 734.9923 570.6041)" className="b kredity">3</text>
      <text transform="matrix(1 0 0 1 733.9843 554.0623)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 771.3289 555.8755)" className="b">Klimatické zmeny, </text>
      <text transform="matrix(1 0 0 1 780.2289 570.2755)" className="b">hrozby a riziká</text>
    </g>
    <g id="i6" className="predmet">
      <rect x="930.1" y="532" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="902.1" y="532" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 913.2083 570.6041)" className="c kredity">4</text>
      <text transform="matrix(1 0 0 1 912.0381 554.0623)" className="c povinnost">C</text>
      <text transform="matrix(1 0 0 1 957.267 555.8755)" className="c">Natural hazards </text>
      <text transform="matrix(1 0 0 1 975.967 570.2755)" className="c">and risks</text>
    </g>
    <g id="j2" className="predmet">
      <rect x="218.1" y="597" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="190.1" y="597" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 200.9923 635.6041)" className="b kredity">3</text>
      <text transform="matrix(1 0 0 1 199.9843 619.0623)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 258.6106 620.8755)" className="b">Exkurzia z </text>
      <text transform="matrix(1 0 0 1 240.8106 635.2755)" className="b">fyzickej geografie</text>
    </g>
    <g id="j3" className="predmet on">
      <rect x="396.1" y="597" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="368.1" y="597" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 378.962 635.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 377.474 619.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 430.9279 619.5)" className="a">Pedológia a </text>
      <text transform="matrix(1 0 0 1 407.5279 633.9)" className="a">pedogeografia + cv.</text>
    </g>
   
    <g id="j4" className="predmet">
      <rect x="574.1" y="597" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="546.1" y="597" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 556.9923 635.6041)" className="b kredity">3</text>
      <text transform="matrix(1 0 0 1 555.9843 619.0623)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 615.1565 620.8755)" className="b">Exkurzie z </text>
      <text transform="matrix(1 0 0 1 611.5565 635.2755)" className="b">geoekológie</text>
    </g>
    <g id="k4" className="predmet">
      <rect x="574.1" y="662" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="546.1" y="662" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 556.9923 700.6041)" className="b kredity">2</text>
      <text transform="matrix(1 0 0 1 555.9843 684.0623)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 585.1394 694.084)" className="b">Aplikovaná geografia</text>
    </g>
    <g id="k5" className="predmet">
      <rect x="752.1" y="662" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="724.1" y="662" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 734.9923 700.6041)" className="b kredity">4</text>
      <text transform="matrix(1 0 0 1 733.9843 684.0623)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 765.8337 694.084)" className="b">Krajinné plánovanie</text>
    </g>
    <g id="l4" className="predmet">
      <rect id="linia_40_" x="574.1" y="727" onClick={handleList} className="linia st9" width="137.9" height="53"/>
      <rect x="546.1" y="727" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 557.2081 765.6041)" className="c kredity">3</text>
      <text transform="matrix(1 0 0 1 556.038 749.0623)" className="c povinnost">C</text>
      <text transform="matrix(1 0 0 1 595.2195 759.084)" className="c">Geovedná exkurzia</text>
    </g>
    <g id="m1" className="predmet">
      <rect x="40.1" y="792" onClick={handleList} className="linia st10" width="137.9" height="53"/>
      <rect x="12.1" y="792" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 23.208 830.6041)" className="c kredity">3</text>
      <text transform="matrix(1 0 0 1 22.0379 814.0623)" className="c povinnost">C</text>
      <text transform="matrix(1 0 0 1 59.1071 824.2087)" className="c">Všeobecná ekológia</text>
    </g>
    <g id="m3" className="predmet">
      <rect x="396.1" y="792.1" onClick={handleList} className="linia st10" width="137.9" height="53"/>
      <rect x="368.1" y="792.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 379.2081 830.6664)" className="c kredity">3</text>
      <text transform="matrix(1 0 0 1 378.038 814.1245)" className="c povinnost">C</text>
      <text transform="matrix(1 0 0 1 424.509 824.271)" className="c">Klasifikácia pôd</text>
    </g>
    <g id="m4" className="predmet">
      <rect x="574.1" y="792.1" onClick={handleList} className="linia st10" width="137.9" height="53"/>
      <rect x="546.1" y="792.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 557.2081 830.6664)" className="c kredity">2</text>
      <text transform="matrix(1 0 0 1 556.038 814.1245)" className="c povinnost">C</text>
      <text transform="matrix(1 0 0 1 595.3453 815.6245)" className="c">Územná ochrana a </text>
      <text transform="matrix(1 0 0 1 597.3453 830.0245)" className="c">využívanie krajiny</text>
    </g>
    <g id="m5" className="predmet">
      <rect x="752.1" y="792.1" onClick={handleList} className="linia st10" width="137.9" height="53"/>
      <rect x="724.1" y="792.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 735.2081 830.6664)" className="c kredity">3</text>
      <text transform="matrix(1 0 0 1 734.038 814.1245)" className="c povinnost">C</text>
      <text transform="matrix(1 0 0 1 788.6873 824.271)" className="c">Geobotanika</text>
    </g>
    <g id="m6" className="predmet">
      <rect x="930.1" y="792.1" onClick={handleList} className="linia st10" width="137.9" height="53"/>
      <rect x="902.1" y="792.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 913.2081 830.7285)" className="c kredity">3</text>
      <text transform="matrix(1 0 0 1 912.038 814.1868)" className="c povinnost">C</text>
      <text transform="matrix(1 0 0 1 944.1456 815.6868)" className="c">Ochrana a využívanie </text>
      <text transform="matrix(1 0 0 1 951.3456 830.0868)" className="c">prírodných zdrojov</text>
    </g>
    <g id="n1" className="predmet on">
      <rect x="40.1" y="857" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <rect x="12.1" y="857" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 22.962 895.6041)" className="a kredity">3</text>
      <text transform="matrix(1 0 0 1 21.474 879.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 49.8852 889.209)" className="a">Všeobecná geografia</text>
    </g>
    <g id="n2" className="predmet on">
      <rect x="218.1" y="857" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <rect x="190.1" y="857" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 200.962 895.6041)" className="a kredity">5</text>
      <text transform="matrix(1 0 0 1 199.4741 879.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 259.3961 880.8755)" className="a">Geografia </text>
      <text transform="matrix(1 0 0 1 253.2961 895.2754)" className="a">Slovenska 1</text>
    </g>
    <g id="n3" className="predmet on">
      <rect x="396.1" y="857" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <rect x="368.1" y="857" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 378.962 895.6041)" className="a kredity">5</text>
      <text transform="matrix(1 0 0 1 377.474 879.0623)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 437.3962 880.8755)" className="a">Geografia </text>
      <text transform="matrix(1 0 0 1 431.2962 895.2755)" className="a">Slovenska 2</text>
    </g>
    <g id="o1" className="predmet">
      <rect x="40.1" y="922" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <rect x="12.1" y="922" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 22.9923 960.6041)" className="b kredity">2</text>
      <text transform="matrix(1 0 0 1 21.9843 944.0623)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 68.281 945.8755)" className="b">Úvod do štúdia </text>
      <text transform="matrix(1 0 0 1 78.981 960.2755)" className="b">demografie</text>
    </g>
    <g id="o2" className="predmet">
      <rect x="190.1" y="922" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="218.1" y="922" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 248.7412 944.5)" className="c">Demogeografia </text>
      <text transform="matrix(1 0 0 1 249.1412 958.9)" className="c">a demografia 1</text>
      <text transform="matrix(1 0 0 1 201.2331 960.6041)" className="c kredity">5</text>
      <text transform="matrix(1 0 0 1 200.063 944.0623)" className="c povinnost">C</text>
    </g>
    <g id="o3" className="predmet">
      <rect x="368.1" y="922" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 379.1831 960.6041)" className="c kredity">4</text>
      <text transform="matrix(1 0 0 1 378.013 944.0623)" className="c povinnost">C</text>
      <rect x="396.1" y="922" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 425.4814 954.209)" className="c">Geografia sídiel</text>
    </g>
    <g id="o4" className="predmet">
      <rect x="546.1" y="922" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="574.1" y="922" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 618.3662 944.5)" className="c">Geografia </text>
      <text transform="matrix(1 0 0 1 599.0662 958.9)" className="c">cestovného ruchu</text>
      <text transform="matrix(1 0 0 1 557.2081 960.6041)" className="c kredity">5</text>
      <text transform="matrix(1 0 0 1 556.038 944.0623)" className="c povinnost">C</text>
    </g>
    <g id="p1" className="predmet">
      <rect x="40.1" y="987" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <rect x="12.1" y="987" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 22.9923 1025.6041)" className="b kredity">2</text>
      <text transform="matrix(1 0 0 1 21.9843 1009.0623)" className="b povinnost">B</text>
      <text transform="matrix(1 0 0 1 51.5769 1010.8755)" className="b">Úvod do ekonomickej </text>
      <text transform="matrix(1 0 0 1 54.0769 1025.2755)" className="b">a sociálnej geografie</text>
    </g>
    <g id="p2" className="predmet">
      <rect x="190.1" y="987" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="218.1" y="987" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 231.2095 1009.5)" className="c">Ekonomická geografia </text>
      <text transform="matrix(1 0 0 1 232.5095 1023.9)" className="c">a geografia priemyslu</text>
      <text transform="matrix(1 0 0 1 201.233 1025.6041)" className="c kredity">4</text>
      <text transform="matrix(1 0 0 1 200.0629 1009.0623)" className="c povinnost">C</text>
    </g>
    <g id="p3" className="predmet">
      <rect x="396.1" y="987.1" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <rect x="368.1" y="987.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 379.2081 1025.6664)" className="c kredity">4</text>
      <text transform="matrix(1 0 0 1 378.038 1009.1245)" className="c povinnost">C</text>
      <text transform="matrix(1 0 0 1 416.813 1004.1869)" className="c">Geografia dopravy, </text>
      <text transform="matrix(1 0 0 1 439.313 1018.5869)" className="c">logistiky a </text>
      <text transform="matrix(1 0 0 1 425.013 1032.9869)" className="c">telekomunikácií</text>
    </g>
    <g id="p4" className="predmet">
      <rect x="574.1" y="987.1" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <rect x="546.1" y="987.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 557.1581 1025.6664)" className="c kredity">4</text>
      <text transform="matrix(1 0 0 1 555.9879 1009.1245)" className="c povinnost">C</text>
      <text transform="matrix(1 0 0 1 618.3665 1004.1869)" className="c">Geografia </text>
      <text transform="matrix(1 0 0 1 594.4665 1018.5869)" className="c">poľnohospodárstva </text>
      <text transform="matrix(1 0 0 1 581.9665 1032.9869)" className="c">a lesného hospodárstva </text>
    </g>
    <g id="q2" className="predmet">
      <rect x="190.1" y="1052" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="218.1" y="1052" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 241.8057 1074.5)" className="c">Úvod do politickej </text>
      <text transform="matrix(1 0 0 1 229.3057 1088.9)" className="c">a regionálnej geografie</text>
      <text transform="matrix(1 0 0 1 201.2331 1090.604)" className="c kredity">3</text>
      <text transform="matrix(1 0 0 1 200.063 1074.0623)" className="c povinnost">C</text>
    </g>
    <g id="q4" className="predmet">
      <rect x="574.1" y="1052.1" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <rect x="546.1" y="1052.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 557.2085 1090.6663)" className="c kredity">2</text>
      <text transform="matrix(1 0 0 1 556.0383 1074.1245)" className="c povinnost">C</text>
      <text transform="matrix(1 0 0 1 594.6875 1069.1868)" className="c">Ochrana svetového </text>
      <text transform="matrix(1 0 0 1 610.2875 1083.5868)" className="c">prírodného a </text>
      <text transform="matrix(1 0 0 1 588.6875 1097.9868)" className="c">kultúrneho dedičstva </text>
    </g>
    <g id="q6" className="predmet">
      <rect x="902.1" y="1052" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="930.1" y="1052" onClick={handleList} className="linia st11" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 969.6981 1074.5)" className="c">Geografia a </text>
      <text transform="matrix(1 0 0 1 947.7981 1088.9)" className="c">manažment inovácií</text>
      <text transform="matrix(1 0 0 1 913.208 1090.604)" className="c kredity">2</text>
      <text transform="matrix(1 0 0 1 912.038 1074.0623)" className="c povinnost">C</text>
    </g>
    <g id="r1" className="predmet on">
      <rect x="12.1" y="1117" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="40.1" y="1117" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 81.6564 1149.0837)" className="a">PC kurz 1</text>
      <text transform="matrix(1 0 0 1 22.962 1155.604)" className="a kredity">1</text>
      <text transform="matrix(1 0 0 1 21.474 1139.0623)" className="a povinnost">A</text>
    </g>
    <g id="r5" className="predmet on">
      <rect x="724.2" y="1117" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="752.2" y="1117" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 793.7563 1149.0837)" className="a">PC kurz 2</text>
      <text transform="matrix(1 0 0 1 735.062 1155.604)" className="a kredity">1</text>
      <text transform="matrix(1 0 0 1 733.574 1139.0621)" className="a povinnost">A</text>
    </g>
    <g id="s5" className="predmet on">
      <rect x="752.2" y="1182.1" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <rect x="724.2" y="1182.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 735.037 1220.6663)" className="a kredity">2</text>
      <text transform="matrix(1 0 0 1 733.549 1204.1244)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 757.5579 1199.1868)" className="a">Seminár k bakalárskej </text>
      <text transform="matrix(1 0 0 1 773.6579 1213.5868)" className="a">práci z geografie </text>
      <text transform="matrix(1 0 0 1 763.6579 1227.9868)" className="a">a geoinformatiky 1  </text>
    </g>
    <g id="s6" className="predmet on">
      <rect x="930.2" y="1182" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <rect x="902.2" y="1182" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 913.0125 1220.604)" className="a kredity">2</text>
      <text transform="matrix(1 0 0 1 911.5244 1204.062)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 935.5333 1199.1245)" className="a">Seminár k bakalárskej </text>
      <text transform="matrix(1 0 0 1 951.6333 1213.5245)" className="a">práci z geografie </text>
      <text transform="matrix(1 0 0 1 941.6333 1227.9246)" className="a">a geoinformatiky 1  </text>
    </g>
    <g id="t5" className="predmet on">
      <rect x="752.2" y="1246.9" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <rect x="724.2" y="1246.9" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 735.037 1285.5417)" className="a kredity">2</text>
      <text transform="matrix(1 0 0 1 733.549 1268.9998)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 761.0562 1269.4374)" className="a">Samostatná práca na </text>
      <text transform="matrix(1 0 0 1 765.5562 1283.8374)" className="a">bakalárskej téme 1 </text>
    </g>
    <g id="t6" className="predmet on">
      <rect x="930.1" y="1246.9" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <rect x="902.1" y="1246.9" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 912.9874 1285.5417)" className="a kredity">4</text>
      <text transform="matrix(1 0 0 1 911.4994 1268.9998)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 939.0066 1269.4374)" className="a">Samostatná práca na </text>
      <text transform="matrix(1 0 0 1 943.5066 1283.8374)" className="a">bakalárskej téme 2 </text>
    </g>
    <g id="u1" className="predmet on">
      <rect x="12.1" y="1312.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="40.1" y="1312.1" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 66.1045 1335.7715)" className="a">Zaraďovací test </text>
      <text transform="matrix(1 0 0 1 59.5045 1350.1715)" className="a">z cudzieho jazyka</text>
      <text transform="matrix(1 0 0 1 22.9124 1350.7084)" className="a kredity">1</text>
      <text transform="matrix(1 0 0 1 21.4244 1334.1665)" className="a povinnost">A</text>
    </g>
    <g id="u5" className="predmet">
      <rect x="724.2" y="1311.9" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="752.2" y="1311.9" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 772.3785 1334.4375)" className="c">Anglický / nemecký </text>
      <text transform="matrix(1 0 0 1 803.1785 1348.8375)" className="c">jazyk 1</text>
      <text transform="matrix(1 0 0 1 735.3577 1350.5419)" className="c kredity">2</text>
      <text transform="matrix(1 0 0 1 734.1875 1334)" className="c povinnost">C</text>
    </g>
    <g id="u6" className="predmet">
      <rect x="902.2" y="1311.9" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="930.2" y="1311.9" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 950.3044 1334.4375)" className="c">Anglický / nemecký </text>
      <text transform="matrix(1 0 0 1 981.1044 1348.8375)" className="c">jazyk 2</text>
      <text transform="matrix(1 0 0 1 913.2836 1350.5419)" className="c kredity">3</text>
      <text transform="matrix(1 0 0 1 912.1134 1334)" className="c povinnost">C</text>
    </g>
    <g id="v1" className="predmet">
      <rect x="12.1" y="1377.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="40.1" y="1377.1" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 62.8573 1409.188)" className="c">Telesná výchova 1</text>
      <text transform="matrix(1 0 0 1 23.1585 1415.7084)" className="c kredity">1</text>
      <text transform="matrix(1 0 0 1 21.9884 1399.1665)" className="c povinnost">C</text>
    </g>
    <g id="v2" className="predmet">
      <rect x="190.1" y="1377.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="218.1" y="1377.1" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 240.8824 1409.1881)" className="c">Telesná výchova 2</text>
      <text transform="matrix(1 0 0 1 201.1835 1415.7085)" className="c kredity">1</text>
      <text transform="matrix(1 0 0 1 200.0134 1399.1665)" className="c povinnost">C</text>
    </g>
    <g id="v3" className="predmet">
      <rect x="368.1" y="1377.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="396.1" y="1377.1" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 418.9073 1409.188)" className="c">Telesná výchova 3</text>
      <text transform="matrix(1 0 0 1 379.2086 1415.7084)" className="c kredity">1</text>
      <text transform="matrix(1 0 0 1 378.0385 1399.1665)" className="c povinnost">C</text>
    </g>
    <g id="v4" className="predmet">
      <rect x="546.1" y="1377.1" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="574.1" y="1377.1" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 596.9324 1409.1881)" className="c">Telesná výchova 4</text>
      <text transform="matrix(1 0 0 1 557.2335 1415.7085)" className="c kredity">1</text>
      <text transform="matrix(1 0 0 1 556.0634 1399.1665)" className="c povinnost">C</text>
    </g>
    <g id="v5" className="predmet">
      <rect x="724.2" y="1377.2" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="752.2" y="1377.2" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 774.9573 1409.2504)" className="c">Telesná výchova 5</text>
      <text transform="matrix(1 0 0 1 735.2584 1415.7708)" className="c kredity">1</text>
      <text transform="matrix(1 0 0 1 734.0884 1399.2288)" className="c povinnost">C</text>
    </g>
    <g id="v6" className="predmet">
      <rect x="902.2" y="1377.2" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <rect x="930.2" y="1377.2" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <text transform="matrix(1 0 0 1 952.9823 1409.2505)" className="c">Telesná výchova 6</text>
      <text transform="matrix(1 0 0 1 913.2834 1415.7708)" className="c kredity">1</text>
      <text transform="matrix(1 0 0 1 912.1134 1399.2289)" className="c povinnost">C</text>
    </g>
    <g id="w6" className="predmet on">
      <rect x="930.2" y="1442.2" onClick={handleList} className="linia st12" width="137.9" height="53"/>
      <rect x="902.2" y="1442.2" onClick={handleVyber} className="vyber" width="28" height="53"/>
      <text transform="matrix(1 0 0 1 913.037 1481.7705)" className="a kredity">8</text>
      <text transform="matrix(1 0 0 1 912.1134 1465.2289)" className="a povinnost">A</text>
      <text transform="matrix(1 0 0 1 971.5874 1464.6663)" className="a">Obhajoba </text>
      <text transform="matrix(1 0 0 1 948.8874 1479.0663)" className="a">bakalárskej práce</text>
    </g>
  </svg>
) 
