import { promises as fs } from 'fs';
import path from 'path';
import Info from "@components/personalInfo";

function Doktorand({ person }) {
  return (
    <article>
      <h1>{person.name}</h1>
      <Info 
        room={person.room}
        tel={person.tel}
        email={person.email}
      >
      </Info>
    </article>
  );
} 

export async function getStaticPaths() {
 
  const dataDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(`${dataDirectory}/doktorandi.json`, 'utf8');
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
  const fileContents = await fs.readFile(`${dataDirectory}/doktorandi.json`, 'utf8');
  const data = JSON.parse(fileContents);
  
  const person = data.find(item => item.short == context.params.short);

  return {
    props: { person }, 
  }
}

export default Doktorand
 
