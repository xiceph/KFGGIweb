import Link from 'next/link'

export default function Katedra( props ) {
  const { pages } = props;
  
  const subpages = pages.find( page => page.id == "katedra" ).children;
  
  return (
    <div className="flex">
      <div className="flex-grow">
        <h1>O katedre</h1>
        <ul>
        {
          subpages.map( page => (
            <li key={page.id}>
              <Link href={`/katedra/${page.id}`}>{page.title}</Link>
            </li>
          ))
        }
        </ul>
      </div>
      <div>
        <img className="h-32 md:h-40" src="images/katedra.svg" />
      </div>
    </div>
  )
} 
 
