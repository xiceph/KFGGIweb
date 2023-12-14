import Link from 'next/link'
import Datum from "@components/datum"
import Collapse from "@components/collapse"
import { OpenExt } from "@components/icons";



function IndexPage( props ) {
  
  return (
    <div className="front">
      <section className="grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center justify-center md:col-start-3 h-60 md:h-72">
          <img
            className="max-h-full"
            alt="Katedra fyzickej geografie a geoinformatiky - Spájame poznanie prírody a informačné technológie"
            src="images/KFGGIo.svg"
          />
        </div>
        <div className="md:row-start-1 md:col-span-2">
          <div className="max-w-xs md:max-w-sm mb-6">
            <img 
              alt="Univerzita Komenského v Bratislave, Prírodovedecká fakulta"
              src="images/prifUKo.svg"
            />
          </div>
          <h1 className="uk">Katedra fyzickej geografie a geoinformatiky</h1>
          <cite className="block text-gray-500 mt-6 md:mt-10">
            Spájame poznanie prírody a informačné technológie.
          </cite>
        </div>
      </section>
      
      <section className="grid gap-x-6 lg:gap-x-8 grid-cols-1 md:grid-cols-3 my-8 md:my-10">
        <div>
          <h3 className="text-gray-800 border-l-3 md:border-l-4 border-k-blue pl-3 py-1">Študujte u nás</h3>
          <p className="mt-2 text-left-f">Či už sa chcete stať špecialistom na geoinformačné technológie alebo komplexným prírodovedcom, štúdium u nás pokrýva obe tieto zamerania od bakalárskeho až po doktorandský stupeň.</p>
          <p className="text-right-f pr-3">
            <Link href="/studium/pre_uchadzacov">
              <button className="bg-k-blue px-5 py-2 rounded-full -ml-1 text-base text-white justify-self-end hover:shadow-md">
                zistiť viac
              </button>
            </Link>
          </p>
        </div>
        <div>
          <h3 className="text-gray-800 border-l-3 md:border-l-4 border-k-green pl-3 py-1">Špičková veda</h3>
          <p className="mt-2 text-left-f">Produkujeme výskum, ktorý sa dokáže presadiť na poli svetovej vedy. Spektrum našich tém je široké, vďaka čomu sme schopní učiť aj riešiť vedecké problémy komplexne a interdisciplinárne.</p>
          <p className="text-right-f pr-3">
            <Link href="/vyskum/vedecke_zameranie">
              <button className="bg-k-green px-5 py-2 rounded-full -ml-1 text-base text-white justify-self-end hover:shadow-md">
                zistiť viac
              </button>
            </Link>
          </p>
        </div>
        <div>
          <h3 className="text-gray-800 border-l-3 md:border-l-4 border-k-brown pl-3 py-1">Aplikácia v praxi</h3>
          <p className="mt-2 text-left-f">Nezabúdame ani na výzvy uplatnenia fyzickej geografie a geoinformatiky pri praktických problémoch životného prostredia, pôdohospodárstva, či implementácie GIS do inštitucionálnej praxe.</p>
          <p className="text-right-f pr-3">
            <Link href="/vyskum/aplikacia_v_praxi">
              <button className="bg-k-brown px-5 py-2 rounded-full -ml-1 text-base text-white justify-self-end hover:shadow-md">zistiť viac</button>
            </Link>
          </p>
        </div>
      </section>
      
      <section className="grid gap-x-6 lg:gap-x-8 grid-cols-1 md:grid-cols-2 my-8 md:my-10">
        <div>
          <h3 className="text-gray-800">Aktuality</h3>
          <div className="divide-y divide-k-xl-gray">

            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Záverečné práce</h5>
              <div className="mb-2">Upozorňujeme na vydanie novej smernice rektora UK v Bratislave o záverečných prácach:{' '}<a href="https://uniba.sk/fileadmin/ruk/legislativa/2023/Vp_2023_32.pdf" target="_blank">smernica <OpenExt /></a>, <a href="https://fns.uniba.sk/studium/bakalarske-studium/statne-zaverecne-skusky/" target="_blank">informácie fakulty pre končiacich študentov <OpenExt /></a>
              </div>
            </div>

          
            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Geovedná exkurzia</h5>
              <div className="mb-2">Katedra pripravuje geovednú exkurziu 2024 – <b>Za geovednými fenoménmi Karlovarska a priľahlého Bavorska</b> v čase 17. – 21. júna 2024 (5 dní)<br/>Viac informácií <a href="docs/geo2024.pdf" target="_blank">v pdf dokumente</a>.
              </div>
            </div>

            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Témy záverečných prác</h5>
              <div className="mb-2">Na stránke <Link href="/studium/zaverecne_prace"><a>záverečné práce</a></Link> je zverejnená ponuka tém pre akad. rok 2023/24.
              </div>
            </div>


{/*
            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Smútočné oznámenie</h5>
              <div className="mb-2">Dňa 28.3.2022 nás navždy opustil <b>prof. RNDr. Jozef Krcho, DrSc.</b><br/>
                Katedra fyzickej geografie a geoinformatiky vyjadruje hlbokú ľútosť nad odchodom vyznamnej osobnosti.<br/><a href="docs/Krcho_nekrolog_kratky.pdf" target="_blank">Krátky nekrológ</a>
              </div>
            </div>
          
          <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Deň otvorených dverí 2022</h5>
              <div className="mb-2">DOD PriF UK 2022 prebehol 11.2.2022 online formou.<br/>
                Môžete si pozrieť <a href="https://youtu.be/aGd43lKvxzY" target="_blank">videozáznam <OpenExt /></a> alebo navštíviť našu <a href="https://hub.link/ycfVVzE" target="_blank">virtuálnu miestnosť <OpenExt /></a>.
              </div>
            </div>*/}
            
          </div>
        </div>
        <div>
          <h3 className="text-gray-800">Najbližšie udalosti</h3>
          <div className="divide-y divide-k-xl-gray">
            <div className="py-4 first:pt-0">
              <p className="text-gray-600 italic">žiadne udalosti</p>
              {/*<div className="mb-1.5"><Datum date={ new Date("2023-12-13") } today={ new Date(props.today) }></Datum></div>
                <h5 className="font-bold mb-2">Prednáška</h5>
                <p className="font-bold mb-f1">Ochrana prírody a krajiny v európskom kontexte</p>
                {/*<p className="font-bold mb-f2 mt-f0">Pripravované zmeny kurikula a podpora výučby geológie na ZŠ a SŠ</p>//}
              <div>
                <div className="mb-2">Čas: 15:00 – 17:00 <br/><i>online cez MS Teams</i>, <i>prezenčne na PriF UK, B1-PLUS</i> </div>
                <div className="mb-2">Prednášajúci: <i>Mgr. Marta Nevřelová, PhD. </i></div>
                <div className="mb-2">Pripojte sa na: <a href="https://lnk.sk/fkqm" target="_blank">https://lnk.sk/fkqm</a></div>
                <div className="mb-8"><a href="https://fns.uniba.sk/fileadmin/prif/kalendar/2023/2023-12-13-geovedy.jpg" target="_blank">Plagát</a></div>
              </div>*/}

              {/*}<div className="mb-1.5"><Datum date={ new Date("2023-08-30") } _today={ new Date(props.today) }></Datum></div>
              <h5 className="font-bold mb-1">Obhajoba dizertačnej práce</h5>
              <div className="mb-8">Od 10:00 sa uskutoční obhajoba Mgr. Veroniky Beranovej. <Link href="/docs/Oznam_Beranova.pdf"><a target="_blank">Detailný oznam</a></Link>.</div>

              <div className="mb-1.5"><Datum date={ new Date("2022-09-08") } _today={ new Date(props.today) }></Datum></div>
              <h5 className="font-bold mb-1">Konferencia GeoKARTO 2022</h5>
              <div className="mb-8">Konferencia je organizovaná Kartografickou spoločnosťou SR, v roku 2022 v spolupráci s Katedrou fyzickej geografie a geoinformatiky, Prírodovedeckej fakulty UK v Bratislave. Viac na <Link href="/geokarto2022"><a target="_blank">stránke konferencie</a></Link>.</div>
              
              <div className="mb-1.5"><Datum date={ new Date("2022-09-09") } _today={ new Date(props.today) }></Datum></div>
              <h5 className="font-bold mb-1">Valné zhromaždenie SGS</h5>
              <div className="mb-8">Valné zhromaždenie Slovenskej geografickej spoločnosti pri SAV bude v piatok 9. 9. 2022 od 12:00 v priestoroch Prírodovedeckej fakulty UK v Bratislave v aule (CH1-1). Súčasťou podujatia bude i pripomenutie si významných geografických výročí (tiež 70. výročie založenia katedry). <Link href="/docs/SGS2022Plagat.jpg"><a target="_blank">Plagát</a></Link></div>
              
              
              
              <div className="mb-1.5"><Datum date={ new Date("2023-06-14") } _today={ new Date(props.today) }></Datum></div>
              <h5 className="font-bold mb-1">Štátne skúšky</h5>
              <div>Na katedre budú prebiehať <Link href="/studium/statne_skusky#sect_1"><a>štátne skúšky na bakalárskom študijnom programe</a></Link>.</div>*/}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export const getServerSideProps = async() => {
  const today = new Date().toJSON();
  
  return { props: { today } };
}

export default IndexPage;
