import Link from 'next/link'

export default function About( props ) {
  const { pages } = props;
  
  const subpages = pages.find( page => page.id == "about" ).children;
  
  return (
    <div className="flex">
      <div className="flex-grow">
        <h1>About the Department</h1>
        <ul>
        {
          subpages.map( page => (
            <li key={page.id}>
              <Link href={`/en/about/${page.id}`}>{page.title}</Link>
            </li>
          ))
        }
        </ul>
      </div>
      <div>
        <img className="h-32 md:h-40" src="/images/katedra.svg" />
      </div>
    </div>
  )
} 
 
