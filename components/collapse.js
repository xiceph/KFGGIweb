import { useState } from "react";
import { Mdown, Mup } from "@components/icons";

export default function Collapse( props ) {
  
  const [isExpanded, toggleExpanded] = useState(false);
  
  const content = isExpanded 
  ? 
    (
      <>
        { props.children }
        <p><a href="" onClick={(e) => { e.preventDefault(); toggleExpanded(!isExpanded)} }>
          menej
          <Mup />
        </a></p>
      </>  
    )
  : (
      <p>
        <a href="" onClick={(e) => { e.preventDefault(); toggleExpanded(!isExpanded)} }>
          viac
          <Mdown />
        </a>
      </p>
    )
  
  return (
    <>
     {content}
    </>
  )
}
