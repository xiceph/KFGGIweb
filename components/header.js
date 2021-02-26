import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import LangSwitch from "./langSwitch";
import Nav from "./nav";

export default function Header( props ) {
  const { locale, pages, actPage } = props;
  
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);
  
  const logo = {
    'sk': "images/navrhLogo2o.svg",
    'en': "images/navrhLogo2oEN.svg"
  }
  
  return (
    <header 
      className={cn(
        "fixed z-10 inset-0 md:bottom-auto max-h-screen bg-white bg-opacity-97 border-b border-gray-200 border-opacity-75 shadow-sm md:shadow flex flex-col items-stretch",
        !menuOpened && `bottom-auto`
      ) 
    }>
      <div className="max-w-screen-xl w-full mx-auto flex justify-between items-center p-2 px-3 lg:p-2.5 lg:px-4" >
        <div 
          className="relative w-60 h-15 md:w-64 md:h-16 lg:w-72 lg:h-18 cursor-pointer"
          onClick={() => setMenuOpened(false)}
        >
          <Link href={ locale == "sk" ? "/": "/en"}>
            <img src={ logo[locale] } alt="logo" />
          </Link>
        </div>
        <div className="hidden md:block">
          { pages.map((item) => (
            <button 
              className="cursor-pointer px-4 py-2.5 ml-1 text-blue-grey-800 rounded-full hover focus:outline-none focus:ring-1 focus:border-k-blue"
              key={item.id} 
              onClick={() => setMenuOpened(menuOpened == item ? false : item)}
            >
              { item.title }
            </button>
          ))}
          <span 
            className="px-3 ml-8 lg:ml-10" 
            onClick={() => setMenuOpened(false)}
          >
            <LangSwitch locale={ locale } />
          </span>
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
