import Separator from "@components/separator";
import { OpenExt } from "@components/icons";

export default function ForApplicants() {
  return (
    <section>
      <h1>For applicants</h1>

      <div className="flex flex-col md:flex-row-reverse items-center">
        <img className="h-44" src="/images/study1.svg" />
        <div className="mt-3 md:mr-6">
        Our department offers bachelor's, master's, and doctoral study programmes. For each degree, it is possible to choose your own subject combination while following two main specializations: <b>physical geography</b> focuses on the spatial relationships in nature, while <b>geoinformatics</b> targets the analysis of geographical information in GIS. <a href="/en/studies/study_programmes">More about the programmes...</a></div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-12">
        <img className="h-44" src="/images/out.svg" />
        <div className="mt-3 md:ml-6">We believe that learning is most effective when it is based on specific examples in the physical environment. That's why our studies include a wide range of <a href="/en/studies/excursions_and_fieldwork">excursions and fieldwork</a>.</div>
      </div>
        
      <div className="flex flex-col md:flex-row-reverse items-center mt-12">
        <img className="h-44" src="/images/grad.svg" />
        <div className="mt-3 md:mr-6">Our students are encouraged to develop skills in their own specialization. The development of individual expertise doesn't dwell only in the selection of the optional subjects but mainly in the work on the thesis, something we put a significant accent on. Explore our <a href="/en/studies/theses">list of thesis topics</a> and the <a href="/en/studies/study_programmes#theses">examples of the submitted theses</a>.</div>
      </div>
        
      <div className="flex flex-col md:flex-row items-center mt-12">
        <img className="h-44" src="/images/work1.svg" />
        <div className="mt-3 md:ml-6">The majority of our graduates work as GIS specialists or scientists focusing on the complex issues of the natural environment. <a href="/en/studies/study_programmes#employment">More about the career options of our graduates...</a></div>
      </div>

       <div className="flex flex-col md:flex-row-reverse items-center mt-12">
        <img className="h-44" src="/images/science2a.svg" />
        <div className="mt-3 md:mr-6">Besides maintaining the high quality of the educational activities, we are also aiming to be inspirational scientists for our students. That's why research is a crucial aspect of our work. Publications of our scientists often receive worldwide recognition: <a href="/en/research/subjects_of_scientific_interest">scientific fields of study</a>, <a href="/en/research/applicability">application possibilities</a>.</div>
      </div>
        
      
      <Separator />
      <p>Are you interested in the studies in our department? This page will guide you through the application process: <a href="https://uniba.sk/prihlaska/" target="_blank">https://uniba.sk/prihlaska/</a></p>
      <Separator />
      <p>If you are interested in the rigorous studies (RNDr.), please contact <a href="/en/about/employees/I Matečný">doc. RNDr. Igor Matečný, PhD.</a></p>
      
      
    </section>
  );
} 
