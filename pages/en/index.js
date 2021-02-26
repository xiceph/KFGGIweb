import Link from 'next/link'

export default function IndexPageEn( props ) {

  return (
    <div>
      <section className="grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center justify-center md:col-start-3 h-60 md:h-72">
          <img
            className="max-h-full"
            alt=""
            src="images/KFGGIo.svg"
          />
        </div>
        <div className="md:row-start-1 md:col-span-2 mt-6 md:mt-8">
          <h1>Department of Physical Geography and Geoinformatics</h1>
          <div className="text-lg md:text-xl font-bold -mt-4 mb-8">
            Comenius University in Bratislava, Faculty of Natural Sciences
          </div>
          <cite className="text-gray-500">
            Spájame poznanie prírody a informačné technológie. Krajina je naše laboratórium.
          </cite>
        </div>
      </section>
    </div>
  );
}
