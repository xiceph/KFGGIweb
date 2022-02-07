import path from 'path';
import Link from "next/link";

function Predmety() {
  
  return (
    <div className="w-full">
      <h1>Predmety bakalárskeho štúdia</h1>
      <div className="w-full overflow-y-auto">
        <img className="predm" src="images/predmety.svg"/>
      </div>
    </div>
  )
}



export default Predmety
