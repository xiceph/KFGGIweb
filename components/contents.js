import Link from "next/link";
import { useRouter } from "next/router"; 

export default function Contents( props ) {
  const { levels, children } = props;
  
  const router = useRouter();
  
  const contents = [];
  let level1 = 0;
  let level2 = 0;
  
  const rest = children.map( item => {
    if( item.type == "h3" ) {
      level2 = 0;
      const id = `sect_${++level1}`
      contents.push(
        <div className="py-1 font-bold" key={ id }>{ item.props.children }</div>
      );
      
      return ( <h3 { ...item.props } >{ item.props.children }</h3> )
    }
    if( levels > 1 && item.type == "h4" ) {
      const id = `sect_${level1}_${++level2}`;
      contents.push(
        <div className="pl-4 md:pl-6 pb-1" key={ id } ><Link href={`${router.asPath.split('#')[0]}#${id}`}>{ item.props.children }</Link></div>
      );
      
      return ( <h4 className="anchor" { ...item.props } ><span id={ id } ></span>{ item.props.children }</h4> )
    }
    
    return item
  })
  
  
  return (
    <>
      <div className="border-l-3 md:border-l-4 border-gray-300 pl-4 md:pl-6 py-2 md:py-3">
        {contents}
      </div>
      {rest}
    </>
  )
}
