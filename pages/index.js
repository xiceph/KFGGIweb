import Link from 'next/link'
import Datum from "@components/datum"
import Collapse from "@components/collapse"
import { OpenExt } from "@components/icons";

export default function IndexPage( props ) {
  
  return (
    <div className="front">
      <section className="grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center justify-center md:col-start-3 h-60 md:h-72">
          <img
            className="max-h-full"
            alt="Hero image"
            src="images/KFGGIo.svg"
          />
        </div>
        <div className="md:row-start-1 md:col-span-2 mt-6 md:mt-10">
          <h1>Katedra fyzickej geografie a geoinformatiky</h1>
          <div className="text-lg md:text-xl font-bold md:-mt-4 mb-8">
            Univerzita Komenského v Bratislave, Prírodovedecká fakulta
          </div>
          <cite className="text-gray-500 mb-6">
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
              <h5 className="font-bold my-1">Deň otvorených dverí 2021</h5>
              <div className="mb-2">DOD PriF UK 2021 prebehol 5.2.2021 online formou.<br/>
                Pozrite si <a href="/docs/DOD2021.pdf">našu prezentáciu pre DOD</a> a <a href="https://youtu.be/C0JAGw7tjLI?t=73" target="_blank">videozáznam geografickej časti DOD <OpenExt /></a>.
              </div>
            </div>
            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Organizačná zmena</h5>
              <div className="mb-2">Od 1.1.2021 sa zlúčila <a href="https://gis.fns.uniba.sk/" target="_blank">Katedra kartografie, geoinformatiky a diaľkového prieskumu Zeme</a> a <a href="https://fns.uniba.sk/kfg/" target="_blank">Katedra fyzickej geografie a geoekológie</a> pod jednu Katedru fyzickej geografie a geoinformatiky.</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-gray-800">Najbližšie udalosti</h3>
          <div className="divide-y divide-k-xl-gray">
            <div className="py-4 first:pt-0">
              <div className="mb-1.5"><Datum date={new Date("2021-04-21")}></Datum></div>
              <h5 className="font-bold mb-2">Prednáška: Nebezpečné lavíny</h5>
              <div>
                <div className="mb-2">Čas: <i>16:00 - 17:30</i> online</div>
                <div className="mb-2">Prednášajúci: <i>Mgr. Miroslav Žiak, PhD.</i></div>
                <Collapse>
                  <div className="mb-2">V prednáške predstavíme lavínové udalosti, ktoré patria k tým najrozsiahlejším. Aj na Slovensku boli nešťastia, ktoré patria do svetového zoznamu 80 najväčších lavínových udalostí. Zoznam otvára najväčšia lavínová katastrofa z Peru s 22 000 obeťami na životoch. Ďalšou je tzv. Biely piatok z roku 1916, kedy v Taliansku zahynuli tisícky ľudí v dôsledku mimoriadne tragickej série lavín. Na Slovensku bola najtragickejšou lavína vo Veľkej Fatre, ktorá zasiahla osadu Rybô, s 18 obeťami. Spomenieme aj udalosti z Nízkych Tatier, Západných Tatier, Vysokých Tatier a Oravskej Magury. Za zmienku stojí aj tragická lavína z poľskej strany Tatier od Morského oka, kde v roku 2003 zahynuli žiaci strednej školy.</div>
                  <div className="mb-2">Online prednáška cez aplikáciu Zoom. Prístupové údaje prihláseným budú zaslané najneskôr 1 hodinu pred prednáškou.</div>
                  <div className="mb-2">Prihláste sa na: <a href="https://lnk.sk/gkmo" target="_blank">https://lnk.sk/gkmo <OpenExt /></a>.</div>
                  <div className="mb-2"><a href="https://fns.uniba.sk/fileadmin/prif/kalendar/2021/2021-04-21-geoklub.pdf" target="_blank">Plagát</a></div>
                </Collapse>
              </div>
            </div>
            <div className="py-4 first:pt-0">
              <div className="mb-1.5"><Datum date={new Date("2021-04-21")}></Datum></div>
              <h5 className="font-bold mb-1">Študentská vedecká konferencia</h5>
              <div>ŠVK PRIF UK 2021 sa bude konať "on-line" formou cez MS Teams. Viac informácií na <a href="https://fns.uniba.sk/svk/" taget="_blank">stránke konferencie <OpenExt /></a>.</div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
