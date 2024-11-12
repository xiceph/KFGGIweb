import Head from "next/head";
import Link from "next/link";
import Contents from "@components/contents";
import Separator from "@components/separator";
import Email from "@components/email";
import { OpenExt } from "@components/icons";

export default function MMK( props ) {
  return (
    <div className="smooth">
      <Head>
        <title>Memoriál Mladena Kolényho 2024</title>
      </Head>
      <div className="pl-3" style={{background: "#55ff8820 url(images/mmk2024/foto.png) no-repeat right / contain", textShadow: "1px 1px 5px #fff, 0 0 3px #fff"}}>
        <h1 className="pt-6">Memoriál Mladena Kolényho 2024</h1>
        <h5 className="pb-6">24. ročník tradičného futbalového turnaja geografov</h5>
      </div>
      <div className="divide-y divide-k-xl-gray">
        <div className="pl-3">
          <h5>Čas</h5>
          <p>V piatok 6. decembra 2024 od 13:00, otvorenie turnaja o 12:45.</p>
        </div>
        <div className="pl-3">
          <h5>Miesto</h5>
          <p>V telocvični internátu Ľ. Štúra v Mlynskej doline v Bratislave.</p>
        </div>
        <div className="pl-3">
          <h5>Štartovné</h5>
          <p>
            Štartovné je 120 EUR za družstvo.<br/>
            Platba na účet: SK03 8330 0000 0027 0272 9663<br/>
            Kontaktná osoba: Adam Rusinko – <Email parts={["adam.rusinko"]} />.
          </p>
        </div>
        <div className="pl-3">
          <h5>Turnaj</h5>
          <p>
            Hrací čas je 2 x 10 min.<br/>
            Hrá 5 hráčov v poli.<br/>
            Poradie tímov určuje: body, vzájomné zápasy, rozdiel skóre, počet strelených gólov, najstarší aktívny hráč.
          </p>
        </div>
        <div className="pl-3">
          <h5>Zápasy</h5>
          <p>
            <b>Čas: 13:00 – 13:30</b><br/>
            Ihrisko 1: FYZGIS vs. HUM+REG<br/>
            Ihrisko 2: Brno vs. Praha
          </p>
          <p>
            <b>Čas: 13:30 – 14:00</b><br/>
            Ihrisko 1: Olomouc vs. SAV<br/>
            Ihrisko 2: FYZGIS vs. Brno
          </p>
          <p>
            <b>Čas: 14:00 – 14:30</b><br/>
            Ihrisko 1: HUM+REG vs. Olomouc<br/>
            Ihrisko 2: Praha vs. SAV
          </p>
          <p>
            <b>Čas: 14:30 – 15:00</b><br/>
            Ihrisko 1: FYZGIS vs. Praha<br/>
            Ihrisko 2: HUM+REG vs. Brno
          </p>
          <p>
            <b>Čas: 15:00 – 15:30</b><br/>
            Ihrisko 1: Olomouc vs. Praha<br/>
            Ihrisko 2: Brno vs. SAV
          </p>
          <p>
            <b>Čas: 15:30 – 16:00</b><br/>
            Ihrisko 1: FYZGIS vs. Olomouc<br/>
            Ihrisko 2: HUM+REG vs. SAV
          </p>
          <p>
            <b>Čas: 16:00 – 16:30</b><br/>
            Ihrisko 1: Brno vs. Olomouc<br/>
            Ihrisko 2: Praha vs. HUM+REG
          </p>
          <p>
            <b>Čas: 16:30 – 17:00</b><br/>
            Ihrisko 1: FYZGIS vs. SAV
          </p>
        </div>
        <div className="pl-3">
          <h5>Tlačová konferencia</h5>
          <p>
            Prírodovedecká fakulta UK v Bratislave, pred B1-301.<br/>
            V čase od 18:30.
          </p>
        </div>
      </div>
    </div>
  )
}
