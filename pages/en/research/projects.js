import { OpenExt } from "@components/icons";

export default function Projects() {
  return (
    <article>
      <h1>Projects</h1>
      <h5 className="mb-f6">Last projects of department</h5>
      
      <div className="border-b border-l-3 md:border-l-4 border-k-l-gray pl-3 md:pl-5 mt-4">
        <div className="flex flex-col pb-3 pt-1">
            <div><b>Project Title</b></div>
            <div className="mt-1.5">Responsible Researcher / Principal Investigator</div>
            <div>Duration  Scheme  Number</div>
        </div>
      </div>
      <div className="divide-y divide-k-xl-gray">
        <div className="flex flex-col-reverse py-3">
          <div>01.07.2024 – 30.06.2028  APVV  APVV-23-0087</div>
          <div className="mt-1.5">doc. Igor <b>Matečný</b>, PhD.</div>
          <div><a href="https://fns.uniba.sk/en/departments/geography/kfggi/kfg/about-the-department/project-insect-monitoring/" target="_blank" >Monitoring of insect pests using methods of precision agriculture <OpenExt /></a></div>
        </div>
        <div className="flex flex-col-reverse py-3">
          <div>01.07.2023 – 30.06.2027  APVV  APVV-22-0024</div>
          <div className="mt-1.5">prof. RNDr. Jozef <b>Minár</b>, CSc.</div>
          <div className="text-k-d-brown"><a href="/en/research/projects/physical-geomorphometry" target="_blank" >Physical geomorphometry for physical geographical research</a><br /> [<a href="https://xiceph.github.io/physical-geomorphometry-tools/" target="_blank" >Physical Geomorphometry Tools <OpenExt /></a>]</div>
        </div>
      </div>
     </article>
  )
}

