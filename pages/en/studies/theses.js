import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Contents from "@components/contents";
import Preparing from "@components/preparing";
import Separator from "@components/separator";
import { OpenExt } from "@components/icons";

function Theses({ data }) {
  return (
    <section>
      <h1>Topics of theses for the academic year 2025/26</h1>

      <Contents levels={2} >
        <p>Please note that the description of the topics is available in the Slovak language only. If you need further information, please contact a specific supervisor or head of the department.</p>
        <h3 className="border-l-3 md:border-l-4 border-k-brown pl-3 md:pl-5 py-2 md:py-3" >Bachelor's degree</h3>
        <h4>Geography, Cartography, and Geoinformatics</h4>
        { data.filter( item => item.program == "ZKI" ).map( item => (
          <React.Fragment key={item.id}>
            <dt className="font-bold text-black mt-8">
              { item.name }
            </dt>
            <dd className="mb-8 md:mb-10">
              <div className="italic mt-2 mb-4"><span className="rounded-info text-sm text-gray-600 px-3 py-1 mr-2 -ml-1 not-italic">{ item.id }</span> { item.supervisor } { item.aff && `(${item.aff})`}</div>
              <div className="text-justify">{ item.text }</div>
            </dd>
          </React.Fragment>
        ))}
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Notes</div>
          <p className="text-ext">(1) Other topics are accepted when being approved by the head of the department and study programme guarantee.</p>
        </div>
        
        <h4>Pedagogy of Geography</h4>
        { data.filter( item => item.program == "upGE" ).map( item => (
          <React.Fragment key={item.id}>
            <dt className="font-bold text-black mt-8">
              { item.name }
            </dt>
            <dd className="mb-8 md:mb-10">
              <div className="italic mt-2 mb-4"><span className="rounded-info text-sm text-gray-600 px-3 py-1 mr-2 -ml-1 not-italic">{ item.id }</span> { item.supervisor } { item.aff && `(${item.aff})`}</div>
              <div className="text-justify">{ item.text }</div>
            </dd>
          </React.Fragment>
        ))}
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Notes</div>
          <p className="text-ext">(1) Other topics are accepted when being approved by the head of the department and study programme guarantee.</p>
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-green pl-3 md:pl-5 py-2 md:py-3">Master's degree</h3>
        <h4>Physical Geography and Geoinformatics</h4>
        { data.filter( item => item.program == "mZFI" ).map( item => (
          <React.Fragment key={item.id}>
            <dt className="font-bold text-black mt-8">
              { item.name }
            </dt>
            <dd className="mb-8 md:mb-10">
              <div className="italic mt-2 mb-4"><span className="rounded-info text-sm text-gray-600 px-3 py-1 mr-2 -ml-1 not-italic">{ item.id }</span> { item.supervisor } { item.aff && `(${item.aff})`}</div>
              <div className="text-justify">{ item.text }</div>
            </dd>
          </React.Fragment>
        ))}
        <Separator size="sm" position="left" />
        <div className="mb-10 md:mb-12">
          <div className="font-bold">Notes</div>
          <p className="text-ext">(1) Other topics are accepted when being approved by the head of the department and study programme guarantee.</p>
          <p className="text-ext">(2) In some cases, diploma theses can be supervised by an external scientist, while a consultant from the department will be assigned for practical reasons.</p>
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 py-2 md:py-3">Doctoral degree</h3>
        <h4>Physical Geography, Geoecology, and Geoinformatics</h4>
        <dl>
        { data.filter( item => item.program == "dFGG" || item.program == "dFGG_GGU" ).map( item => (
          <React.Fragment key={item.id}>
            <dt className="font-bold text-black mt-8">
              { item.name }
              
            </dt>
            <dd className="mb-8 md:mb-10">
              <div className="italic mt-2 mb-4"><span className="rounded-info text-sm text-gray-600 px-3 py-1 mr-2 -ml-1 not-italic">{ item.id }</span> { item.supervisor } { item.aff && `(${item.aff})`}</div>
              <div className="text-justify">{ item.text }</div>
            </dd>
          </React.Fragment>
        ))}
        </dl>
        <p>More topics supervised in the Geographical Institute of the Slovak Academy of Sciences are listed <a href="http://www.geography.sav.sk/o-nas/doktorandske-studium/" target="_blank">here</a>. </p>
        <Separator />
        <p><a href="https://fns.uniba.sk/studium/doktorandi/prijimacie-konanie/" target="_blank" >Basic information and the topics of dissertation theses</a> – in all the study programmes on the FNS UNIBA, which are available to apply for.</p>
      </Contents>
    </section>
  );
} 

export async function getStaticProps(context) {

  const dataDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(`${dataDirectory}/temy_prac.json`, 'utf8');
  const data = JSON.parse(fileContents);

  return {
    props: { data } 
  }
}

export default Theses
