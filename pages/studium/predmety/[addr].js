import { promises as fs } from 'fs';
import path from 'path';
import Link from "next/link";

const teachDirectory = path.join(process.cwd(), '/public/teach_agW2r4');

function Predmet({ fileContents }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: fileContents }} />
  );
}

export async function getStaticPaths() {
 
  const list = await fs.readdir(teachDirectory, { withFileTypes: true });
  
  const directories = list.filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const paths = directories.map( dir => (
    { params: { addr: dir } }
  ));
  
  return {
    paths: paths,
    fallback: false 
  };
}


export async function getStaticProps(context) {

  const fileContents = await fs.readFile(`${teachDirectory}/${context.params.addr}/index.htm`, 'utf8');

  return {
    props: { fileContents }, 
  }
}

export default Predmet
