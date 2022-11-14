import Link from 'next/link'

export default function IndexPageEn( props ) {

  return (
    <div className="front">
      <section className="grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center justify-center md:col-start-3 h-60 md:h-72">
          <img
            className="max-h-full"
            alt="Department of Physical Geography and Geoinformatics - Spájame poznanie prírody a informačné technológie"
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
            Spájame poznanie prírody a informačné technológie.
          </cite>
        </div>
      </section>
    </div>
  );
}
