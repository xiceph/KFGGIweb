import Contents from "@components/contents";
import Email from "@components/email";
import { OpenExt } from "@components/icons";

export default function ArchivesLibrary() {
  return (
    <article>
      <h1>Archives and library</h1>
      <Contents levels={1} >
        <h3>Library</h3>
        <p>Library of the Department consists of two parts:</p>
        <p><b>FYZ library</b> includes mostly literature related to physical geography and geoecology for the students and employees of the Department.</p> 
        <p><a href="https://liveuniba.sharepoint.com/:x:/s/Katedrafyzickejgeografieageoekolgie/EfC-TjTSDhpHkZQZNORKE0IBj19BI43et_DIHs3HjHggSQ?e=CmWaP2&isSPOFile=1" target="_blank">Catalogue <OpenExt /></a></p>
        <p className="mb-f8">For your requests in the "FYZ" library, please contact Zora Machová, room B1-449, <Email parts={["zora.machova"]} /></p>
        
        <p><b>GIS library</b> is available for the students and employees of the Department, as well as all the employees of the Faculty of Natural Sciences. 
        The library includes both domestic and national publications related to cartography, geoinformatics, photogrammetry, remote sensing, mathematics, and physics.</p>
        <p>To become a member of the "GIS" library, you should fill out the form provided by a library administrator (for the registration, ID is required).</p>
        <p><a href="https://gis.fns.uniba.sk/?knkatalog" target="_blank">Catalogue <OpenExt /></a></p>
        <p>For your requests in the "GIS" library, please contact Vladimír Pelech, room G-23, <Email parts={["pelech2"]} /></p>
        
        <h5>Requests</h5>
        <p> For your literature requests, please contact the corresponding library administrator.</p>
        
        
        <h3>Archive of theses</h3>
        <p>This library includes all the theses defended in our Department, on different degrees (bachelor's, master's, dissertation, rigorous, inaugural ...).</p>
        <p><a href="https://liveuniba.sharepoint.com/:x:/s/Katedrafyzickejgeografieageoekolgie/Ea1c62QzbatOhlD4JSRBwOMBp52XQd2k3X_c_9RcZQRKEw?e=lzb3St&isSPOFile=1" target="_blank">Catalogue <OpenExt /></a></p>
        <p>Theses can be studied only personally in the Department. For the interested person, the conference room (B1-444) will be accessed.</p>
        <p>For your requests in the theses library, please contact Zora Machová, room B1-449, <Email parts={["zora.machova"]} /></p>
        
        <h3>Archive of maps </h3>
        <h5>Topographic maps</h5>
        <p>Selected maps of Slovakia and former Czechoslovakia, e.g., Základná mapa ČSSR / ČSFR / SR v mierkovom rade 1:200 000 až 1:10 000, Štátna mapa odvodená 1:5 000, Vojenská topografická mapa v Gaussovom-Krügerovom zobrazení v mierkovom rade 1:200 000 až 1:5 000 and other.</p>
        <h5>Thematic maps</h5>
        <p>Different maps from the fields of geology, geobotany, geomorphology; hiking maps, atlases and other.</p>
        <p>These maps are provided exclusively to the students working on the related theses.</p>
        <p>For your requests in the archive of maps, please contact Alexandra Benová, room G-21, <Email parts={["alexandra.benova"]} /></p>
      
      </Contents>
    </article>
  );
} 
