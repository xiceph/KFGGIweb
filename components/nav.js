import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import LangSwitch from "./langSwitch";

export default function Nav(props) {
  
  const { 
    pages,
    locale,
    mobile, 
    menuOpened, 
    setMenuOpened 
  } = props;
  
  if(!menuOpened) return (<div></div>) 
  
  return (
      <div className="max-w-screen-xl mx-auto md:pb-4 flex-grow min-h-0 grid grid-cols-11 w-full place-content-stretch border-t border-gray-200 md:border-opacity-50 bg-gray-300 bg-opacity-10 md:bg-transparent">
        {
          mobile 
          ? (
            <div className="col-span-4 flex flex-col justify-between">
              <ul className="flex flex-col w-full relative z-10 pl-0.5 pt-6">
                {pages.map((item) => (
                  <li 
                    key={item.id} 
                    className={cn(
                      "py-2.5 pl-4 my-px cursor-pointer rounded-l-full border-t border-b border-l border-transparent hover:bg-opacity-10",
                      menuOpened.id == item.id && 'cursor-default bg-white hover:bg-opacity-100 border-gray-200 text-black',
                      menuOpened.id != item.id && 'hover text-gray-600'
                    )}
                    onClick={() => setMenuOpened(item)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
              <div 
                className="px-2 mb-4"
                onClick={() => setMenuOpened(false)}
              >
                <LangSwitch full={true} locale={locale} />
              </div>
            </div>
          )
          : (
            <div className="flex items-stretch col-span-6 lg:col-span-5">
              <div className="flex-1">
                <img className="h-36 pt-4 ml-auto" src={`/images/${menuOpened.id}.svg`} />
              </div>
              <div className="flex-1 font-bold text-xl px-4 pt-8 ml-6">{menuOpened.title}</div>
            </div>
          )
        }

        <ul 
          className="flex-shrink col-span-7 md:col-span-5 lg:col-span-6 lg:grid lg:grid-cols-2 border-l bg-white md:bg-transparent md:border-none border-gray-200 px-1 pb-3 pt-6 -ml-px overflow-auto"
          onClick={() => setMenuOpened(false)}
        >
          {menuOpened.children.map((item) => (
            <li key={item.id}>
              <Link href={`/${menuOpened.id}/${item.id}`}>
                <div className="py-2.5 px-5 md:px5 my-px cursor-pointer rounded-full hover border-t border-b border-transparent md:border-b-gray-200">{item.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
  );
}
