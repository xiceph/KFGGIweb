import { promises as fs } from 'fs';
import path from 'path';
import Link from "next/link";
import Email from "@components/email";
import { Door, Tel, At } from "@components/icons";

function Doktorandi({ data }) {
  return (
    <article>
      <h1>Zoznam doktorandov</h1>
      <dl>
        {data.map( item => (
          <>
            <dt key={item.id}>
              <Link href={`/katedra/doktorandi/${encodeURIComponent(item.short)}`}>
                {item.name}
              </Link>
            </dt>
            <dd key={`${item.id}_d`} className="mb-6">
              <span className="inline-block mr-4">
                <Door className="text-gray-400" />
                {item.room || ''}
              </span>
              <span className="inline-block mr-4"> 
                <Tel className="text-gray-400" />
                {item.tel || ''}
              </span>
              <span className="inline-block">
                <At className="text-gray-400" />
                <Email parts={item.email} />
              </span>
            </dd>
          </>
        ))}
      </dl>
      
    </article>
  );
} 

export async function getStaticProps(context) {

  const dataDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(`${dataDirectory}/doktorandi.json`, 'utf8');
  const data = JSON.parse(fileContents);

  return {
    props: { data }, 
  }
}

export default Doktorandi
