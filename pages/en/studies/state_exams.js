import Contents from "@components/contents";
import Separator from "@components/separator";
import { OpenExt } from "@components/icons";

export default function StateExams() {
  return (
    <section>
      <h1>State exams</h1>
      <Contents levels={1} >
        <h3 className="border-l-3 md:border-l-4 border-k-brown pl-3 md:pl-5 py-2 md:py-3">Bachelor's degree</h3>
        
        {/*<h4>XXTermín 2024/25</h4>
        <p>XXObhajoba bakalárskej práce: 18. 6. 2025 a 19. 6. 2025 (<a href="/docs/bc_ss_2025.pdf" target="_blank">harmonogram [pdf]</a>).</p>*/}
        
        <h4>Mandatory subjects</h4>
        <ol>
          <li>Bachelor's Thesis Defense</li>
        </ol>
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Notes</div>
          <p className="text-ext">(1) The state exam consists of a bachelor's thesis defense. </p>
          <p className="text-ext">(2) An integral part of thesis defence is the presentation. Its duration is set strictly to 10 – 15 min.</p>
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-green pl-3 md:pl-5 py-2 md:py-3">Master's degree</h3>
        
        {/*<h4>XXTermíny 2024/25</h4>
        <p>XXObhajoby diplomových prác a skúšky z predmetov: 26. 5. 2025 – 29. 5. 2025 (<a href="/docs/mgr_ss_2025.pdf" target="_blank" >harmonogram [pdf]</a>)</p>*/}

        
        <h4>Mandatory subjects</h4>
        <ol>
          <li>Master's Thesis Defense</li>
          <li>Digital Analysis and Landscape Modelling  <a href="/docs/ss_DAMK.pdf" target="_blank">questions [pdf]</a> </li>
          <li>Physical Geography (<span className="text-k-brown italic">for those who chose this specialization</span>)  <a href="/docs/ss_FG.pdf" target="_blank">questions [pdf]</a> </li>
          <li>Geoinformatics (<span className="text-k-brown italic">for those who chose this specialization</span>)  <a href="/docs/ss_GIS.pdf" target="_blank">questions [pdf]</a></li>
        </ol>
        
        <h4>Optional subjects</h4>
        <ol>
          <li>Analysis, Algorithms, and Programming in GIS  <a href="/docs/ss_AAP.pdf" target="_blank">questions [pdf]</a></li>
          <li>Photogrammetry  <a href="/docs/ss_F.pdf" target="_blank">questions [pdf]</a></li>
          <li>Geographical Databases  <a href="/docs/ss_GBU.pdf" target="_blank">questions [pdf]</a></li>
          <li>Geomorphology and Litogeography  <a href="/docs/ss_GL.pdf" target="_blank">questions [pdf]</a></li>
          <li>Hydrogeography, Meteorology, and Climatology  <a href="/docs/ss_HMK.pdf" target="_blank">questions [pdf]</a></li>
          <li>Map Language  <a href="/docs/ss_MJ.pdf" target="_blank">questions [pdf]</a></li>
          <li>Pedogeography and Biogeography  <a href="/docs/ss_PB.pdf" target="_blank">questions [pdf]</a></li>
        </ol>
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Notes</div>
          <p className="text-ext">(1) Master's thesis defense is mandatory, as well as passing three exams from the subjects. The student chooses mandatory subject 3 or 4 depending on his specialization, and one optional subject.</p>
          <p className="text-ext">(2) An integral part of thesis defence is the presentation. Its duration is set strictly to 10 – 15 min.</p>
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 py-2 md:py-3">Doctoral degree</h3>
        
        <h4>Minimum publication requirements</h4>
        <p>Both daily and external students are obligated to turn in evidence of their publications before the final exam. Two papers accepted in the scientific journals indexed in CCC, WOS, and SCOPUS are required. One of them should fall into Q1 – Q3 (for SCOPUS journals, SCIMAGO quartile is relevant). Moreover, this article has to cover the topic of the dissertation thesis, and the student should be its 1st author.</p>
        
        <h4>Mandatory subjects</h4>
        <ol>
          <li>Prif.KFGG/Prif-DZFG-306/12 <b>Discussion Concerning Mini-Dissertation Thesis</b></li>
        </ol>
        
        <h4>Optional subjects</h4>
        
        <ol>
          <li>*Prif.KFGG/Prif-DZFG-303/15 <b>Sustainable Development</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_tur.pdf" target="_blank">syllabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-307/12 <b>Geomorphology and Litogeography  </b><a href="docs/PhD_GeomLito_EN.pdf" target="_blank">syllabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-308/12 <b>Climageography and Hydrogeography  </b><a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_klima_a_hydro.pdf" target="_blank">syllabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-309/15 <b>Biogeography</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_bio.pdf" target="_blank">syllabus [pdf]</a></li><li>*Prif.KFGG/Prif-DZFG-310/12 <b>Geoecology and Landscape Planning</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_geoeko_a_plan_kraj.pdf" target="_blank">syllabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-312/12 <b>Geographical Cartography</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_geogkartografia.pdf" target="_blank">syllabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-315/12 <b>Geographical Information Systems</b>  <a href="docs/PhD_GIS_EN.pdf" target="_blank">syllabus [pdf]</a></li><li>*Prif.KFGG/Prif-DZFG-316/12 <b>Remote Sensing</b>  <a href="docs/PhD_DPZ_EN.pdf" target="_blank">syllabus [pdf]</a></li>
          <li>*Prif.KFGG/Prif-DZFG-317/15 <b>Pedogeography</b>  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd1_povinne_volit_zakladne/PhD_syl_pedo.pdf" target="_blank">syllabus [pdf]</a></li><li>**Prif.KFGG/Prif-DZFG-305/12 <b>Selected Issues in Physical Geography and Geoecology</b>
            <ul>
              <li>Geomorphometry  <a href="docs/PhD_Gmm_EN.pdf" target="_blank">syllabus [pdf]</a></li>
              <li>Integrated Land Use Research  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd21_spec_problemy/PhD_syl_integr_vysk_vyuz_kraj.pdf" target="_blank">syllabus [pdf]</a></li>
              <li>Karstology and Speleology  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd21_spec_problemy/PhD_syl_karsologia_a_speleologia.pdf" target="_blank">syllabus [pdf]</a></li>
              <li>Methods of Hydrogeographic Research  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd21_spec_problemy/PhD_syl_metody_hydrogeogr_vyskumu.pdf" target="_blank">syllabus [pdf]</a></li>
              <li>River Geosystems, River Landscape and Their Management  <a href="docs/PhD_Fluvialne_EN.pdf" target="_blank">syllabus [pdf]</a></li>
            </ul>
          </li>
          <li>**Prif.KFGG/Prif-DZFG-313/12 <b>Selected parts from related geoscientific disciplines</b>
            <ul>
              <li>Landscape Planning  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd22_vybrane_partie/PhD_syl_krajinne_planovanie.pdf" target="_blank">syllabus [pdf]</a></li>
              <li>Quaternary and its Research Methods  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd22_vybrane_partie/PhD_syl_kvarter_a_met_jeho_vysk.pdf" target="_blank">syllabus [pdf]</a></li>
              <li>Neotectonics  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd22_vybrane_partie/PhD_syl_neotektonika.pdf" target="_blank">syllabus [pdf]</a></li>
              <li>Rainfall-Runoff Modeling  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd22_vybrane_partie/PhD_syl_zrazk_odtok_model.pdf" target="_blank">syllabus [pdf]</a></li>
            </ul>
          </li>
          <li>**Prif.KFGG/Prif-DZFG-314/15 <b>Selected methodological tools in physical geography and geoinformatics</b>
            <ul>
              <li>Internet GIS and Geoweb  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd23_vybrane_metodol/PhD_syl_internet_GIS_a_Geoweb.pdf" target="_blank">syllabus [pdf]</a></li>
              <li>Map Language, Map Semiotics  <a href="https://fns.uniba.sk/fileadmin/prif/geog/kfg/Studium/statne_skusky/phd23_vybrane_metodol/PhD_syl_jazyk_mapy_Semiotika_mapy.pdf" target="_blank">syllabus [pdf]</a></li>
            </ul>
          </li>
        </ol>
        
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Notes</div>
          
          <p className="text-ext">(1) Doctoral state exam consists of:</p>
          <ul type="disc"> 
            <li className="text-ext"><b>discussion about the written work </b>for the dissertation exam and</li> 
            <li className="text-ext"><b>an exam from two optional subjects</b>, at least one of which must be from the set of subjects marked *.</li> 
          </ul>
          <p className="text-ext">(2) The formal arrangement of the written work for the dissertation exam is not prescribed, it is determined by the supervisor. One printed copy in a simple binding is submitted.
          </p>
          <p className="text-ext">(3) At the beginning of the discussion about the written work, the student has a maximum of 10 minutes for its presentation.
          </p>
          <p className="text-ext">(4) The syllabus of subjects marked ** is proposed by the supervisor and approved by the subject-area committee. It is possible to choose any - already approved - syllabus from the offer of subjects.
          </p>
          <p className="text-ext">(5) All information and faculty instructions for the exam and the written work can be found <a href="https://fns.uniba.sk/studium/doktorandi/dizertacna-skuska/" target="_blank">here</a>.</p>
        </div>
        
      </Contents>
    </section>
  );
} 
