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
            Univerzita Komenského v Bratislave, Prírodovedecká fakulta
          </div>
          <cite className="text-gray-500 mb-6">
            Spájame poznanie prírody a informačné technológie.
          </cite>
        </div>
      </section>
      
      <section className="grid gap-x-6 lg:gap-x-8 grid-cols-1 md:grid-cols-3 my-8 md:my-10">
        <div>
          <h3 className="text-gray-800 border-l-3 md:border-l-4 border-k-blue pl-2 py-1">Študujte u nás</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
          <p className="text-right pr-3">
            <Link href="/studium/pre_uchadzacov">
              <button className="bg-k-blue px-5 py-2 rounded-full -ml-1 text-base text-white justify-self-end">
                zistiť viac
              </button>
            </Link>
          </p>
        </div>
        <div>
          <h3 className="text-gray-800 border-l-3 md:border-l-4 border-k-green pl-2 py-1">Špičková veda</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
          <p className="text-right pr-3">
            <Link href="/vyskum/vedecke_zameranie">
              <button className="bg-k-green px-5 py-2 rounded-full -ml-1 text-base text-white justify-self-end">
                zistiť viac
              </button>
            </Link>
          </p>
        </div>
        <div>
          <h3 className="text-gray-800 border-l-3 md:border-l-4 border-k-brown pl-2 py-1">Aplikácia v praxi</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
          <p className="text-right pr-3">
            <Link href="/vyskum/aplikacia_v_praxi">
              <button className="bg-k-brown px-5 py-2 rounded-full -ml-1 text-base text-white justify-self-end">zistiť viac</button>
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
                Pozrite si <a href="/docs/DOD2021.pdf">prezentačný dokument pre DOD</a> a <a href="https://youtu.be/C0JAGw7tjLI?t=73" target="_blank">videozáznam geografickej časti DOD <OpenExt /></a>.
              </div>
            </div>
            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Organizačná zmena</h5>
              <div className="mb-2">Od 1.1.2021 sa zlúčila Katedra kartografie, geoinformatiky a diaľkového prieskumu Zeme a Katedra fyzickej geografie a geoekológie pod jednu Katedru fyzickej geografie a geoinformatiky.</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-gray-800">Najbližšie udalosti</h3>
          <div className="divide-y divide-k-xl-gray">
            <div className="py-4 first:pt-0">
              <div className="mb-1.5"><Datum date={new Date("2021-03-17")}></Datum></div>
              <h5 className="font-bold mb-2">Prednáška: Geologický vývoj a stavba Bratislavy a okolia</h5>
              <div>
                <div className="mb-2">Čas: <i>16:00 - 17:30</i> online</div>
                <div className="mb-2">Prednášajúci: <i>Mgr. Imrich Sládek, PhD.</i></div>
                <Collapse>
                  <div className="mb-2">Popularizačným spôsobom bude prezentovaný geologický vývoj a stavba Bratislavy a jej blízkeho okolia, a to ako slovenská časť (Devínske Karpaty), tak aj rakúska (Hainburské vrchy) na podklade zjednodušenej geologickej mapy. Zvláštna pozornosť bude venovaná zaujímavým geologickým lokalitám na oboch stranách Dunaja a tiež horninám charakteristickým pre toto územie.</div>
                  <div className="mb-2">Online prednáška cez aplikáciu Zoom. Prístupové údaje prihláseným budú zaslané najneskôr 1 hodinu pred prednáškou.</div>
                  <div className="mb-2">Prihláste sa na: <a href="https://lnk.sk/gkmo" target="_blank">https://lnk.sk/gkmo <OpenExt /></a>.</div>
                  <div className="mb-2"><a href="https://fns.uniba.sk/fileadmin/prif/kalendar/2021/2021-03-17-geoklub.pdf" target="_blank">Plagát</a></div>
                </Collapse>
                
              </div>
            </div>
            <div className="py-4 first:pt-0">
              <div className="mb-1.5"><Datum date={new Date("2021-03-31")}></Datum></div>
              <h5 className="font-bold mb-1">Termín podávania prihlášok</h5>
              <div>Na bakalárske študijné programy uskutočňované na Prírodovedeckej fakulte UK v akad. roku 2021/2022. Detaily o <a href="https://fns.uniba.sk/studium/uchadzaci-o-studium/prijimacie-konanie/bakalarsky-stupen-studia/" taget="_blank">prijímacom konaní na fakulte <OpenExt /></a>.</div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
