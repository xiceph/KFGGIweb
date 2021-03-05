import { promises as fs } from 'fs';
import path from 'path';
import Info from "@components/personalInfo";

function Zamestnanec({ person }) {
  return (
    <article>
      <h1>{person.name}</h1>
      <div className="-mt-3 mb-6 font-bold">{person.position}</div>
      <Info person={person} />
    </article>
  );
} 

export async function getStaticPaths() {
 
  const dataDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(`${dataDirectory}/zamestnanci.json`, 'utf8');
  const data = JSON.parse(fileContents);

  const paths = data.map( item => (
    { params: { short: `${encodeURIComponent(item.short)}` } }
  ));
  
  return {
    paths: paths,
    fallback: false 
  };
}

export async function getStaticProps(context) {

  const dataDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(`${dataDirectory}/zamestnanci.json`, 'utf8');
  const data = JSON.parse(fileContents);
  
  const person = data.find(item => item.short == context.params.short);
  
  const photoDirectory = path.join(process.cwd(), 'public/photos/person');
  const photoAccess = await fs.access(`${photoDirectory}/${person.id}.jpg`)
    .then(() => true)
    .catch(() => false)
  
  if( photoAccess) {
    person.photo = `${person.id}.jpg`;
  }
  
  return {
    props: { person }, 
  }
}

export default Zamestnanec
 
