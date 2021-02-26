import Link from "next/link";

export default function LangSwitch( props ) {
  
  const other = {
    sk: {
      link: '/en',
      name: 'en',
      full: 'English'
    },
    en: {
      link: '/',
      name: 'sk',
      full: 'Slovensky'
    }
  }
  
  return (
    <Link href={other[props.locale].link}>
      <button 
        className="px-4 py-2.5 cursor-pointer rounded-full hover focus:outline-none md:focus:ring-1 md:focus:border-k-blue"
      >
        {props.full ? other[props.locale].full : other[props.locale].name.toUpperCase()}
      </button>
    </Link>
  )
}
