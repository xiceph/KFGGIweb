import { promises as fs } from 'fs';
import path from 'path';
import Gallery from "@components/gallery";

function Teren({ photos }) {
  return (
    <article>
      <h1>Práca v teréne</h1>
      
      <p>Vlastné terénne dáta sú základom väčšiny našich výskumných projektov. Našťastie. V teréne sa totiž cítime najlepšie.</p>
      
      <Gallery photos={photos} />
    </article>
  );
} 
 
export async function getStaticProps(context) {

  const gallery = 'vysk_teren';
  const dataDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(`${dataDirectory}/galleries/${gallery}.json`, 'utf8');
  const data = JSON.parse(fileContents);
  
  const photos = data.map( item => (
    {
      src: `photos/galleries/${gallery}/400/${item.name}`,
      /*srcSet: [
        `photos/galleries/${gallery}/600/${item.name} 600w`,
        `photos/galleries/${gallery}/1024/${item.name} 1024w`,
      ],
      sizes: ["(min-width: 640px) 320px, (min-width: 1024px) 300px, 100vw"],*/
      width: item.width,
      height: item.height
    }
  ))

  return {
    props: { photos }, 
  }
}
 
 export default Teren
