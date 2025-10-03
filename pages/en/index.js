import Link from 'next/link'
import Datum from "@components/datum"
import Collapse from "@components/collapse"
import { OpenExt } from "@components/icons";
import fs from 'fs'
import path from 'path'
import ReactHtmlParser from 'react-html-parser';



function IndexPageEn( props ) {
  
  return (
    <div className="front">
      <section className="grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center justify-center md:col-start-3 h-60 md:h-72">
          <img
            className="max-h-full"
            alt="Department of Physical Geography and Geoinformatics - Connecting the knowledge of nature and IT."
            src="images/KFGGIo.svg"
          />
        </div>
        <div className="md:row-start-1 md:col-span-2">
          <div className="max-w-xs md:max-w-sm mb-6">
            <img 
              alt="Comenius University in Bratislava, Faculty of Natural Sciences"
              src="images/prifUKen.svg"
            />
          </div>
          <h1 className="uk">Department of Physical Geography and Geoinformatics</h1>
          <cite className="block text-gray-500 mt-6 md:mt-10">
            Connecting the knowledge of nature and IT.
          </cite>
        </div>
      </section>
      
      <section className="grid gap-x-6 lg:gap-x-8 grid-cols-1 md:grid-cols-3 my-8 md:my-10">
        <div>
          <h3 className="text-gray-800 border-l-3 md:border-l-4 border-k-blue pl-3 py-1">Become our student</h3>
          <p className="mt-2 text-left-f">Whether you are aiming to become an IT specialist or a complex naturalist, studies in our department cover both of these disciplines. Degrees range from the bachelor's to the PhD.</p>
          <p className="text-right-f pr-3">
            <Link href="/en/studies/for-applicants">
              <button className="bg-k-blue px-5 py-2 rounded-full -ml-1 text-base text-white justify-self-end hover:shadow-md">
                learn more
              </button>
            </Link>
          </p>
        </div>
        <div>
          <h3 className="text-gray-800 border-l-3 md:border-l-4 border-k-green pl-3 py-1">High science</h3>
          <p className="mt-2 text-left-f">The research we perform is able to establish on a global level. A wide range of scientific disciplines enables us to learn and study scientific issues with complexity and interdisciplinarity.</p>
          <p className="text-right-f pr-3">
            <Link href="/en/research/scientific_focus">
              <button className="bg-k-green px-5 py-2 rounded-full -ml-1 text-base text-white justify-self-end hover:shadow-md">
                learn more
              </button>
            </Link>
          </p>
        </div>
        <div>
          <h3 className="text-gray-800 border-l-3 md:border-l-4 border-k-brown pl-3 py-1">Applicability</h3>
          <p className="mt-2 text-left-f">The outcomes of our research are broadly applicable: from the environmental and agricultural issues to the implementation of GIS to the institutional practice of various organizations.</p>
          <p className="text-right-f pr-3">
            <Link href="/en/research/applicability">
              <button className="bg-k-brown px-5 py-2 rounded-full -ml-1 text-base text-white justify-self-end hover:shadow-md">learn more</button>
            </Link>
          </p>
        </div>
      </section>
      
      <section className="grid gap-x-6 lg:gap-x-8 grid-cols-1 md:grid-cols-2 my-8 md:my-10">
        <div>
          <h3 className="text-gray-800">News</h3>
          <div className="divide-y divide-k-xl-gray">

            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Theses topics</h5>
              <div className="mb-2">On the <Link href="/en/studies/theses"><a>Theses</a></Link> page, the offer of topics for the academic year 2025/26 is published.
              </div>
            </div>

            <div className="py-4 first:pt-0">
              <h5 className="font-bold my-1">Theses</h5>
              <div className="mb-2">We would like to draw your attention to the new Rector's directive on final theses:{' '}<a href="https://uniba.sk/fileadmin/ruk/legislativa/2023/Vp_2023_32.pdf" target="_blank">directive <OpenExt /></a>, <a href="https://fns.uniba.sk/studium/bakalarske-studium/statne-zaverecne-skusky/" target="_blank">faculty information for graduating students <OpenExt /></a>
              </div>
            </div>
            
          </div>
        </div>
        <div>
          <h3 className="text-gray-800">Upcoming events</h3>
          <div className="divide-y divide-k-xl-gray">
            {props.events.length > 0 ? (
              props.events.map((event, i) => (
                <div className="py-4 first:pt-0" key={i}>
                  <div className="mb-1.5"><Datum date={ new Date(event.date) } today={ new Date(props.today) }></Datum></div>
                  <h5 className="mb-2">{event.title_en}</h5>
                  <div>{ReactHtmlParser(event.description_en)}</div>
                </div>
              ))
            ) : (
              <div className="py-4 first:pt-0">
                <p className="text-gray-600 italic">no upcoming events</p>
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

  const upcomingEvents = allEvents.filter(event => new Date(event.date) >= today);

  return { 
    props: { 
      today: today.toJSON(),
      events: upcomingEvents
    } 
  };
}

export default IndexPageEn;
