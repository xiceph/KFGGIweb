import Link from 'next/link'
import Datum from "@components/datum"

export default function IndexPage( props ) {
  
  return (
    <div>
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
            Spájame poznanie prírody a informačné technológie. Krajina je naše laboratórium.
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
            <div className="py-4 first:pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed. Et mi gravida sem feugiat.</div>
            <div className="py-4 first:pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida e tortor sem feugiat.</div>
            <div className="py-4 first:pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada. Et mi gravida sem feugiat.</div>
            <div className="py-4 first:pt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, malesuada blandit. Et mi gravida feugiat.</div>
          </div>
        </div>
        <div>
          <h3 className="text-gray-800">Najbližšie udalosti</h3>
          <div className="divide-y divide-k-xl-gray">
            <div className="py-4 first:pt-0">
              <div className="mb-1"><Datum date={new Date()}></Datum></div>
              Suspendisse a diam vestibulum nulla commodo aliquam. Proin eget diam vitae nulla bibendum rutrum ac ac erat. Aliquam eget nunc suscipit, posuere mi id
            </div>
            <div className="py-4 first:pt-0">
              <div className="mb-1"><Datum date={new Date()}></Datum></div>
              Suspendisse a diam vestibulum nulla commodo aliquam. Proin eget diam vitae nulla bibendum rutrum ac ac erat. Aliquam eget nunc suscipit, posuere mi id
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
