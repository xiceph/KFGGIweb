import { useState } from 'react'; 
import Link from "next/link";
import { SchemaPredmety } from "@components/schemaPredmety";

function Predmety() {
  const [sums, setSums] = useState({})
  
  const calcSums = () => {
    const select = document.querySelectorAll('.predmet.on');
    let sum = [0,0,0,0,0,0];
    let sumB = [0,0,0,0,0,0];
    select.forEach(item => {
      const year = item.id.substring(1);
      console.log(year)
      const kredit = parseInt(item.querySelector('.kredity').textContent, 10);
      const pov = item.querySelector('.povinnost').textContent;
      sum[year-1] += kredit;
      if(pov == 'B'){
        sumB[year-1] += kredit;
      }
    })
    setSums({all: sum, b: sumB});
  }
  
  return (
    <div className="w-full">
      <h1>Predmety bakalárskeho štúdia</h1>
      <div>
      {JSON.stringify(sums)}
      </div>
      <div className="w-full overflow-y-auto">
        <SchemaPredmety className="predm" onClick={calcSums} />
      </div>
    </div>
  )
}



export default Predmety
