import Contents from "@components/contents";
import Separator from "@components/separator";
import { OpenExt } from "@components/icons";

export default function Statnice() {
  return (
    <section>
      <h1>Štátne skúšky</h1>
      <Contents levels={1} >
        <h3 className="border-l-3 md:border-l-4 border-k-brown pl-3 md:pl-5 py-2 md:py-3">Bakalárske študijné programy</h3>
        
        <h4>Termíny 2020/21</h4>
        <p>Obhajoba bakalárskej práce ZEP:  21. 6. 2021 (<a href="docs/HarmonogramFYZBc2021.pdf">harmonogram [pdf]</a>).</p>
        <p>Obhajoba bakalárskej práce ZKI:  22. 6. 2021 (<a href="docs/ObhajobyBc2021.pdf">harmonogram [pdf]</a>).</p>
        
        <h4>Povinné predmety</h4>
        <ol>
          <li>Obhajoba bakalárskej práce</li>
        </ol>
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Poznámky</div>
          <p className="text-ext">(1) Štátna skúška pozostáva z obhajoby bakalárskej práce. </p>
          <p className="text-ext">(2) Súčasťou obhajoby bakalárskej práce je jej <b>prezentácia v trvaní 15 minút</b>.</p> 
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-green pl-3 md:pl-5 py-2 md:py-3">Magisterský študijný program</h3>
        
        <h4>Termíny 2020/21</h4>
        <p>mZ-FI/FYZ:  7. - 9. 6. 2021 (<a href="docs/HarmonogramFYZMgr2021.pdf">harmonogram [pdf]</a>).</p>
        <p>mZ-FI/GIS:  3. 6. 2021 obhajoba diplomovej práce (<a href="docs/ObhajobyMgr2021.pdf">harmonogram [pdf]</a>), 10. 6. 2021 ústna skúška (<a href="docs/UstneSkuskyMgr2021.pdf">harmonogram [pdf]</a>).</p>

        
        <h4>Povinné predmety</h4>
        <ol>
          <li>Obhajoba diplomovej práce</li><li>Metódy fyzickogeografického výskumu  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/mgr/ss_metodyfgv.pdf">okruhy [pdf]</a> </li>
          <li>Geoekológia  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/mgr/ss_geoekologia.pdf">okruhy [pdf]</a></li>
          <li>Krajinné plánovanie  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/mgr/ss_krajplan.pdf">otázky [pdf]</a></li>
          <li>Geodézia a kartografia  <a href="docs/ss_GK.pdf">otázky [pdf]</a></li>
          <li>Geoinformatika a diaľkový prieskum Zeme  <a href="docs/ss_GIDPZ.pdf">otázky [pdf]</a></li>
        </ol>
        
        <h4>Povinne voliteľné predmety</h4>
        <ol>
          <li>Geomorfológia a litogeografia  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/mgr/ss_geom_a_lito.pdf">otázky [pdf]</a> </li>
          <li>Hydrogeografia, meteorológia a klimatológia  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/mgr/ss_hydro_met_a_klim.pdf">otázky [pdf]</a></li>
          <li>Pedogeografia a biogeografia  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/mgr/ss_pedo_a_bio.pdf">otázky [pdf]</a></li>
          <li>Geografická báza údajov  <a href="docs/ss_GBU.pdf">otázky [pdf]</a></li>
          <li>Fotogrametria  <a href="docs/ss_FG.pdf">otázky [pdf]</a></li>
          <li>Komplexný digitálny model reliéfu  <a href="docs/ss_KDMR.pdf">otázky [pdf]</a></li>
        </ol>
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Poznámky</div>
          <p className="text-ext">(1) Povinné je <b>obhájenie diplomovej práce</b> a vykonanie <b>skúšok z troch predmetov</b>, pričom študent si vyberá <b>dva</b> zo skupiny povinných predmetov, a to buď z množiny predmetov 2., 3. a 4., alebo 5. a 6., a <b>jeden</b> zo skupiny povinne voliteľných predmetov, a to buď z množiny predmetov 1., 2. a 3. alebo 4., 5. a 6.</p>
          <p className="text-ext">(2) Súčasťou obhajoby diplomovej práce je jej <b>prezentácia v trvaní 15 minút</b>.</p>
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 py-2 md:py-3">Doktorandský študijný program</h3>
        
        <h4>Publikačné minimum</h4>
        <p>Študenti v dennej i externej forme štúdia sú k obhajobe dizertačnej práce povinní dokladovať svoju <b>publikačnú činnosť</b> minimálne rozsahu dva články v časopisoch kategórie „A“ v chápaní Akreditačnej komisie, z ktorých minimálne jeden v časopise s IF &gt; 0,25 a minimálne jeden priamo z problematiky obhajovanej dizertačnej práce.</p>
        
        <h4>Povinný predmet</h4>
        <ol>
          <li>Prif.KFGG/Prif-DZFG-306/12 <b>Rozprava o písomnej práci k dizertačnej skúške</b></li>
        </ol>
        
        <h4>Povinne voliteľné predmety</h4>
        
        <ol>
          <li>*Prif.KFGG/Prif-DZFG-303/15 <b>Trvalo udržateľný rozvoj</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_tur.pdf" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-307/12 <b>Geomorfológia a litogeografia  </b><a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_geom_a_lito.pdf" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-308/12 <b>Klimageografia a hydrogeografia  </b><a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_klima_a_hydro.pdf" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-309/15 <b>Biogeografia</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_bio.pdf">sylabus [pdf]</a></li><li>*Prif.KFGG/Prif-DZFG-310/12 <b>Geoekológia a plánovanie krajiny</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_geoeko_a_plan_kraj.pdf" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-312/12 <b>Geografická kartografia</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_geogkartografia.pdf" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-315/12 <b>Geografické informačné systémy</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_gis.pdf" target="_blank">sylabus [pdf]</a></li><li>*Prif.KFGG/Prif-DZFG-316/12 <b>Diaľkový prieskum Zeme</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_dpz.pdf" target="_blank">sylabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-317/15 <b>Pedogeografia</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_pedo.pdf" target="_blank">sylabus [pdf]</a></li><li>**Prif.KFGG/Prif-DZFG-305/12 <b>Špeciálne problémy disciplín fyzickej geografie a geoekológie</b>  <a href="https://fns.uniba.sk/pracoviska/geograficka-sekcia/kfggi/kfg/studium/statne-skusky/phd-ss-pre-dfgg-predmety-a-pokyny/specialne-problemy-disciplin-fyzickej-geografie-a-geoekologie/" target="_blank">sylaby <OpenExt /></a></li>
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
