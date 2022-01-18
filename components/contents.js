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
      if( levels == 1 ){
        contents.push(
          <div className="py-1" key={ id } >
            <Link href={`${router.asPath.split('#')[0]}#${id}`}>{ item.props.children }</Link>
          </div>
        );
      } else {
        contents.push(
          <div className="py-1 font-bold" key={ id }>{ item.props.children }</div>
        );
      }
      
      const { className, children, ...others } = item.props;
      
      return ( <h3 className={ `anchor ${className}` } key={ id } { ...others } ><span id={ id } ></span>{ children }</h3> )
    }
    if( levels > 1 && item.type == "h4" ) {
      const id = `sect_${level1}_${++level2}`;
      contents.push(
        <div className="pl-3 md:pl-4 pb-1" key={ id } >
          <Link href={`${router.asPath.split('#')[0]}#${id}`}>{ item.props.children }</Link>
        </div>
      );
      
      const { className, children, ...others } = item.props;
      
      return ( <h4 className={ `anchor ${className}` } { ...others } ><span id={ id } ></span>{ item.props.children }</h4> )
    }
    
    return item
  })
  
  
  return (
    <>
      <div className="border-l-3 md:border-l-4 border-k-xl-gray pl-3 md:pl-5 py-2 md:py-3 mb-8 md:mb-12">
        {contents}
      </div>
      {rest}
    </>
  )
}
