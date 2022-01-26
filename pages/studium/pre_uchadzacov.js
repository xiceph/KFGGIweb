import Separator from "@components/separator";
import { OpenExt } from "@components/icons";

export default function Studovat() {
  return (
    <section>
      <h1>Pre uchádzačov</h1>

      <div className="flex flex-col md:flex-row-reverse items-center">
        <img className="h-44" src="images/study1.svg" />
        <div className="mt-3 md:mr-6">
        Naša katedra ponúka bakalársky, magisterský aj doktorandský študijný program. Na každom stupni je možné voliť si svoju profiláciu vlastnou kombináciou predmetov v dvoch hlavných smeroch: <b>fyzická geografia</b> sa sústreďuje na pochopenie prírodných procesov, javov a ich vzájomných vzťahov, <b>geoinformatika</b> na prácu s geografickými informáciami v GIS. <a href="studium/studijne_programy">Viac o ponuke programov...</a></div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-12">
        <img className="h-44" src="images/out.svg" />
        <div className="mt-3 md:ml-6">Najlepšie sa učí na konkrétnych príkladoch v skutočnom teréne. Podstatnou súčasťou štúdia u nás sú preto <a href="studium/exkurzie_a_tereny">exkurzie a terénne práce</a>.</div>
      </div>
        
      <div className="flex flex-col md:flex-row-reverse items-center mt-12">
        <img className="h-44" src="images/grad.svg" />
        <div className="mt-3 md:mr-6">Naši absolventi majú veľké možnosti individuálnej špecializácie počas svojho štúdia. Okrem voliteľných predmetov na to slúžia aj záverečné práce, na ktoré kladieme veľký dôraz. Pozrite si <a href="studium/zaverecne_prace">ponuku aktuálnych tém záverečných prác</a>, <a href="studium/studijne_programy#prace">ukážky záverečných prác našich študentov</a>.</div>
      </div>
        
      <div className="flex flex-col md:flex-row items-center mt-12">
        <img className="h-44" src="images/work1.svg" />
        <div className="mt-3 md:ml-6">Naši absolventi sú široko uplatniteľní ako GIS špecialisti aj ako prírodovedci špecializujúci sa na prierezové problémy prírody a krajiny. <a href="studium/studijne_programy#uplatnenie">Viac o uplatnení absolventov...</a></div>
      </div>

       <div className="flex flex-col md:flex-row-reverse items-center mt-12">
        <img className="h-44" src="images/science2a.svg" />
        <div className="mt-3 md:mr-6">Je pre nás dôležité, aby sme pre našich študentov neboli len kvalitnými pedagógmi, ale aj inšpiratívnymi vedcami. Centrálnou súčasťou našej práce je preto výskum, ktorý sa dokáže presadiť na poli svetovej vedy: <a href="vyskum/vedecke_zameranie">vedecké zameranie</a>, <a href="vyskum/aplikacia_v_praxi">aplikácia v praxi</a>.</div>
      </div>
        
      
      <Separator />
      <p>Ak máte záujem o štúdium u nás, podaním prihlášky Vás prevedie stránka <a href="https://uniba.sk/prihlaska/" target="_blank">https://uniba.sk/prihlaska/</a></p>
      <Separator />
      <p>Kontaktnou osobou pre rigorózne štúdium (RNDr.) z katedry je <a href="katedra/zamestnanci/M Trizna">doc. RNDr. Milan Trizna, PhD.</a></p>
      
      
    </section>
  );
} 
