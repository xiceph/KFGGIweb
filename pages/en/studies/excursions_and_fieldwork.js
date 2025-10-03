import { promises as fs } from 'fs';
import path from 'path';
import Gallery from "@components/gallery";

function ExcursionsAndFieldwork({ photos }) {
  return (
    <article>
      <h1>Excursions and fieldwork</h1>
      
      <p>It is outside the building of the faculty, where a significant part of our studies takes place. Excursions across Slovakia or even abroad enable our students to explore landscape in all its complexity, which cannot be sufficiently described in any textbook. Participation in fieldwork not only evolves the practical skills of our students but also is often a part of real ongoing research.</p>

      <h3>Geological excursion 2026</h3>
      <p><b>Discover that Hungary is not just an endless plain</b> June 15 – 19, 2026 (5 days)<br/>More information in the <a href="/docs/geo2026.pdf" target="_blank">pdf document</a></p>

      <h3>Geographic excursion 2025</h3>
      <p><b>Glaciers in the Alps, Adriatic Sea, Slovenian Karst</b> June 16. – 20., 2024 (5 days)<br/>More information in this <a href="/docs/geo2025.pdf" target="_blank">document</a> and in the <a href="https://storymaps.arcgis.com/stories/1ff59abc71304001a8766bfa112e0ced?play=true&speed=slow" target="_blank">storymap by Tomáš Lalík</a></p>

      <h3>Geographic excursion 2024</h3>
      <p><b>Karlove Vary and its surroundings, Bavaria</b> June 17. – 21., 2024 (5 days)<br/>More information in this <a href="/docs/geo2024.pdf" target="_blank">document</a>.</p>

      
      <h3>Geographic excursion 2023</h3> 
      <p><b>Austria and northeastern Italy</b> June 19. – 23., 2023 (5 days)<br/>More information in this <a href="/docs/geo2023.pdf" target="_blank">document</a>.</p>
      
      <h3>Gallery</h3>
      <p>Pictures from our previous excursions:</p>
      
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
      src: `/photos/galleries/${gallery}/400/${item.name}`,
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
 
 export default ExcursionsAndFieldwork
