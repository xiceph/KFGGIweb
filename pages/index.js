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
              <div className="mb-1.5"><Datum date={ new Date("2021-06-01") } today={ new Date(props.today) }></Datum></div>
              <h5 className="font-bold mb-1">Habilitačná  prednáška</h5>
              <div>z odboru habilitačného konania fyzická geografia a geoekológia RNDr. Igora Matečného, PhD., o 13.00, <a href="https://teams.microsoft.com/l/meetup-join/19%3a4863c8b5e68e4af387fddde8b8a9c320%40thread.tacv2/1620035947173?context=%7b%22Tid%22%3a%22ce31478d-6e7a-4ce7-8670-a5b9d51884f9%22%2c%22Oid%22%3a%2270368cce-82cf-4937-a086-f6072982a4a0%22%7d" target="_blank">link pre verejnosť na pripojenie na habilitačnú prednášku <OpenExt /></a>.
              </div>
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
