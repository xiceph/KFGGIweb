export default function Email( props ) {
  const { parts } = props;
  
  let address = parts && parts.length >= 1 ? parts : [];
  
  if(address.length == 1){
    address[1] = 'uniba.sk';
  }
    
  const btoa = Buffer.from(`mailto:${address[0]}@${address[1]}`, 'binary').toString('base64')
  
  return (
    <a className="reset" href={`javascript:window.location.href=atob('${btoa}')`}>
      {address[0]}
      {address[1] && <span className="zavin"></span>}
      {address[1]}
    </a>
  )
} 
