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
      <div className="pl-3 pr-6" style={{background: "#55ff8820 url(images/mmk2024/foto.png) no-repeat right / contain", textShadow: "1px 1px 5px #fff, 0 0 3px #fff"}}>
        <h1 className="pt-6">Memoriál Mladena Kolényho 2024</h1>
        <h5 className="pb-6" style={{lineHeight: "1.25"}}>24. ročník tradičného futbalového turnaja geografov</h5>
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
            Štartovné je <del>120</del> EUR za družstvo.<br/>
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
          <h5>Zápasy a výsledky</h5>
          <p>
            <b>Čas: 13:00 – 13:30</b><br/>
            Ihrisko 1: FYZGIS vs. HUM+REG &emsp; 1:0<br/>
            Ihrisko 2: Brno vs. Praha &emsp; 1:1
          </p>
          <p>
            <b>Čas: 13:30 – 14:00</b><br/>
            Ihrisko 1: Olomouc vs. SAV &emsp; 2:1<br/>
            Ihrisko 2: FYZGIS vs. Brno &emsp; 0:0
          </p>
          <p>
            <b>Čas: 14:00 – 14:30</b><br/>
            Ihrisko 1: HUM+REG vs. Olomouc &emsp; 0:4<br/>
            Ihrisko 2: Praha vs. SAV &emsp; 0:0
          </p>
          <p>
            <b>Čas: 14:30 – 15:00</b><br/>
            Ihrisko 1: FYZGIS vs. Praha &emsp; 3:1<br/>
            Ihrisko 2: HUM+REG vs. Brno &emsp; 0:3
          </p>
          <p>
            <b>Čas: 15:00 – 15:30</b><br/>
            Ihrisko 1: Olomouc vs. Praha &emsp; 5:0<br/>
            Ihrisko 2: Brno vs. SAV &emsp; 1:0
          </p>
          <p>
            <b>Čas: 15:30 – 16:00</b><br/>
            Ihrisko 1: FYZGIS vs. Olomouc &emsp; 0:0<br/>
            Ihrisko 2: HUM+REG vs. SAV &emsp; 2:5
          </p>
          <p>
            <b>Čas: 16:00 – 16:30</b><br/>
            Ihrisko 1: Brno vs. Olomouc &emsp; 0:5<br/>
            Ihrisko 2: Praha vs. HUM+REG &emsp; 2:2
          </p>
          <p>
            <b>Čas: 16:30 – 17:00</b><br/>
            Ihrisko 1: FYZGIS vs. SAV &emsp; 2:0
          </p>
        </div>
        <div className="pl-3">
          <h5>Tabuľka</h5>
          <table>
            <tr><td>1.</td><td>Olomouc</td><td>5 4 1 0</td><td>16:1</td><td>13</td></tr>
            <tr><td>2.</td><td>FYZGIS</td><td>5 3 2 0</td><td>6:1</td><td>11</td></tr>
            <tr><td>3.</td><td>Brno</td><td>5 2 2 1</td><td>5:6</td><td>8</td></tr>
            <tr><td>4.</td><td>SAV</td><td>5 1 1 3</td><td>6:7</td><td>4</td></tr>
            <tr><td>5.</td><td>Praha</td><td>5 0 3 2</td><td>4:11</td><td>3</td></tr>
            <tr><td>6.</td><td>HUM+REG</td><td>5 0 1 4</td><td>4:15</td><td>1</td></tr>
          </table>
        </div>

        <div className="pl-3">
          <h5>Tlačová konferencia</h5>
          <p>
            <del>Prírodovedecká fakulta UK v Bratislave, pred B1-301.</del><br/>
            <del>V čase od 18:30.</del>
          </p>
        </div>
      </div>
    </div>
  )
}
