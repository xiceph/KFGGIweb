import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Link from "next/link";
import Email from "@components/email";
import { Door, Tel, At } from "@components/icons";

function Employees({ data }) {
  return (
    <article>
      <h1>List of employees</h1>
      <h3>Head of Department</h3>
      <dl>
        { data
          .filter( item => item.position == "vedúci katedry" || item.position == "zástupca vedúceho katedry" )
          .map( item => (
          <React.Fragment key={item.id}>
            <dt>
              <Link href={`/en/about/employees/${encodeURIComponent(item.short)}`}>
                {item.name}
              </Link>
            </dt>
            <dd className="mb-8">
              <div className="italic -mt-1 mb-1">{item.positionEn}</div>
              <div>
                <span className="inline-block mr-4">
                  <Door className="text-gray-400" />
                  {item.room || ''}
                </span>
                <span className="inline-block mr-4"> 
                  <Tel className="text-gray-400" />
                  {item.tel || ''}
                </span>
                <span className="inline-block">
                  <At className="text-gray-400" />
                  <Email parts={item.email} />
                </span>
              </div>
            </dd>
          </React.Fragment>
        ))}
      </dl>
      <h3>Research and education</h3>
      <dl>
        { data
          .filter( item => item.position == "odborný asistent" || item.position == "vedecký zamestnanec" || item.position == "docent" || item.position == "profesor" )
          .map( item => (
          <React.Fragment key={item.id}>
            <dt>
              <Link href={`/en/about/employees/${encodeURIComponent(item.short)}`}>
                {item.name}
              </Link>
            </dt>
            <dd className="mb-8">
              <div className="italic -mt-1 mb-1">{item.positionEn}</div>
              <div>
                <span className="inline-block mr-4">
                  <Door className="text-gray-400" />
                  {item.room || ''}
                </span>
                <span className="inline-block mr-4"> 
                  <Tel className="text-gray-400" />
                  {item.tel || ''}
                </span>
                <span className="inline-block">
                  <At className="text-gray-400" />
                  <Email parts={item.email} />
                </span>
              </div>
            </dd>
          </React.Fragment>
        ))}
      </dl>
      <h3>Other employees</h3>
      <dl>
        {data
          .filter( item => item.position == "lektor" || item.position == "technik" || item.position == "sekretárka" )
          .map( item => (
          <React.Fragment key={item.id}>
            <dt>
              <Link href={`/en/about/employees/${encodeURIComponent(item.short)}`}>
                {item.name}
              </Link>
            </dt>
            <dd className="mb-8">
              <div className="italic -mt-1 mb-1">{item.positionEn}</div>
              <div>
                <span className="inline-block mr-4">
                  <Door className="text-gray-400" />
                  {item.room || ''}
                </span>
                <span className="inline-block mr-4"> 
                  <Tel className="text-gray-400" />
                  {item.tel || ''}
                </span>
                <span className="inline-block">
                  <At className="text-gray-400" />
                  <Email parts={item.email} />
                </span>
              </div>
            </dd>
          </React.Fragment>
        ))}
      </dl>
      
    </article>
  );
} 

export async function getStaticProps(context) {

  const dataDirectory = path.join(process.cwd(), 'data');
  const fileContents = await fs.readFile(`${dataDirectory}/zamestnanci.json`, 'utf8');
  const data = JSON.parse(fileContents);

  return {
    props: { data }, 
  }
}

export default Employees
