import Header from "./header";
import Footer from "./footer";

export default function Layout( props ) {
  
  const structure = {
    sk: [
      { title: "O katedre", id: "about" },
      { title: "Štúdium", id: "study" },
      { title: "Výskum", id: "research" },
    ],
    en: [
      { title: "About us", id: "about" },
      { title: "Study", id: "study" },
      { title: "Research", id: "research" },
    ]
  }
  
  return (
    <div className="flex flex-col justify-self-stretch min-h-screen font-serif text-base">
      <Header locale={ props.locale } pages={ structure[ props.locale ] } />

      <main className="max-w-screen-xl flex-1 prose md:prose-md lg:prose-lg px-4 py-6 mx-auto mt-20 lg:mt-24 md:px-6 md:py-8">
        {props.children}
      </main>

      <Footer locale={ props.locale }/>
    </div>
  );
}
