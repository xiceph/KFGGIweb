import Contents from "@components/contents";
import Separator from "@components/separator";
import { OpenExt } from "@components/icons";

export default function Statnice() {
  return (
    <section>
      <h1>Štátne skúšky</h1>
      <Contents levels={1} >
        <h3 className="border-l-3 md:border-l-4 border-k-brown pl-3 md:pl-5 py-2 md:py-3">Bakalárske študijné programy</h3>
        
        <h4>Termín 2022/23</h4>
        <p>Obhajoba bakalárskej práce ZKI/FYZ: 15. 6. 2023 8:00 – 14:30 (<a href="docs/HarmonogramFYZBc2023.pdf" target="_blank">harmonogram [pdf]</a>), 23. 8. 2023 9:00 (<a href="docs/HarmonogramFYZGIS2023A.pdf" target="_blank">harmonogram [pdf]</a>)</p>
        <p>Obhajoba bakalárskej práce ZKI + upGe/GIS: 14. 6. 2023 od 8:30 (<a href="docs/HarmonogramGISBc2023.pdf" target="_blank">harmonogram [pdf]</a>)</p>
        {/*<p>Obhajoba bakalárskej práce ZEP:  15. 6. 2022 , 24. 8. 2022.</p>
        <p>Obhajoba bakalárskej práce ZKI:  16. 6. 2022, 24. 8. 2022.*/}{/*22. 6. 2021 (<a href="docs/ObhajobyBc2021.pdf" target="_blank">harmonogram [pdf]</a>), 24. 8. 2021 (<a href="docs/Obhajoby2021aug.pdf" target="_blank">harmonogram [pdf]</a>).*/}
        
        <h4>Povinné predmety</h4>
        <ol>
          <li>Obhajoba bakalárskej práce</li>
        </ol>
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Poznámky</div>
          <p className="text-ext">(1) Štátna skúška pozostáva z obhajoby bakalárskej práce. </p>
          <p className="text-ext">(2) Súčasťou obhajoby bakalárskej práce je jej <b>prezentácia v trvaní 10 – 15 minút</b>.</p>
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-green pl-3 md:pl-5 py-2 md:py-3">Magisterský študijný program</h3>
        
        <h4>Termíny 2023/24</h4>
        <p>mZ-FI/FYZ:  5. 6. 2024 od 8:00 obhajoby diplomových prác, po nich skúšky z predmetov</p>
        {/*<p>mZ-FI/FYZ:  7. 6. 2023 8:30 – 12:00 obhajoby diplomových prác (<a href="docs/HarmonogramFYZMgr2023.pdf" target="_blank" >harmonogram [pdf]</a>), 8. 6. 2023 od 8:00 skúšky z predmetov (<a href="docs/HarmonogramFYZMgr2022.pdf" target="_blank" >harmonogram [pdf]</a>)</p>*/}
        <p>mZ-FI/GIS:  6. 6. 2024 od 9:00 obhajoby diplomových prác, 7. 6. 2024 od 9:00 skúšky z predmetov</p>{/*(<a href="docs/HarmonogramGISMgr2023.pdf" target="_blank" >harmonogram [pdf]</a>), 23. 8. 2023 od 10:00 (<a href="docs/HarmonogramFYZGIS2023A.pdf" target="_blank">harmonogram [pdf]</a>){/*3. 6. 2021 obhajoba diplomovej práce (<a href="docs/ObhajobyMgr2021.pdf" target="_blank">harmonogram [pdf]</a>), 10. 6. 2021 ústna skúška (<a href="docs/UstneSkuskyMgr2021.pdf" target="_blank">harmonogram [pdf]</a>), 24. 8. 2021 obhajoba diplomovej práce (<a href="docs/Obhajoby2021aug.pdf" target="_blank">harmonogram [pdf]</a>).</p>*/}

        
        <h4>Povinné predmety</h4>
        <ol>
          <li>Obhajoba diplomovej práce</li>
          <li>Digitálna analýza a modelovanie krajiny  <a href="docs/ss_DAMK.pdf" target="_blank">otázky [pdf]</a> </li>
          <li>Fyzická geografia (<span className="text-k-brown italic">pre zameranie Fyzická geografia</span>)  <a href="docs/ss_FG.pdf" target="_blank">okruhy [pdf]</a> </li>
          <li>Geoinformatika (<span className="text-k-brown italic">pre zameranie Geoinformatika</span>)  <a href="docs/ss_GIS.pdf" target="_blank">otázky [pdf]</a></li>
        </ol>
        
        <h4>Povinne voliteľné predmety</h4>
        <ol>
          <li>Analýzy, algoritmy a programovanie v GIS  <a href="docs/ss_AAP.pdf" target="_blank">otázky [pdf]</a></li>
          <li>Fotogrametria  <a href="docs/ss_F.pdf" target="_blank">otázky [pdf]</a></li>
          <li>Geografická báza údajov  <a href="docs/ss_GBU.pdf" target="_blank">otázky [pdf]</a></li>
          <li>Geomorfológia a litogeografia  <a href="docs/ss_GL.pdf" target="_blank">otázky [pdf]</a></li>
          <li>Hydrogeografia, meteorológia a klimatológia  <a href="docs/ss_HMK.pdf" target="_blank">otázky [pdf]</a></li>
          <li>Mapový jazyk  <a href="docs/ss_MJ.pdf" target="_blank">otázky [pdf]</a></li>
          <li>Pedogeografia a biogeografia  <a href="docs/ss_PB.pdf" target="_blank">otázky [pdf]</a></li>
        </ol>
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Poznámky</div>
          <p className="text-ext">(1) Povinné je <b>obhájenie diplomovej práce</b> a vykonanie <b>skúšok z troch predmetov</b>, pričom študent si vyberá v skupine povinných predmetov predmet 3 alebo 4 podľa absolvovaného zamerania a jeden ďalší zo skupiny povinne voliteľných predmetov.</p>
          <p className="text-ext">(2) Súčasťou obhajoby diplomovej práce je jej <b>prezentácia v trvaní 10 – 15 minút</b>.</p>
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 py-2 md:py-3">Doktorandský študijný program</h3>
        
        <h4>Publikačné minimum</h4>
        <p>Študenti v dennej i externej forme štúdia sú k obhajobe dizertačnej práce povinní dokladovať svoju <b>publikačnú činnosť</b> minimálne rozsahu dva články v časopisoch evidovaných v CCC, WOS, SCOPUS. Z nich jeden je z Q1 – Q3 (pre SCOPUS časopisy sa berie do úvahy kvartil SCIMAGO),  je priamo z problematiky obhajovanej dizertačnej práce a doktorand je v ňom prvý autor.</p>
        
        <h4>Povinný predmet</h4>
        <ol>
          <li>Prif.KFGG/Prif-DZFG-306/12 <b>Rozprava o písomnej práci k dizertačnej skúške</b></li>
        </ol>
        
        <h4>Povinne voliteľné predmety</h4>
        
        <ol>
          <li>*Prif.KFGG/Prif-DZFG-303/15 <b>Trvalo udržateľný rozvoj</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_tur.pdf" target="_blank" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-307/12 <b>Geomorfológia a litogeografia  </b><a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_geom_a_lito.pdf" target="_blank" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-308/12 <b>Klimageografia a hydrogeografia  </b><a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_klima_a_hydro.pdf" target="_blank" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-309/15 <b>Biogeografia</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_bio.pdf" target="_blank">sylabus [pdf]</a></li><li>*Prif.KFGG/Prif-DZFG-310/12 <b>Geoekológia a plánovanie krajiny</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_geoeko_a_plan_kraj.pdf" target="_blank" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-312/12 <b>Geografická kartografia</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_geogkartografia.pdf" target="_blank" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-315/12 <b>Geografické informačné systémy</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_gis.pdf" target="_blank" target="_blank">sylabus [pdf]</a></li><li>*Prif.KFGG/Prif-DZFG-316/12 <b>Diaľkový prieskum Zeme</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_dpz.pdf" target="_blank" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-317/15 <b>Pedogeografia</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_pedo.pdf" target="_blank" target="_blank">sylabus [pdf]</a></li><li>**Prif.KFGG/Prif-DZFG-305/12 <b>Špeciálne problémy disciplín fyzickej geografie a geoekológie</b>  <a href="https://fns.uniba.sk/pracoviska/geograficka-sekcia/kfggi/kfg/studium/statne-skusky/phd-ss-pre-dfgg-predmety-a-pokyny/specialne-problemy-disciplin-fyzickej-geografie-a-geoekologie/" target="_blank">sylaby <OpenExt /></a></li>
          <li>**Prif.KFGG/Prif-DZFG-313/12 <b>Vybrané partie z príbuzných geovedných disciplín</b>  <a href="https://fns.uniba.sk/pracoviska/geograficka-sekcia/kfggi/kfg/studium/statne-skusky/phd-ss-pre-dfgg-predmety-a-pokyny/vybrane-partie-z-pribuznych-geovednych-disciplin/" target="_blank">sylaby <OpenExt /></a></li>
          <li>**Prif.KFGG/Prif-DZFG-314/15 <b>Vybrané metodologické nástroje vo fyzickej geografii a geoinformatike</b>  <a href="https://fns.uniba.sk/pracoviska/geograficka-sekcia/kfggi/kfg/studium/statne-skusky/phd-ss-pre-dfgg-predmety-a-pokyny/vybrane-metodologicke-nastroje-vo-fyzickej-geografii-a-geoinformatike/" target="_blank">sylaby <OpenExt /></a></li>
        </ol>
        
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Poznámky a vysvetlivky</div>
          
          <p className="text-ext">(1) Dizertačná štátna skúška pozostáva z/zo:</p>
          <ul type="disc"> 
            <li className="text-ext"><b>rozpravy o písomnej práci </b>k dizertačnej skúške a</li> 
            <li className="text-ext"><b>skúšky z dvoch povinne voliteľných predmetov</b>, pričom aspoň jeden musí byť z množiny predmetov označených *.</li> 
          </ul>
          <p className="text-ext">(2) Formálna úprava písomnej práce k dizertačnej skúške nie je predpísaná, určuje ju školiteľ. Odovzdáva sa jeden vytlačený exemplár v jednoduchej väzbe.
          </p>
          <p className="text-ext">(3) Na úvod rozpravy o písomnej práci má študent k dispozícii <b>max. 10 min. na jej prezentáciu</b>.
          </p>
          <p className="text-ext">(4) Sylabus predmetov označených ** navrhuje školiteľ a schvaľuje odborová komisia. Je možné vybrať si ľubovoľný – už schválený – sylabus z ponuky predmetov.
          </p>
          <p className="text-ext">(5) Všetky info a pokyny fakulty ku skúške i písomnej práci k nej nájdete <a href="https://fns.uniba.sk/studium/doktorandi/dizertacna-skuska/" target="_blank">tu</a>.</p>
        </div>
        
      </Contents>
    </section>
  );
} 
