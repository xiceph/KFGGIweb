import Link from "next/link";
import Email from "@components/email";
import { Door, Tel, At } from "@components/icons";

export default function PersonalInfo( props ) {
  const { room, tel, email, info } = props;

  return (
    <>
      <div className="mt-4">
        <Door className="text-gray-400" /> {room || ''}
      </div>
      <div className="mt-4">
        <Tel className="text-gray-400" /> {tel || ''}
      </div>
      <div className="mt-4">
        <At className="text-gray-400" /> <Email parts={email} />
      </div>
    </>
  )
}
