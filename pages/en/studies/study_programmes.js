import Link from "next/link";
import Contents from "@components/contents";
import { OpenExt } from "@components/icons";

export default function StudyProgrammes() {
  return (
    <section>
      <h1>Study programmes</h1>
      <Contents levels={1} >
        <h3 className="border-l-3 md:border-l-4 border-k-brown pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Bachelor's degree</h3>
        <div className="border-l-3 md:border-l-4 border-k-brown pl-3 md:pl-5 py-1 md:pb-2 font-bold mt-s5 text-lg">3 years</div>
        
        <h4>Geography, Cartography, and Geoinformatics</h4>
        <p><i>Guarantee: doc. RNDr. Vladimír Falťan, PhD.</i></p>
        <p>The main asset of a geographer is a skill to handle various issues in spatial context while utilizing his complex knowledge of relationships within the natural environment and within the social and economic sphere. Erudition in geoinformatics enables him to deeply explore these relationships using a variety of technological tools. This study programme connects the geographical way of thinking with the geoinformatical skills and thus enables our graduates to deal with the interdisciplinary issues, something that is increasingly needed in natural sciences, the commercial sphere, and public administration.</p>
        
        <p><b>Geographic specialization</b> within the study programme incorporates the general geographical subjects with the deep knowledge of the structural nature components (bedrock, terrain, soils, plants, animals, hydrology, and climate) and relatioships between them. Both the theoretical background and practical fieldwork lead to the understanding of natural processes and their impact on human society (natural risks and hazards, climate change, etc.). Students learn how to solve the environmental issues in a complex way, as they possess substantial information from all the related natural sciences. Also, there is an opportunity to widen one's erudition with the subjects from the social and regional geography, as well as environmental studies.</p>
        
        <p><b>Geoinformatic specialization</b> within the study programme is focused on the development of skills in cartography, geographical information systems, databases, and remote sensing. Students will learn the cartographical methods essential when computing the maps but are encouraged also to gain a deeper understanding of the cartographic projections. Except for the practical capability of using GIS, they will gain the knowledge of the background processes, something that is crucial when using technology on an expert level. Subjects cover every step in the work with geographical data, including its acquisition (by fieldwork or remote sensing), processing in GIS and geodatabases, its deeper analysis using the GIS tools and statistics, and the creation of professional cartographic outputs in print or web application.</p>
        
        <p><Link href="/en/studies/subjects"><a>Schedule of the study programme</a></Link><br/><a href="/docs/predmetyBc.pdf" target="_blank">List of the subjects</a><br/></p>
        
        <p><b>Our graduates compete for jobs successfully</b>, which reflects the increasing need for geoinformatical solutions in both the commercial and public spheres. The most eligible positions are GIS analyst, data analyst, or database specialist. Due to the developed interdisciplinary and spatial thinking, our graduates often work as specialists on the environment, nature protection, or agriculture.</p>
        
        <h3 className="border-l-3 md:border-l-4 border-k-green pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Master's degree</h3>
        <div className="border-l-3 md:border-l-4 border-k-green pl-3 md:pl-5 py-1 md:pb-2 font-bold mt-s5 text-lg">Two years</div>
        <h4>Physical Geography and Geoinformatics</h4>
        <p><i>Guarantee: prof. RNDr. Jozef Minár, CSc.</i></p>

        <p>Except for the expertise knowledge in the field of physical geography, this study programme also offers the basic skills for the full-featured scientific research. Students are led to the autonomous acquisition, analysis, and interpretation of land-related data. They are able to use spatial databases in GIS softwares while gaining skills in scientific project planning, collective handling, and presenting (either like a scientific text or a map output). Even for a master's degree, students are free to choose between the specialization in physical geography or geoinformatics. There is always an opportunity to combine both specializations through the selection of the optional subjects.</p>

        <p><b>Specialization in physical geography.</b> In contrast with the bachelor's degree, the main emphasis here is on methods of exploring the natural environment. Theoretical principles introduced on the lectures are demonstrated through a variety of field and laboratory experiments, as well as GIS procedures. By stressing the practical application of their knowledge, students are being prepared to participate in interdisciplinary teams dealing with the complex up-to-date ecological and environmental issues (such as climate change). Moreover, they are encouraged to absorb the methodical approaches of landscape exploration and monitoring, landscape planning, or the strategies of sustainable development.</p>

        <p><b>Specialization in geoinformatics.</b> Subjects are focused on more sophisticated topics of cartography and GIS (e.g., deformations of cartographic projections, theoretical principles and methods of cartographic representation, remotely sensed imagery classification and segmentation, digital photogrammetry, global navigation systems, geographical databases, topologic structure of spatial objects, application of analytical and request methods, and decision-making in GIS).</p>
        
        <p><a href="/docs/predmetyMgr.pdf" target="_blank">List of the subjects</a></p>
        
        <h5 className="anchor mt-8"><span id="prace" ></span>Examples of the submitted theses</h5>
        <p>Working on a diploma thesis, as well as the discussion about them in the seminars, are the crucial parts of our studies. These activities enable a student to develope his own specialization but also teach him how to deal with the problems that usually emerge when applying acquired skills and knowledge in the specific type of research. Submitted diploma theses are therefore an appropriate demonstration of the quality of our educational activities.<br/>
        <span className="inline-block mt-3">
          <a href="/docs/FG_posteryO.pdf">Posters of the submitted diploma theses from physical geography and geoecology</a><br/>
          <a href="/docs/DOD_P2020.pdf">Examples of the submitted diploma theses from cartography, geoinformatics, and remote sensing</a></span>
        </p>

        <h5 className="anchor mt-8"><span id="uplatnenie" ></span>Employment of our graduates</h5>

        <p>Once you have finished the master's degree, a wide range of employment opportunities is available. Physical geographers and geoinformatics are needed in fields where the aspects of landscape are being complexly assessed, GIS databases are built and administered and environmental decisions are being made:</p>
        <ul>
          <li>Positions of GIS analyst or database specialist in GIS-focused companies</li>

          <li>Companies focused on nature protection, landscape planning, and environmental impact assessment (EIA)</li>
          
          <li>Scientific institutions and commercial companies focused on meteorology, climatology, and hydrology (e.g., Slovak Hydrometeorological Institute)</li>

          <li>Positions in public administration, mostly in departments of environment, transport, regional development, and agriculture</li>
          
          <li>Positions in academic institutions focused on geographical and environmental research; doctoral studies</li>
        </ul>

        <p>Our graduates are well-prepared for interdisciplinary cooperation. They possess a deep knowledge of key nature components and professional skills for inspecting them, while being familiar with a variety of social, economical, and environmental issues. A high rate of adaptability dwells in the evolved complex geospatial thinking, non-trivial understanding of natural processes, and ability to use GIS technologies effectively.<br/>
        <span className="inline-block mt-3">
          <a href="https://www.uplatnenie.sk/?degree=V%C5%A0&vs=701000000&faculty=701040000&field=1316T41&year=2019" target="_blank">Employment of our graduates in 2019 <OpenExt /></a><br/>
          <a href="https://www.uplatnenie.sk/?degree=V%C5%A0&vs=701000000&faculty=701040000&field=1316T41&year=2018" target="_blank">Employment of our graduates in 2018 <OpenExt /></a></span>
        </p>
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 pt-2 md:pt-3 pb-1">Doctoral degree</h3>
        <div className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 py-1 md:pb-2 font-bold mt-s5 text-lg">Four-year internal study / Five-year external study</div>
        
        <h4>Physical Geography, Geoecology, and Geoinformatics</h4>
        <p><i>Guarantee: prof. RNDr. Jozef Minár, CSc.</i></p>
        <p>Doctoral studies at our department are focused on the education of young scientists, with its high standard in this area guaranteed by Professor Jozef Minár. In addition to mastering basic scientific procedures, students gain the ability to independently search, select, and use the latest knowledge from theory and methodology in the scientific field of their dissertation. Subsequently, they learn to independently develop and bring theoretical and methodological innovations publishable in renowned scientific journals. Even for doctoral studies, we offer the possibility of choosing a specialization. In physical geography and geoecology, our doctoral students study the latest methods of natural landscape research, but they also acquire above-standard work in several GIS, a whole range of methods for collecting spatial information, as well as its processing in the form of modeling the development and functioning of natural geosystems. Doctoral students studying geoinformatics gain highly above-standard knowledge and competencies in the field of applied geoinformatics, cartography, and remote sensing, and acquire methods of working with geographical information in GIS at such a level that they are able to translate their theoretical and methodological innovations into the form of their own IT solutions. </p>
        <p><a href="/docs/predmetyPhD.pdf" target="_blank">List of the subjects</a></p>
      </Contents>
    </section>
  );
} 
