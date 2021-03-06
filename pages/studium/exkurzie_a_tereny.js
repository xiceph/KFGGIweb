import { promises as fs } from 'fs';
import path from 'path';
import Gallery from "@components/gallery";

function Exkurzie({ photos }) {
  return (
    <article>
      <h1>Exkurzie a terény</h1>
      
      <p>Podstatná časť nášho štúdia prebieha mimo prednáškových sál. Exkurzie umožňujú zažiť prednášané učivo na vlastnej koži - v rámci Slovenska aj za jeho hranicami. Terénne práce sú však už praktickým tréningom terénnych výskumných postupov.</p>
      
      <Gallery photos={photos} />
    </article>
  );
} 
 
export async function getStaticProps(context) {

  const gallery = 'exk_teren';
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
 
 export default Exkurzie
