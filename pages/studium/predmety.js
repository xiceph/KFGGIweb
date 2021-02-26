import { promises as fs } from 'fs';
import path from 'path';
import Link from "next/link";

function Predmety({ data }) {
  
  return (
    <div className="w-full">
      <h1>Zoznam predmetov bakalárskeho štúdia</h1>
      <dl>
        {data.map( item => (
          <>
            <dt key={item.addr}>
              <Link href={`/studium/predmety/${item.addr}`}>
                {item.name}
              </Link>
            </dt>
            <dd key={`${item.addr}_d`} className="mb-3">{`vyučujúci: ${item.teacher}, typ: povinne voliteľný, kredity: 5, semester: Z`}</dd>
          </>
        ))}
      </dl>
    </div>
  )
}

export async function getStaticProps(context) {

  const dataDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(`${dataDirectory}/predmety.json`, 'utf8');
  const data = JSON.parse(fileContents);

  return {
    props: { data }, 
  }
}

export default Predmety
