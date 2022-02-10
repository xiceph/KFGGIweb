import { useState, useEffect } from 'react'; 
import Link from "next/link";
import Separator from "@components/separator";
import { SchemaPredmety, LegendaPredmety } from "@components/schemaPredmety";

function Predmety() {
  const [sums, setSums] = useState({all: [23,22,25,17,16,14], b: 0})
  
//   useEffect(() => {
//     calcSums();
//     console.log('reload');
//   }) 
  
  const calcSums = () => {
    const select = document.querySelectorAll('.predmet.on');
    let sum = [0,0,0,0,0,0];
    let sumB = 0;
    select.forEach(item => {
      const year = item.id.substring(1);
      const kredit = parseInt(item.querySelector('.kredity').textContent, 10);
      const pov = item.querySelector('.povinnost').textContent;
      sum[year-1] += kredit;
      if(pov == 'B'){
        sumB += kredit;
      }
    })
    setSums({all: sum, b: sumB});
    console.log('calc');
  }
  const all = sums.all.reduce((a, b) => a + b, 0);
  
  return (
    <div className="w-full">
      <h1>Predmety</h1>
      <h2>Predmety bakalárskeho štúdia</h2>
      <p>Prehľadná schéma ponuky programu uľahčujúca výber vlastnej kombinácie predmetov. Tlačidlo predmetu otvorí jeho infolist, pomocou ľavého pruhu predmet pridáte do svojho výberu.</p>
      <div>
        Kredity spolu (min 180): <b>{all}</b>,{`  `}
        za B predmety (min 19): <b>{sums.b}</b>
      </div>
      <div className="w-full overflow-y-auto">
        <div className="predm flex flex-row px-2 md:px-1">
        {
          sums.all.map((item, i) => (
            <div key={i} className="flex-1 px-2 pt-2 pb-1">{i+1}. semester{` `} 
              <b>{sums.all[i]}</b>
            </div>
          ))
        }
        </div>
        <SchemaPredmety className="predm" onClick={calcSums} />
      </div>
      <LegendaPredmety />
      <Separator size="sm" position="left" />
      <p className="text-ext">Odporúčame rozložiť kreditovú záťaž na celú dobu štúdia. Priemer je 30 kreditov za semester, no časť záťaže z posledného semestra je lepšie preložiť na skoršie semestre. Je dobré mať naplánovanú malú rezervu kreditov. Tiež treba rátať s tým, že niektoré výberové predmety sa môžu v rozvrhu kryť s inými predmetmi tak, že ich nebudete môcť absolvovať. Ako výberové si však máte možnosť zapísať aj predmety z ponuky iných študijných programov.</p>
      
      <h2>Predmety magisterského štúdia</h2>
      <p><a href="docs/predmetyMgr.pdf" target="_blank">Zoznam predmetov študijného programu fyzická geografia a geoinformatika</a></p>
      
      <h2>Predmety doktorandského štúdia</h2>
      <p><a href="docs/predmetyPhD.pdf" target="_blank">Zoznam predmetov študijného programu fyzická geografia, geoekológia a geoinformatika</a></p>
    </div>
  )
}



export default Predmety
