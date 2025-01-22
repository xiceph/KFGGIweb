import Link from 'next/link'

export default function Vyskum( props ) {
  const { pages } = props;
  
  const subpages = pages.find( page => page.id == "research" ).children;
  
  return (
    <div className="flex">
      <div className="flex-grow">
        <h1>Research</h1>
        <ul>
        {
          subpages.map( page => (
            <li>
              <Link href={`/en/research/${page.id}`}>{page.title}</Link>
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
 
