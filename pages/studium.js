import Link from 'next/link'

export default function Studium( props ) {
  const { pages } = props;
  
  const subpages = pages.find( page => page.id == "studium" ).children;
  
  return (
    <div className="flex">
      <div className="flex-grow">
        <h1>Štúdium</h1>
        <ul>
        {
          subpages.map( page => (
            <li key={page.id}>
              <Link href={`/studium/${page.id}`}>{page.title}</Link>
            </li>
          ))
        }
        </ul>
      </div>
      <div>
        <img className="h-32 md:h-40" src="images/studium.svg" />
      </div>
    </div>
  )
} 
