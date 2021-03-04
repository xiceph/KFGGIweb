import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Contents from "@components/contents";

function ZaverecnePrace({ data }) {
  return (
    <section>
      <h1>Záverečné práce 2021/22</h1>
      <Contents levels={2} >
        <h3>Pre bakalárske štúdium</h3>
        <h4>Program geografia, kartografia a geoinformatika</h4>
        <dl>
        { data.filter( item => item.program == "ZKI" ).map( item => (
          <React.Fragment key={item.id}>
            <dt className="font-bold mt-4">
              { item.name }
              <span className="rounded-info text-sm text-gray-600 px-3 py-1 ml-3 ">{ item.id }</span>
            </dt>
            <dd className="mb-8">
              <div className="italic mt-3 mb-2">{ item.supervisor }</div>
              <div>{ item.text }</div>
            </dd>
          </React.Fragment>
        ))}
        </dl>
        <h4>Program geografia a geoekológia pre krajinné plánovanie</h4>
        <h3>Pre magisterské štúdium</h3>
        <h4>Program fyzická geografia a geoinformatika</h4>
        <h3>Pre doktorandské štúdium</h3>
        <h4>Program fyzická geografia, geoekológia a geoinformatika</h4>
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
