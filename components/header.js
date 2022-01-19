import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import LangSwitch from "./langSwitch";
import Nav from "./nav";

export default function Header( props ) {
  const { locale, pages, actPage, special } = props;
  
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);
  
  const logo = {
    sk: "images/bezLogoO.svg",
    en: "images/navrhLogo2oEN.svg"
  }
  const text = {
    sk: "Katedra fyzickej geografie a geoinformatiky",
    en: "Department of Physical Geography and Geoinformatics"
  }
  const color = {
    katedra: 'brown',
    studium: 'green',
    vyskum: 'blue'
  }
  
  return (
    <header 
      className={cn(
        "fixed z-10 inset-0 md:bottom-auto max-h-screen bg-white bg-opacity-97 border-b border-k-xl-gray border-opacity-50 shadow-sm md:shadow flex flex-col items-stretch",
        !menuOpened && `bottom-auto`
      ) 
    }>
      { menuOpened && <div className="fixed inset-0 z-0" onClick={() => setMenuOpened(false)}></div> }
      <div className="relative z-20 max-w-screen-xl w-full mx-auto flex justify-between items-center p-1.5 px-3 lg:p-2 lg:px-4" >
        <div 
          className="relative w-60 h-15 md:w-64 md:h-16 lg:w-72 lg:h-18 md:ml-2 lg:ml-1 cursor-pointer"
          onClick={() => setMenuOpened(false)}
        >
          <Link href={ locale == "sk" ? "/": "/en"}>
            <a><img className="max-h-full" src={ logo[locale] } alt={ text[locale] } /></a>
          </Link>
        </div>
        {
          !!special 
          ? (
            <span className="text-xl md:text-2xl text-bold text-gray-700">{special.title}</span>
          )
          : (
            <>
            <div className="hidden md:block">
              { pages.map((item) => (
                <span 
                  className={`inline-block cursor-pointer px-5 ml-5 mt-3 text-blue-grey-800 rounded-full hover-${color[item.id]} focus:outline-none focus:bg-k-${color[item.id]} focus:border-k-${color[item.id]} overflow-hidden`}
                  key={item.id} 
                  onClick={() => setMenuOpened(menuOpened == item ? false : item)}
                >
                  <button className={`pt-2.5 px-1.5 pb-0.5 mb-2 border-b-3 border-k-${color[item.id]} focus:outline-none`}>
                    { item.title }
                  </button>
                </span>
              ))}
              {/*<span 
                className="px-3 ml-8 lg:ml-10" 
                onClick={() => setMenuOpened(false)}
              >
                <LangSwitch locale={ locale } />
              </span>*/}
            </div>
            
            <button
              className="px-3.5 py-3.5 text-blue-grey-800 rounded-full hover md:hidden focus:outline-none"
              onClick={() => {
                setMenuOpened( menuOpened ? false : actPage || pages[0] )
                setMenuMobileIsOpen(true);
              }}
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
            </>
          )
        }
      </div>
      
      <Nav 
        pages={ pages }
        locale={ locale } 
        mobile={ menuMobileIsOpen } 
        menuOpened={ menuOpened } 
        setMenuOpened={ setMenuOpened }>
      </Nav>

    </header>
  );
}
