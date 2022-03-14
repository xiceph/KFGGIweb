import Contents from "@components/contents";
import Email from "@components/email";
import { OpenExt } from "@components/icons";

export default function Archivy() {
  return (
    <article>
      <h1>Archívy a knižnica</h1>
      <Contents levels={1} >
        <h3>Knižnica</h3>
        <p>Knižnica katedry má dve časti.</p>
        <p><b>Knižnica FYZ</b> obsahuje prevažne literatúru z fyzickej geografie a geoekológie pre štúdium zamestnancov a študentov katedry.</p> 
        <p><a href="https://liveuniba.sharepoint.com/:x:/s/Katedrafyzickejgeografieageoekolgie/EfC-TjTSDhpHkZQZNORKE0IBj19BI43et_DIHs3HjHggSQ?e=CmWaP2&isSPOFile=1" target="_blank">Katalóg <OpenExt /></a></p>
        <p className="mb-f8">Kontakt pre časť knižnice FYZ: Zora Machová, pracovňa B1-449, <Email parts={["zora.machova"]} /></p>
        
        <p><b>Knižnica GIS</b> slúži zamestnancom a študentom tejto katedry, ako aj zamestnancom ostatných katedier Prírodovedeckej fakulty UK. Fond knižnice obsahuje tituly odbornej domácej a zahraničnej literatúry z oblasti kartografie, geoinformatiky a informatiky, diaľkového prieskumu Zeme a fotogrametrie, matematiky a fyziky a odborných periodík.</p>
        <p>Členom knižnice GIS sa môžete stať po vyplnení prihlášky u správcu knižnice GIS. Pri prihlasovaní je potrebné predložiť platnú ISIC alebo ITIC kartu a občiansky preukaz.</p>
        <p><a href="https://gis.fns.uniba.sk/?knkatalog" target="_blank">Katalóg <OpenExt /></a></p>
        <p>Kontakt pre časť knižnice GIS: Vladimír Pelech, pracovňa G-23, <Email parts={["pelech2"]} /></p>
        
        <h5>Požičiavanie literatúry</h5>
        <p>Pre požičiavanie literatúry z danej časti knižnice kontaktujte príslušného správcu knižnice.</p>
        
        
        <h3>Archív záverečných a kvalifikačných prác a správ</h3>
        <p>Obsahom archívu sú fyzickogeografické záverečné práce (bakalárske a diplomové práce), kvalifikačné práce (písomné práce k ašpirantskému minimu / dizertačnej skúške, kandidátske práce / dizertačné práce k doktorandskému štúdiu, habilitačné práce, doktorské práce, rigorózne práce) a záverečné správy z výskumných úloh</p>
        <p><a href="https://liveuniba.sharepoint.com/:x:/s/Katedrafyzickejgeografieageoekolgie/Ea1c62QzbatOhlD4JSRBwOMBp52XQd2k3X_c_9RcZQRKEw?e=lzb3St&isSPOFile=1" target="_blank">Katalóg <OpenExt /></a></p>
        <p>Práce sú k dispozícii každému záujemcovi, a to len prezenčne za zálohu (preukaz a pod.). K štúdiu je k dispozícii zasadačka katedry B1-444 </p>
        <p>Kontakt: Zora Machová, pracovňa B1-449, <Email parts={["zora.machova"]} /></p>
        
        <h3>Mapový archív </h3>
        <h5>Topografické mapové diela</h5>
        <p>Vybrané mapové listy z územia Slovenska, prípadne Československa:  Základná mapa ČSSR / ČSFR / SR v mierkovom rade 1:200 000 až 1:10 000, Štátna mapa odvodená 1:5 000, Vojenská topografická mapa v Gaussovom-Krügerovom zobrazení v mierkovom rade 1:200 000 až 1:5 000 a i.</p>
        <h5>Tematické mapy</h5>
        <p>Geologické mapy a vysvetlivky k nim, geobotanické mapy, geomorfologické mapy, turistické mapy VKÚ, iné tematické mapy, atlasy a i.</p>
        <p>Mapy sa poskytujú výlučne študentom, ktorí majú zadanú záverečnú prácu na tejto katedre, a to aj absenčne na obmedzenú dobu.</p>
        <p>Kontakt: Zora Machová, pracovňa B1-449, <Email parts={["zora.machova"]} /></p>
      
      </Contents>
    </article>
  );
} 
