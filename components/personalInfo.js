import Link from "next/link";
import Image from "next/image"
import Email from "@components/email";
import { Door, Tel, At, Pointer, OpenExt } from "@components/icons";

export default function PersonalInfo( props ) {
  const { id, room, tel, email, web, info, pubid, photo } = props;

  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-44 h-44 relative overflow-hidden bg-gray-200 bg-opacity-60 mb-6 md:mb-1 md:mr-8 rounded-full">
          { photo ?
            (
              <Image
                src={`/photos/person/${id}.jpg`}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            )
            : (
              <svg className={`h-44 w-44 p-4 inline text-gray-300 text-opacity-80 align-text-middle`} viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z" />
              </svg>
            ) 
          }
        </div>
        <div className="flex-grow self-stretch md:self-center">
          <div className="my-2">
            <Door className="text-gray-400" /> {room || ''}
          </div>
          <div className="my-2">
            <Tel className="text-gray-400" /> {tel || ''}
          </div>
          <div className="my-2">
            <At className="text-gray-400" /> <Email parts={email} />
          </div>
          { web && (
            <div className="mt-2">
              <Pointer className="text-gray-400" /> <a href={web} target="_blank">{web}<OpenExt /></a>
            </div>
          )}            
        </div>
      </div>
      {
        info && (
          <div className="mt-8">{ info }</div>
        )
      }
      {
        pubid && (
          <div className="mt-6">
            <a href={`http://alis.uniba.sk:9909/search/query?match_1=PHRASE&field_1=authid&term_1=${pubid}&sort=dateNewest&locale=sk&theme=EPC`} target="_blank">Zoznam publikácií <OpenExt /></a>
          </div>
        )
      }
    </>
  )
}
