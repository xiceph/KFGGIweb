import Link from 'next/link'

export default function Vyskum( props ) {
  const { pages } = props;
  
  const subpages = pages.find( page => page.id == "vyskum" ).children;
  
  return (
    <div className="flex">
      <div className="flex-grow">
        <h1>Výskum</h1>
        <ul>
        {
          subpages.map( page => (
            <li>
              <Link href={`/vyskum/${page.id}`}>{page.title}</Link>
            </li>
          ))
        }
        </ul>
      </div>
      <div>
        <img className="h-32 md:h-40" src="images/vyskum.svg" />
      </div>
    </div>
  )
} 
 
