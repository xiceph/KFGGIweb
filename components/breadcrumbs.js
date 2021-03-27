import Link from "next/link";
import { useRouter } from "next/router"; 

export default function Breadcrumbs( props ) {
  const { pages } = props;
  
  const router = useRouter();

  const flatten = ( data, result ) => {
    const parse = [...data];
    
    while (parse.length) {
      let item = parse.shift();
      result.push({ title: item.title, id: item.id });
      if(item.children) {
        parse.push(...item.children);
      }
    }
  }

  const path = router.asPath.slice(1).split('#')[0].split('?')[0].split("/");
  const first = path[0] == "en" 
    ? { title: "Home", id: "en" }
    : { title: "Domov", id: "" }
  path[0] == "en" &&  path.shift();
  
  const flatPages = [];
  flatten( pages, flatPages );
  
  let link = first.id;
  
  return (
    <div>
      <Link href={link || "/"}><a className="inline-block text-gray-600 hover:text-gray-700 hover:underline">{first.title}</a></Link>  
      {
        path.map( item => {
          item = decodeURIComponent(item)
          const page = flatPages.find( page => page.id == item ) 
            || {id: item, title: item[0].toUpperCase() + item.slice(1)};
          link += `/${page.id}`.replace("//", "/");
          return (
            <Link href={ link } key={ link } >
              <a className="inline-block text-gray-600 hover:text-gray-700 hover:underline focus:outline-none py-0 md:py-px pl-2 md:pl-3 border-l-2 border-k-green ml-2 md:ml-3">{page.title}</a>
            </Link>
          )
        }) 
      }
    </div>
  )
} 
