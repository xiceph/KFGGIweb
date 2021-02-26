import Link from "next/link";

export default function Info() {
  return (
    <article>
      <h1>Katedra fyzickej geografie a geoinformatiky</h1>

      <h3>Vznik katedry</h3>
      <p>Katedra vznikla 1. 1. 2021 zlúčením dvoch katedier:
        <ul>
          <li>Katedry fyzickej geografie a geoekológie </li>
          <li>Katedry kartografie, geoinformatiky a diaľkového prieskumu Zeme</li>
        </ul>
      </p>

      <h3>Vedenie katedry</h3>

      <h4>Vedúci katedry</h4>
      <Link href={`/katedra/zamestnanci/${encodeURIComponent("I Matečný")}`}>
        RNDr. Igor Matečný, PhD.
      </Link>
      <p>...?</p>

      <h3>Štruktúra katedry</h3>
      <p>?</p>
    </article>
  );
} 
