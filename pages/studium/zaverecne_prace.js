import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Contents from "@components/contents";
import Preparing from "@components/preparing";
import Separator from "@components/separator";
import { OpenExt } from "@components/icons";

function ZaverecnePrace({ data }) {
  return (
    <section>
      <h1>Záverečné práce – ponuka tém pre akad. rok 2021/22</h1>
      <Contents levels={2} >
        <h3 className="border-l-3 md:border-l-4 border-k-brown pl-3 md:pl-5 py-2 md:py-3" >Pre bakalárske študijné programy</h3>
        <h4>Geografia, kartografia a geoinformatika</h4>
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
          <div className="font-bold">Poznámky</div>
          <p className="text-ext">(1) Nie sú vylúčené aj ďalšie témy (po osobnom dohovore). Tieto však musia byť odsúhlasené vedúcim katedry a garantom štúdia.</p>
        </div>
        
        <h4>Geografia a geoekológia pre krajinné plánovanie</h4>
        { data.filter( item => item.program == "ZEP" ).map( item => (
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
          <div className="font-bold">Poznámky</div>
          <p className="text-ext">(1) Nie sú vylúčené aj ďalšie témy (po osobnom dohovore). Tieto však musia byť odsúhlasené vedúcim katedry a garantom štúdia.</p>
        </div>
        
        <h4>Učiteľstvo Geografia</h4>
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
          <div className="font-bold">Poznámky</div>
          <p className="text-ext">(1) Nie sú vylúčené aj ďalšie témy (po osobnom dohovore). Tieto však musia byť odsúhlasené vedúcim katedry a garantom štúdia.</p>
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-green pl-3 md:pl-5 py-2 md:py-3">Pre magisterský študijný program</h3>
        <h4>Fyzická geografia a geoinformatika</h4>
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
          <div className="font-bold">Poznámky</div>
          <p className="text-ext">(1) Nie sú vylúčené aj ďalšie témy (po osobnom dohovore). Tieto však musia byť odsúhlasené vedúcim katedry a garantom štúdia.</p>
          <p className="text-ext">(2) Diplomovú prácu môže v odôvodnených prípadoch viesť i relevantný externý vedecký pracovník. V takom prípade bude z praktických dôvodov k téme vedúcim katedry určený konzultant z katedry.</p>
        </div>
        
        <h3 className="border-l-3 md:border-l-4 border-k-blue pl-3 md:pl-5 py-2 md:py-3">Pre doktorandský študijný program</h3>
        <h4>Fyzická geografia, geoekológia a geoinformatika</h4>
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
        <p>Ďalšie témy tohto študijného programu s vedením na Geografickom ústav SAV prezentuje ich <a href="http://www.geography.sav.sk/o-nas/doktorandske-studium/" target="_blank">stránka k doktorandskému štúdiu <OpenExt /></a>.</p>
        <Separator />
        <p><a href="https://fns.uniba.sk/studium/doktorandi/prijimacie-konanie/temy-dizertacnych-prac-pre-prijimacie-konanie/" target="_blank" >Základné informácie a témy dizertačných prác <OpenExt /></a> – vo všetkých programoch, o ktoré sa možno uchádzať v rámci prijímacieho konania na doktorandské štúdium pre akademický rok 2021/2022 na Prírodovedeckej fakulte UK.</p>
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
