import Link from 'next/link'
import Datum from "@components/datum"
import Collapse from "@components/collapse"
import { OpenExt } from "@components/icons";
import fs from 'fs'
import path from 'path'
import ReactHtmlParser from 'react-html-parser';



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

 {/*           <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Geovedná exkurzia</h5>
              <div className="mb-2">Katedra pripravuje geovednú exkurziu BALATON 2026 – <b>Spoznajte, že Maďarsko nie je len nekonečná rovina</b> v čase 15. – 19. júna 2026 (5 dní)<br/>Viac informácií v <a href="docs/geo2026.pdf" target="_blank">pdf dokumente</a>.
              </div>
            </div>*/}

            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Témy záverečných prác</h5>
              <div className="mb-2">Na stránke <Link href="/studium/zaverecne_prace"><a>záverečné práce</a></Link> je zverejnená ponuka tém pre akad. rok 2026/27.
              </div>
            </div>

{/*

            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Smútočné oznámenie</h5>
              <div className="mb-2">So zármutkom oznamujeme, že 24. januára 2024 nás opustil náš vzácny kolega geomorfológ <b>doc. RNDr. Miloš Stankoviansky, CSc.</b> <br/>
              Katedra fyzickej geografie a geoinformatiky si ho vždy bude pamätať ako jedinečného priateľa a kolegu.
              </div>
            </div>*/}

            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Záverečné práce</h5>
              <div className="mb-2">Upozorňujeme na vydanie novej smernice rektora UK v Bratislave o záverečných prácach:{' '}<a href="https://uniba.sk/fileadmin/ruk/legislativa/2023/Vp_2023_32.pdf" target="_blank">smernica <OpenExt /></a>, <a href="https://fns.uniba.sk/studium/bakalarske-studium/statne-zaverecne-skusky/" target="_blank">informácie fakulty pre končiacich študentov <OpenExt /></a>
              </div>
            </div>



{/*
            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Témy záverečných prác</h5>
              <div className="mb-2">Na stránke <Link href="/studium/zaverecne_prace"><a>záverečné práce</a></Link> je zverejnená ponuka tém pre akad. rok 2023/24.
              </div>
            </div>*/}




         {/*
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
            {props.events.length > 0 ? (
              props.events.map((event, i) => (
                <div className="py-4 first:pt-0" key={i}>
                  <div className="mb-1.5"><Datum date={ new Date(event.date) } today={ new Date(props.today) }></Datum></div>
                  <h5 className="mb-2">{event.title}</h5>
                  <div>{ReactHtmlParser(event.description)}</div>
                </div>
              ))
            ) : (
              <div className="py-4 first:pt-0">
                <p className="text-gray-600 italic">žiadne udalosti</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
    </div>
  );
}

export const getServerSideProps = async() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventsFilePath = path.join(process.cwd(), 'data/events.json');
  const eventsFileContent = fs.readFileSync(eventsFilePath, 'utf8');
  const allEvents = JSON.parse(eventsFileContent);

  const upcomingEvents = allEvents.filter(event => new Date(event.date) >= today).sort((a, b) => new Date(a.date) - new Date(b.date));

  return { 
    props: { 
      today: today.toJSON(),
      events: upcomingEvents
    } 
  };
}

export default IndexPage;
