import Link from 'next/link'

export default function FourOhFour( props ) {
  const { locale } = props;
  
  const text = {
    'sk': 'stránka neexistuje',
    'en': 'page does not exist'
  }
  const link = {
    'sk': 'Naspäť na úvodnú stránku',
    'en': 'Back to home page'
  }
  
  return (
    <div className="flex flex-col items-center justify-self-center py-6 px-2 text-k-brown text-opacity-50">
      <div className="relative">
        <img className="h-52 md:h-72" src={`/images/desert.svg`} />
        <div className="text-7xl md:text-8xl text-white text-opacity-20 text-center absolute inset-x-0 bottom-4 md:bottom-6">404</div>
      </div>
      <div className="text-lg md:text-xl text-center mb-8 md:mb-10 -mt-3 md:-mt-4">{text[locale]}</div>
      <Link href={locale == "sk" ? "/": "/en"} >
        <a>{link[locale]}</a>
      </Link>
    </div>
  )
} 
