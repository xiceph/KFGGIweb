import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Contents from "@components/contents";
import Preparing from "@components/preparing";

function ZaverecnePrace({ data }) {
  return (
    <section>
      <h1>Záverečné práce 2021/22</h1>
      <Contents levels={2} >
        <h3>Pre bakalárske štúdium</h3>
        <h4>Program geografia, kartografia a geoinformatika</h4>
        <Preparing />
        <h4>Program geografia a geoekológia pre krajinné plánovanie</h4>
        <Preparing />
        <h4>Programy učiteľstvo geografie v kombinácii</h4>
        <Preparing />
        <h3>Pre magisterské štúdium</h3>
        <h4>Program fyzická geografia a geoinformatika</h4>
        <Preparing />
        <h3>Pre doktorandské štúdium</h3>
        <h4>Program fyzická geografia, geoekológia a geoinformatika</h4>
        <dl>
        { data.filter( item => item.program == "dFGG" || item.program == "dFGG_GGU" ).map( item => (
          <React.Fragment key={item.id}>
            <dt className="font-bold text-black mt-8">
              { item.name }
              
            </dt>
            <dd className="mb-8 md:mb-10">
              <div className="italic mt-2 mb-4"><span className="rounded-info text-sm text-gray-600 px-3 py-1 mr-2 -ml-1 not-italic">{ item.id }</span> { item.supervisor } { item.aff && `(${item.aff})`}</div>
              <div>{ item.text }</div>
            </dd>
          </React.Fragment>
        ))}
        </dl>
        <p><a href="https://fns.uniba.sk/studium/doktorandi/prijimacie-konanie/temy-dizertacnych-prac-pre-prijimacie-konanie/" target="_blank" >Témy dizertačných prác</a> vo všetkých programoch, o ktoré sa možno uchádzať v rámci prijímacieho konania na doktorandské štúdium pre akademický rok 2021/2022 na Prírodovedeckej fakulte UK.</p>
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

export default ZaverecnePrace
