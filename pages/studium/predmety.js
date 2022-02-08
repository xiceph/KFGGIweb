import { useState, useEffect } from 'react'; 
import Link from "next/link";
import { SchemaPredmety, LegendaPredmety } from "@components/schemaPredmety";

function Predmety() {
  const [sums, setSums] = useState({all: [0,0,0,0,0,0], b: 0})
  
  useEffect(() => {
    calcSums();
  }) 
  
  const calcSums = () => {
    const select = document.querySelectorAll('.predmet.on');
    let sum = [0,0,0,0,0,0];
    let sumB = 0;
    select.forEach(item => {
      const year = item.id.substring(1);
      console.log(year)
      const kredit = parseInt(item.querySelector('.kredity').textContent, 10);
      const pov = item.querySelector('.povinnost').textContent;
      sum[year-1] += kredit;
      if(pov == 'B'){
        sumB += kredit;
      }
    })
    setSums({all: sum, b: sumB});
  }
  const all = sums.all.reduce((a, b) => a + b, 0);
  
  return (
    <div className="w-full">
      <h1>Predmety bakalárskeho štúdia</h1>
      <div>
        Kredity spolu (min 180): <b>{all}</b>{`   `}
        za B predmety (min 19): <b>{sums.b}</b>
      </div>
      <div className="w-full overflow-y-auto">
        <div className="predm flex flex-row px-2 md:px-1">
        {
          sums.all.map((item, i) => (
            <div className="flex-1 px-2 pt-2 pb-1">{i+1}. semester{` `} 
              <b>{sums.all[i]}</b>
            </div>
          ))
        }
        </div>
        <SchemaPredmety className="predm" onClick={calcSums} />
      </div>
      <LegendaPredmety />
    </div>
  )
}



export default Predmety
