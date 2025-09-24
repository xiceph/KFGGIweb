import { useState, useEffect } from 'react'; 
import Link from "next/link";
import Separator from "@components/separator";
import { SchemaPredmety, LegendaPredmety } from "@components/schemaPredmety";

function Subjects() {
  const [sums, setSums] = useState({all: [22,22,25,17,16,14], b: 0})
  
  const toOrdinalSuffix = (n) => {
    if (n === 1) return "st";
    if (n === 2) return "nd";
    if (n === 3) return "rd";
    return "th";
  };
  
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
      <h1>Subjects</h1>
      <h2>Subjects of the Bachelor's study programme</h2>
      <p>The following schedule will help you to choose your own subject combination. The button of each subject will open a brief describtion while the ribbon on the left adds the subject to your list.</p>
      <div>
        Credits in total (min 180): <b>{all}</b>,{`  `}
        for "B" subjects (min 19): <b>{sums.b}</b>
      </div>
      <div className="w-full overflow-y-auto">
        <div className="predm flex flex-row px-2 md:px-1">
        {
          sums.all.map((item, i) => (
            <div key={i} className="flex-1 px-2 pt-2 pb-1">{i + 1}<sup>{toOrdinalSuffix(i + 1)}</sup> semester{` `} 
              <b>{sums.all[i]}</b>
            </div>
          ))
        }
        </div>
        <SchemaPredmety className="predm" onClick={calcSums} />
      </div>
      <LegendaPredmety locale="en" />
      <Separator size="sm" position="left" />
      <p className="text-ext">We strongly recommend distributing credits equally through the whole span of the study. Recommended is 30 credits per one semester; however, the last semester is demanding in terms of finishing the bachelor's thesis, and therefore a lower amount of planned subjects is adviced. To prevent the potential troubles in the final semester, it is wise to plan for slightly more credits than 180. Please note that some optional ("C") subjects can collide in your schedule, and so you won't have the chance to attend them. However, you can also sign on the subjects from different study programmes.</p>
      
      <h2>Subjects of the Master's study programme</h2>
      <p><a href="https://sluzby.fmph.uniba.sk/infolist-prif/en/sp_mZ-FI.html" target="_blank">List of the subjects</a> on the study programme "Physical Geography and Geoinformatics"</p>
      
      <h2>Subjects of the Doctoral study programme</h2>
      <p><a href="https://sluzby.fmph.uniba.sk/infolist-prif/en/sp_dFGG.html" target="_blank">List of the subjects</a> on the study programme "Physical Geography, Geoecology, and Geoinformatics"</p>
    </div>
  )
}



export default Subjects
