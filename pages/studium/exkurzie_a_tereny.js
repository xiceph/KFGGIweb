import { promises as fs } from 'fs';
import path from 'path';
import Gallery from "@components/gallery";

function Exkurzie({ photos }) {
  return (
    <article>
      <h1>Exkurzie a terény</h1>
      
      <p>Podstatná časť nášho štúdia prebieha mimo prednáškových sál. Exkurzie umožňujú zažiť prednášané učivo na vlastnej koži - v rámci Slovenska aj za jeho hranicami. Terénne práce sú však už praktickým tréningom terénnych výskumných postupov.</p>

      <h3>Geovedná exkurzia 2025</h3>
      <p><b>K ustupujúcim horským ľadovcom Álp, do krasu a k Jadranskému moru</b> 16. – 20. júna 2024 (5 dní)<br/>Viac informácií <a href="docs/geo2025.pdf" target="_blank">v pdf dokumente</a></p>

      <h3>Geovedná exkurzia 2024</h3>
      <p><b>Za geovednými fenoménmi Karlovarska a priľahlého Bavorska</b> 17. – 21. júna 2024 (5 dní)<br/>Viac informácií <a href="docs/geo2024.pdf" target="_blank">v pdf dokumente</a></p>

      
      <h3>Geovedná exkurzia 2023</h3> 
      <p><b>Za geovednými fenoménmi Rakúska a SV Talianska</b> 19. – 23. júna 2023 (5 dní)<br/>Viac informácií <a href="docs/geo2023.pdf" target="_blank">v pdf dokumente</a></p>
      
      <h3>Galéria</h3>
      <p>Obrázky z predchádzajúcich exkurzií:</p>
      
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
