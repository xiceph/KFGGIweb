import Link from "next/link";
import { useRouter } from 'next/router';
import pages from '../data/pages.json';

export default function LangSwitch( props ) {
  
  const router = useRouter();

  const createPathMap = () => {
    const map = { "/": "/en", "/en": "/" };

    const processPages = (skPages, enPages, skPrefix, enPrefix) => {
      skPages.forEach((skPage, index) => {
        const enPage = enPages[index];
        if (skPage && enPage) {
          const skPath = `${skPrefix}/${skPage.id}`;
          const enPath = `${enPrefix}/${enPage.id}`;
          map[skPath] = enPath;
          map[enPath] = skPath;

          if (skPage.children && enPage.children) {
            processPages(skPage.children, enPage.children, skPath, enPath);
          }
        }
      });
    };

    processPages(pages.sk, pages.en, "", "/en");
    return map;
  };

  const pathMap = createPathMap();
  const asPath = router.asPath;
  const hashIndex = asPath.indexOf('#');
  const pathWithQuery = hashIndex !== -1 ? asPath.substring(0, hashIndex) : asPath;
  const hashPart = hashIndex !== -1 ? asPath.substring(hashIndex) : '';

  const queryIndex = pathWithQuery.indexOf('?');
  const purePath = queryIndex !== -1 ? pathWithQuery.substring(0, queryIndex) : pathWithQuery;
  const queryPart = queryIndex !== -1 ? pathWithQuery.substring(queryIndex) : '';

  let otherLink = pathMap[purePath];

  if (!otherLink) {
    const lastSlashIndex = purePath.lastIndexOf('/');
    if (lastSlashIndex > 1) { // It's a nested route
      const parentPath = purePath.substring(0, lastSlashIndex);
      const slug = purePath.substring(lastSlashIndex + 1);
      const translatedParent = pathMap[parentPath];

      if (translatedParent) {
        const projectPagesMap = {
          "fyzikalna-geomorfometria": "physical-geomorphometry",
          "physical-geomorphometry": "fyzikalna-geomorfometria"
        };
        const translatedSlug = projectPagesMap[slug] || slug;
        otherLink = `${translatedParent}/${translatedSlug}`;
      }
    }
  }

  // Fallback to homepage
  if (!otherLink) {
    otherLink = props.locale === 'sk' ? '/en' : '/';
  } else {
    otherLink += queryPart + hashPart;
  }

  const other = {
    sk: {
      name: 'en',
      full: 'English'
    },
    en: {
      name: 'sk',
      full: 'Slovensky'
    }
  }
  
  return (
    <Link href={otherLink}>
      <button 
        className="px-4 py-2.5 cursor-pointer rounded-full hover focus:outline-none md:focus:ring-1 md:focus:border-k-blue"
      >
        {props.full ? other[props.locale].full : other[props.locale].name.toUpperCase()}
      </button>
    </Link>
  )
}