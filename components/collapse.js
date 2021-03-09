import { useState } from "react";
import { Mdown, Mup } from "@components/icons";

export default function Collapse( props ) {
  
  const [isExpanded, toggleExpanded] = useState(false);
  
  const content = isExpanded 
  ? 
    (
      <>
        { props.children }
        <div className="mt-2"><a href="" onClick={(e) => { e.preventDefault(); toggleExpanded(!isExpanded)} }>
          menej
          <Mup />
        </a></div>
      </>  
    )
  : (
      <div>
        <a href="" onClick={(e) => { e.preventDefault(); toggleExpanded(!isExpanded)} }>
          viac
          <Mdown />
        </a>
      </div>
    )
  
  return (
    <>
     {content}
    </>
  )
}
