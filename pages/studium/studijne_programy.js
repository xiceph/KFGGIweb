import Link from "next/link";
import Contents from "@components/contents";
import { OpenExt } from "@components/icons";

export default function Programy() {
  return (
    <section>
      <h1>Študijné programy</h1>
      <Contents levels={1} >
        <h3 className="border-l-3 md:border-l-4 border-k-brown pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Bakalársky program</h3>
        <div className="border-l-3 md:border-l-4 border-k-brown pl-3 md:pl-5 py-1 md:pb-2 font-bold mt-s5 text-lg">Trojročné štúdium</div>
        
        <h4>Geografia, kartografia a geoinformatika</h4>
        <p><i>Garant: doc. RNDr. Vladimír Falťan, PhD.</i></p>
        <p>Hlavnou devízou geografa je schopnosť riešiť problémy v priestorových súvislostiach a s celostným pohľadom na vzťahy medzi zložkami prírody a ľudskej spoločnosti. Geoinformatik pozná široké spektrum technických nástrojov, ktoré mu to umožňujú. Náš program kombinuje geografický spôsob myslenia s geoinformatickými zručnosťami a učí našich absolventov intuitívne ich používať pri riešení stále častejších interdisciplinárnych výziev v oblastiach prírodných vied, ale aj za ich hranicami.</p>
        
        <p><b>Geografická línia</b> programu prevádza študenta od všeobecnejších geografických predmetov k podrobnému štúdiu vzťahov medzi zložkami prírody, od geologického podložia a tvarov reliéfu cez pôdy, vodstvo, klímu až po rastlinné a živočíšne spoločenstvá. Štúdium teórie aj terénne exkurzie odhaľujú procesy, ktoré sa v nich odohrávajú a dôsledky, ktoré z toho plynú pre ľudskú spoločnosť (prírodné hrozby, dopady klimatických zmien a pod.). Študenti sa učia hodnotiť problémy z rôznych uhlov pohľadu, keďže dokážu spájať informácie z mnohých prírodovedných odborov. Svoje vedomosti si ďalej môžu rozšíriť o predmety z humánnej a regionálnej geografie či z environmentalistiky.</p>
        
        <p><b>Geoinformatická línia</b> postupne buduje v absolventoch znalosti a zručnosti v oblasti kartografie, práce s geografickými informačnými systémami (GIS), databázami, aj nástrojmi diaľkového prieskumu Zeme. Študenti si osvoja kartografické metódy potrebné k tvorbe kvalitných máp, no môžu získať aj podrobnejšie znalosti práce s kartografickými zobrazeniami. V oblasti GIS získajú okrem rozsiahlej praxe aj podstatné vedomosti o pozadí ich fungovania, ktoré sú predpokladom ich expertného používania. Program pokrýva celý proces práce s geografickými informáciami; od ich získavania (terénnym výskumom či diaľkovo satelitmi, lietadlami a dronmi) cez ich spracovanie v GIS a geodatabázach, ich hlbšiu analýzu nástrojmi GIS a štatistiky, až po ich profesionálne kartografické zobrazenie v tlačenej forme či vo webovej aplikácii.</p>
        
        <p><Link href="/studium/predmety"><a >Interaktívna schéma programu</a></Link><br/><a href="docs/predmetyBc.pdf">Zoznam predmetov</a><br/></p>
        
        <p><b>Uplatniteľnosť absolventov</b> je vysoká, keďže dopyt po geoinformatických riešeniach rastie v súkromnej aj verejnej sfére. Jedná sa hlavne o pozície GIS analytika, dátového analytika či databázového špecialistu, a to jednak v expertných firmách, jednak vo verejnej správe (štátnej, regionálnej aj komunálnej), či v odborných a výskumných inštitúciách. Vďaka silnému prierezovému prírodovednému vzdelaniu je vysoká aj uplatniteľnosť absolventov ako odborníkov v oblastiach životného prostredia, pôdohospodárstva a prakticky v akomkoľvek sektore, ktorý vyžaduje priestorové a interdisciplinárne myslenie.</p>
        
        <h3 className="border-l-3 md:border-l-4 border-k-green pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Magisterský program</h3>
        <div className="border-l-3 md:border-l-4 border-k-green pl-3 md:pl-5 py-1 md:pb-2 font-bold mt-s5 text-lg">Dvojročné štúdium</div>
        <h4>Fyzická geografia a geoinformatika</h4>
        <p><i>Garant: prof. RNDr. Jozef Minár, CSc.</i></p>

        <p>Náš magisterský program ponúka okrem odborných znalostí aj základné zručnosti v oblasti vedeckého výskumu. Študenti sa vďaka tomu učia samostatne získavať, komplexne analyzovať a interpretovať dáta o krajine. Sú schopní napĺňať a spravovať priestorové databázy vo vybraných GIS-och, no získavajú tiež prax v zostavovaní odborných projektov, v ich tímovom riešení ako aj v ich prezentácii, či už vo forme odborného textu alebo vyspelého kartografického diela. Aj na našom magisterskom programe je študentom umožnené vybrať si fyzickogeografický alebo geoinformatický smer, ale aj ich vzájomne kombinovať voľbou voliteľných a výberových predmetov.</p>

        <p><b>Fyzickogeografické predmety</b> prechádzajú od štúdia zložiek prírodnej krajiny k štúdiu metód ich výskumu. Prednášky predstavujú teoretické princípy širokej palety terénnych, laboratórnych aj GIS výskumných postupov, pričom tie najpodstatnejšie sú prakticky realizované v rámci rozsiahlych cvičení. Týmto študentov pripravujeme na prácu v interdisciplinárnych tímoch, ktoré sa zaoberajú komplexnými a stále pribúdajúcimi problémami životného prostredia a zmeny klímy, k tomu nevyhnutným hodnotením a monitoringom prírodnej krajiny, územným a krajinným plánovaním, či postupmi pre trvalo udržateľný rozvoj.</p>

        <p><b>Geoinformatické predmety</b> magisterského štúdia sa ponárajú do sofistikovanejších tém kartografie a GIS. Príkladmi môžu byť deformačné parametre kartografických zobrazení, teoretické princípy a metódy kartografickej reprezentácie, klasifikácia obrazu z údajov diaľkového prieskumu Zeme, digitálna fotogrametria, či globálne navigačné satelitné systémy. Poskytujú tiež podrobnejšie vedomosti o princípoch a metódach tvorby geografických databáz, topologickej štruktúry geografických objektov, ale zameriavajú sa aj na aplikáciu analytických a dopytovacích metód a tvorbu rozhodnutí v GIS.</p>
        
        <p><a href="docs/predmetyMgr.pdf">Zoznam predmetov</a></p>
        
        <h5 className="anchor mt-8"><span id="prace" ></span>Ukážky záverečných prác</h5>
        <p>Práca na diplomových témach a spoločná diskusia o nich v rámci diplomových seminárov je podstatnou časťou nášho štúdia. Vďaka nej má študent príležitosť rozvíjať si vlastnú špecializáciu, ale aj získať skúsenosti s nástrahami praktického použitia širších vedomostí v konkrétom probléme riešenom ním, či jeho spolužiakmi. Diplomové práce sú preto dobrou ukážkou schopností našich absolventov.<br/>
        <span className="inline-block mt-3">
          <a href="docs/FG_posteryO.pdf">Postery zo záverečných prác z fyzickej geografie a geoekológie</a><br/>
          <a href="docs/DOD_P2020.pdf">Ukážky zo záverečných prác z kartografie, geoinformatiky a diaľkového prieskumu Zeme</a></span>
        </p>

        <h5 className="anchor mt-8"><span id="uplatnenie" ></span>Uplatnenie</h5>

        <p>Všade tam, kde sa komplexne posudzujú vlastnosti krajiny, utvárajú a spravujú databázy GIS a robia rozhodnutia o správaní sa človeka v krajine:</p>
        <ul>
          <li>Pozície GIS analytika, dátového analytika či databázového špecialistu v GIS firmách, ale aj nižšie uvedených sférach.</li>

          <li>Súkromné expertné firmy zamerané na aktivity v ochrane prírody, krajinnom plánovaní a hodnotení krajiny, či v posudzovaní vplyvov na životné prostredie (EIA).</li>
          
          <li>Oblasť meteorológie, klimatológie a hydrológie (SHMÚ a iné odborné inštitúcie, ale aj súkromné firmy).</li>

          <li>Pozície analytikov vo verejnej správe, najmä v rezortoch životného prostredia, výstavby a regionálneho rozvoja, pôdohospodárstva a v orgánoch samospráv regiónov, miest a obcí.</li>
          
          <li>Vo výskume v súkromnej aj akademickej sfére – naši absolventi sú pripravení pre nadväzné doktorandské štúdium v celom spektre geografických a environmentálnych odborov.</li>
        </ul>

        <p>Naši absolventi sú dobre pripravení na interdisciplinárnu spoluprácu. Široký prírodovedný základ obohatený o socioekonomický a environmentálny rozmer a komplexný syntetizujúci prístup založený na hĺbkovom poznaní a praxi v geoinformačných technológiách dávajú absolventovi všeobecne vysokú mieru adaptability, čo sú predpoklady pre jeho uplatnenie i v ďalších činnostiach a pružnú reakciu na meniacom sa trhu práce.<br/>
        <span className="inline-block mt-3">
          <a href="https://www.uplatnenie.sk/?degree=V%C5%A0&vs=701000000&faculty=701040000&field=1316T41&year=2019" target="_blank">Uplatnenie absolventov z roku 2019 <OpenExt /></a><br/>
          <a href="https://www.uplatnenie.sk/?degree=V%C5%A0&vs=701000000&faculty=701040000&field=1316T41&year=2018" target="_blank">Uplatnenie absolventov z roku 2018 <OpenExt /></a></span>
        </p>
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Doktorandský program</h3>
        <div className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 py-1 md:pb-2 font-bold mt-s5 text-lg">Štvorročné interné štúdium / Päťročné externé štúdium</div>
        
        <h4>Fyzická geografia, geoekológia a geoinformatika</h4>
        <p><i>Garant: prof. RNDr. Jozef Minár, CSc.</i></p>
        <p>Doktorandské štúdium na našej katedre je zamerané na výchovu mladých vedcov, pričom jeho vysoký štandard v tejto oblasti je garantovaný profesorom Jozefom Minárom. Okrem zvládnutia základných vedeckých postupov študenti získavajú schopnosť samostatne vyhľadávať, selektovať a používať najnovšie poznatky z teórie a metodológie vo vedeckej oblasti ich dizertačnej práce. Následne sa ich učia samostatne rozvíjať a prinášať teoretické aj metodologické inovácie publikovateľné v renomovaných vedeckých periodikách. Aj na doktorandskom štúdium ponúkame možnosť výberu zamerania. Na fyzickej geografii a geoekológii naši doktorandi študujú najnovšie metódy výskumu prírodnej krajiny, no nadštandardne si osvoja aj prácu vo viacerých GIS-och, celú škálu metód zberu priestorových informácií, ako aj ich spracovanie vo forme modelovania vývoja a fungovania prírodných geosystémov. Doktorandi študujúci geoinformatiku získavajú vysoko nadštandardné poznatky a kompetencie v oblasti aplikovanej geoinformatiky, kartografie a diaľkového prieskumu Zeme, a osvojujú si metódy práce s geografickými informáciami v GIS-och na takej úrovni, že sú schopní svoje teoretické a metodologické inovácie pretaviť aj do formy vlastných informatických riešení. </p>
        <p><a href="docs/predmetyPhD.pdf">Zoznam predmetov</a></p>
      </Contents>
    </section>
  );
} 
