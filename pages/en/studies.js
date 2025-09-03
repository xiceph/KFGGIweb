import Link from 'next/link'

export default function Studies( props ) {
  const { pages } = props;
  
  const subpages = pages.find( page => page.id == "studies" ).children;
  
  return (
    <div className="flex">
      <div className="flex-grow">
        <h1>Studies</h1>
        <ul>
        {
          subpages.map( page => (
            <li key={page.id}>
              <Link href={`/en/studies/${page.id}`}>{page.title}</Link>
            </li>
          ))
        }
        </ul>
      </div>
      <div>
        <img className="h-32 md:h-40" src="/images/studium.svg" />
      </div>
    </div>
  )
} 
