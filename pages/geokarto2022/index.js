import Head from "next/head";
import Link from "next/link";
import Contents from "@components/contents";
import Separator from "@components/separator";
import { OpenExt } from "@components/icons";

export default function GeoKarto( props ) {
  
  return (
    <div className="smooth">
      <Head>
        <title>Konferencia GeoKARTO 2022</title>
      </Head>
      <h1>Konferencia GeoKARTO 2022</h1>
      {/*<cite className="block text-gray-500 my-6 md:my-10">
        Motto konferencie.
      </cite>*/}
      <p className="font-bold text-xl">
        8. – 9. september 2022<br/>
        Prírodovedecká fakulta Univerzity Komenského v Bratislave
      </p>
      
      <p><img src="images/geokarto2022/heroF.jpg" /></p>
  
      <p>Konferencia je organizovaná každé dva roky Kartografickou spoločnosťou SR v spolupráci s významnými akademickými inštitúciami so zameraním na aktuálne otázky a trendy teórie a praxe kartografie, geoinformatiky a geodézie. V roku 2022 sa  bude konferencia organizovať v spolupráci s Katedrou fyzickej geografie a geoinformatiky, Prírodovedeckej fakulty UK v Bratislave.</p>
      
      <p className="text-center-f">
        <a href="docs/geokarto2022/cirkular1.pdf" target="_blank" className="-ml-1">
          <button className="bg-k-gray px-5 py-2 rounded-info  text-base text-white justify-self-end hover:shadow-md">
            Pozvánka - 1. informácia 
          </button>
        </a>
      </p>
    
      <h3>Termíny</h3>
      <p>
        <b>Prihlásenie abstraktov: 15. 6. 2022</b><br/>
        Vyrozumenie o prijatí abstraktov: 30. 6. 2022<br/>
        Zaslanie článkov do Kartografických listov: 30. 4. 2022 / 30. 9. 2022<br/>
        Úhrada účastníckeho poplatku prevodom na účet: 31. 8. 2022<br/>
        Registrácia účastníkov: 31. 8. 2022
      </p>
      
      <p className="flex flex-col md:flex-row md:justify-around">
        <a href="https://forms.gle/tqdEWxVAgCNgNXwv7" target="_blank" className="m-4 ">
          <button className="bg-k-blue px-5 py-2 rounded-full text-base text-white justify-self-end hover:shadow-md">
            Registrovať sa ako prednášajúci
          </button>
        </a>
        {" "}
        <a href="https://forms.gle/empwf2nU9zVYzYaNA" target="_blank" className="m-4 ">
          <button className="bg-k-blue px-5 py-2 rounded-full text-base text-white justify-self-end hover:shadow-md">
            Registrovať sa ako poslucháč
          </button>
        </a>
      </p>
      <p> </p>
      
      <Contents levels={1} >
      
      <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Tematické okruhy</h3>
      <ol>
        <li>Teória kartografie, geoinformatiky a geodézie</li>
        <li>Tvorba, vydávanie, používanie máp a atlasov</li>
        <li>Mapovanie a zber dát pre GIS</li>
        <li>Štandardizácia, infraštruktúry, metadáta, geodatabázy</li>
        <li>Open-source GIS a otvorený digitálny obsah</li>
        <li>Webová kartografia, geovizualizácia a publikovanie geodát</li>
        <li>Diaľkový prieskum Zeme a spracovanie obrazu k tvorbe tematických máp</li>
        <li>Informačné systémy o území a kataster</li>
        <li>Geopriestorové analýzy a modelovanie</li>
        <li>Historické a staré mapy</li>
        <li>Vzdelávanie a prax</li>
      </ol>

        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Program konferencie</h3>
      {/*
        <h5>8. 9. 2022 – štvrtok</h5>
        <table><tbody>
          <tr><td>8:30</td><td>prezentácia</td></tr>
          <tr><td>9:30 – 9:45</td><td>otvorenie konferencie</td></tr>
          <tr><td>9:45 – 10:45</td><td>prednášky v pléne</td></tr>
          <tr><td>10:45 – 11:15</td><td>prestávka</td></tr>
          <tr><td>11:15 – 12:15</td><td>prednášky v pléne</td></tr>
          <tr><td>12:15 – 14:00</td><td>obed</td></tr>
          <tr><td>14:00 – 15:30</td><td>prednášky v pléne</td></tr>
          <tr><td>15:30 – 16:00 </td><td>prestávka</td></tr>
          <tr><td>16:00 – 17:00</td><td>prednášky v pléne</td></tr>
          <tr><td>19:00  </td><td>spoločenský večer</td></tr>
        </tbody></table>
        <p>Posterová sekcia: 14:00 – 17:00</p>
        <h5>9. 9. 2022 – piatok</h5>
        <table><tbody>
          <tr><td>9:00 – 10:30 </td><td>prednášky v pléne</td></tr>
          <tr><td>10:30 – 11:00 </td><td>prestávka</td></tr>
          <tr><td>11:00 – 12:00 </td><td>prednášky v pléne</td></tr>
          <tr><td>12:00 – 13:30</td><td>obed</td></tr>
          <tr><td>13:30 – 15:30 </td><td>prednášky v pléne</td></tr>
          <tr><td>15:30 – 16:00</td><td>ukončenie konferencie</td></tr>
        </tbody></table>*/}
        <p>
          <a href="docs/geokarto2022/ProgGeoKARTO2022p.pdf" target="_blank" className="-ml-1">
            <button className="bg-k-gray px-5 py-2 rounded-info text-base text-white justify-self-end hover:shadow-md">
              Program konferencie [.pdf]
            </button>
          </a> 
        </p>
        <p>Dokument obsahuje odkazy na prezentácie autorov.</p>
        
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Organizačné pokyny</h3>
        
        <p>Konferencia sa bude konať prezenčnou formou.</p>
        
        <h4>Miesto konania</h4>
        <p className="align-middle">
          <a href="https://zbgis.skgeodesy.sk/mkzbgis/c/PFXX4" target="_blank" className="-ml-1">Mapa miesta konferencie</a> <img src="images/geokarto2022/QRmapa.png" />
        </p>
        
        <h4>Účastnícky poplatok</h4>
        
        <table className="center left1"><tbody>
          <tr><th></th><th>do 31. 8. 2022</th><th>na mieste</th></tr>
          <tr><td>člen KS SR</td><td>80 EUR</td><td>90 EUR</td></tr>
          <tr><td>autor príspevku<br/>(iba jeden z kolektívu autorov)</td><td>80 EUR</td><td>90 EUR</td></tr>
          <tr><td>nečlen KS SR</td><td>90 EUR</td><td>100 EUR</td></tr>
          <tr><td>čestný člen KS SR</td><td>10 EUR</td><td>10 EUR</td></tr>
          <tr><td>študent 1. a 2. stupňa VŠ<br/>(bez servisu)</td><td>0 EUR</td><td>0 EUR</td></tr>
        </tbody></table> 
        
        <h5>V účastníckom poplatku konferencie sú zahrnuté</h5>
        <ul>
          <li>náklady na organizovanie konferencie</li>
          <li>občerstvenie počas rokovania</li>
          <li>zborník abstraktov</li>
          <li>obed 8. 9. 2022 a 9. 9. 2022</li>
          <li>spoločenský večer 8. 9. 2022</li>
        </ul>
        
        <h5>V účastníckom poplatku nie je zahrnuté</h5>
        <ul>
          <li>doprava</li>
          <li>ubytovanie</li>
        </ul>
        
        <p>Účastníci konferencie si <b>ubytovanie</b> zabezpečujú individuálne. </p>
        <p>Možnosti ubytovania (orientačné ceny za osobu a noc):</p>
        <ul>
          <li>Hotel Družba: 33 EUR</li>
          <li>Botel Pressburg: 52 EU</li>
          <li>Hotel SOREA REGIA: 71 EUR</li>
          <li>Park Inn by Radisson Danube Bratislava: 77 EUR</li>
        </ul>
        
        <h4>Platby</h4>
        <ul>
          <li>bezhotovostným prevodom, poukázaním platby na číslo účtu vedeného vo Fio banka, a.s., Dunajská 1, 811 08 Bratislava
            <p>
              Názov účtu: Kartografická spoločnosť SR<br/>
              Radlinského 11, 813 68 Bratislava<br/>
              IBAN: SK95 8330 0000 0026 0163 1018<br/>
              BIC: FIOZSKBAXXX<br/>
              variabilný symbol 202222<br/>
              <b>doplňujúci údaj: PRIEZVISKO účastníka</b><br/>
              Platby z ČR na Slovensko zasielať na účet: 2601631018/2010
            </p>
          </li> 
          <li>pri registrácii v hotovosti</li>
        </ul>
        <p><i>nie sme platcami DPH</i></p>
        
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Publikovanie príspevkov</h3>
        <p>Účastníci konferencie môžu prispieť do konferenčného zborníka abstraktom v rozsahu 1 normostrany. Odborní garanti konferencie odporučia vybrané príspevky na publikovanie vo vedeckom časopise Kartografické listy (Scopus).</p>
        <h5>Šablóny príspevkov</h5>
        <p>
          <a href="docs/geokarto2022/abstraktGeoKARTO2022.doc" target="_blank" className="-ml-1">
            <button className="bg-k-gray px-5 py-2 rounded-info text-base text-white justify-self-end hover:shadow-md">
              Šablóna abstraktu [.doc]
            </button>
          </a>
        </p>
        <h5>Možnosti prezentácie</h5>
        <p>prednáška alebo poster</p>
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Partneri</h3>
        
        <div className="flex flex-row flex-wrap items-stretch justify-around space-x-3 md:space-x-4 py-4">
        
          <a href="https://www.zymestic.sk/" target="_blank" className="flex flex-col items-center justify-end mb-10">
            <img className="h-14 md:h-20" src="images/geokarto2022/ZYMESTIC.png" alt="Zymestic Solutions, s.r.o." />
            <span className="text-xs md:text-base text-center">Zymestic Solutions, s.r.o.</span>
          </a>
        
          <a href="https://www.kedros.sk/" target="_blank" className="flex flex-col items-center justify-end mb-10">
            <img className="h-15 md:h-24" src="images/geokarto2022/kedros.svg" alt="Kedros, a.s." />
            <span className="text-xs md:text-base text-center">Kedros, a.s.</span>
          </a>
          
          <a href="https://www.x3d.sk/" target="_blank" className="flex flex-col items-center justify-end mb-10">
            <img className="h-14 md:h-20" src="images/geokarto2022/3Dexpert.jpg" alt="Expert_for_3D_Landscape spol. s r.o." />
            <span className="text-xs md:text-base text-center">Expert_for_3D_Landscape spol. s r.o.</span>
          </a>
          
          <a href="https://geotronics.sk/" target="_blank" className="flex flex-col items-center justify-end mb-10">
            <img className="h-14 md:h-20" src="images/geokarto2022/Geotronics.png" alt="Geotronics Slovakia, s.r.o." />
            <span className="text-xs md:text-base text-center">Geotronics Slovakia, s.r.o.</span>
          </a>
          
          <a href="https://sk.3gon.eu/" target="_blank" className="flex flex-col items-center justify-end mb-10">
            <img className="h-14 md:h-20" src="images/geokarto2022/3GON.jpg" alt="3gon Slovakia s.r.o." />
            <span className="text-xs md:text-base text-center">3gon Slovakia s.r.o.</span>
          </a>
          
          <a href="https://www.gku.sk/gku/" target="_blank" className="flex flex-col items-center justify-end mb-10">
            <img className="h-15 md:h-24" src="images/geokarto2022/GKU.png" alt="Geodetický a kartografický ústav" />
            <span className="text-xs md:text-base text-center">Geodetický a kartografický ústav</span>
          </a>
        
          <a href="https://www.cbs.sk/" target="_blank" className="flex flex-col items-center justify-end mb-10">
            <img className="h-16 md:h-28" src="images/geokarto2022/CBS.jpg" alt="CBS spol, s.r.o." />
            <span className="text-xs md:text-base text-center">CBS spol, s.r.o.</span>
          </a>
          
          <a href="https://www.vku-mapy.sk/" target="_blank" className="flex flex-col items-center justify-end mb-10">
            <img className="h-16 md:h-28" src="images/geokarto2022/VKU.jpg" alt="VKÚ Harmanec, s.r.o." />
            <span className="text-xs md:text-base text-center">VKÚ Harmanec, s.r.o.</span>
          </a>
          
          <a href="https://www.muzeummap.sk/" target="_blank" className="flex flex-col items-center justify-end mb-10">
            <img className="h-15 md:h-24" src="images/geokarto2022/SMM.png" alt="Slovenské múzeum máp" />
            <span className="text-xs md:text-base text-center">Slovenské múzeum máp</span>
          </a>
          
         
          
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Mediálni partneri</h3>
        
        <div className="flex flex-row items-stretch justify-around space-x-3 md:space-x-4 py-4">
          <a href="https://amavet962.org/" target="_blank" className="flex flex-col items-center justify-end">
            <img className="h-6 md:h-14" src="images/geokarto2022/logo-amavet962.svg" alt="Amavet klub 962" />
            <span className="text-xs md:text-base text-center">Amavet klub 962</span>
          </a>
        
          <a href="https://egako.eu/cs/o-casopise/" target="_blank" className="flex flex-col items-center justify-end">
            <img className="h-10 md:h-24" src="images/geokarto2022/GaKO.svg" alt="Geodetický a kartografický obzor" />
            <span className="text-xs md:text-base text-center">Geodetický a kartografický obzor</span>
          </a>

        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Organizátori a odborní garanti</h3>
        
        <div className="flex flex-row items-stretch justify-around space-x-3 md:space-x-4 py-4">
          <a href="https://www.slovakcarto.sk/" target="_blank" className="flex flex-col items-center justify-end">
            <img className="h-16 md:h-28" src="images/geokarto2022/KSSRlogo.svg" alt="Kartografická spoločnosť Slovenskej republiky" />
            <span className="text-xs md:text-base text-center">Kartografická spoločnosť SR</span>
          </a>
        
          <a href="https://fns.uniba.sk/" target="_blank" className="flex flex-col items-center justify-end">
            <img className="h-16 md:h-28" src="images/geokarto2022/prifUK.svg" alt="Prírodovedecká fakulta UK" />
            <span className="text-xs md:text-base text-center">Prírodovedecká fakulta UK</span>
          </a>
          
          <a href="http://www.geography.sav.sk/" target="_blank" className="flex flex-col items-center justify-end">
            <img className="h-15 md:h-24" src="images/geokarto2022/GgUlogo.svg" alt="Geografický ústav SAV, v.v.i." />
            <span className="text-xs md:text-base text-center" >Geografický ústav SAV, v.v.i.</span>
          </a>
        </div>
        
        <h4>Organizačný výbor</h4>
        <p>
          Mgr. Miroslav Kožuch, PhD. (PriF UK Bratislava)<br/>
          Mgr. Richard Feciskanin, Ph.D. (PriF UK Bratislava)<br/>
          Mgr. Alexandra Benová, PhD. (PriF UK Bratislava)<br/>
          Ing. Róbert Fencík, PhD. (SvF STU Bratislava)<br/>
          Ing. Daniel Szatmári, PhD. (GgÚ SAV Bratislava)
        </p>
        
        <h4>Odborní garanti</h4>
        <p>
          doc. Ing. Renata Ďuračiová, PhD. (SvF STU Bratislava)<br/>
          doc. RNDr. Ján Feranec, DrSc. (GgÚ SAV Bratislava)<br/>
          prof. Mgr. Jaroslav Hofierka, PhD. (PF UPJŠ Košice) <br/>
          doc. RNDr. Dagmar Kusendová, CSc. (PriF UK Bratislava) <br/>
          doc. RNDr. Igor Matečný, PhD. (PriF UK Bratislava) <br/>
          Mgr. Ľuboslav Michalík (GKÚ Bratislava) <br/>
          prof. Ing.  Ján Tuček, PhD. (LF TU Zvolen) <br/>
          prof. RNDr. Vít Voženílek, CSc. (UPOL Olomouc)
        </p>
        
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Kontakty</h3>
        <h5>Katedra fyzickej geografie a geoinformatiky</h5>
        <p>Prírodovedecká fakulta UK v Bratislave<br/>
        Mlynská dolina, Ilkovičova 6, 842 15 Bratislava 4</p>
        <p>Mgr. Miroslav Kožuch, PhD. <br/>
        miroslav.kozuch@uniba.sk, +421-2-9014 9283</p>
        
        
        <h5>Prihlášky a zasielanie abstraktov</h5>
        <p>Mgr. Alexandra Benová, PhD. <br/>
        alexandra.benova@uniba.sk</p>
        
        <h5>Účastnícke poplatky</h5>
        <p>Ing. Róbert Fencík, PhD. <br/>
        robert.fencik@stuba.sk, +421-2-3288 8325</p>
      
      </Contents>
    </div>
  )
} 
 
