export default function Datum( props ) {
  const { date } = props;
  
  const options = { dateStyle: 'short' };
  
  return (
    <span className="rounded-info text-sm text-gray-600 pl-2 pr-3 py-1 mr-3" >
      <svg className="h-6 w-6 mr-1 inline-block relative -top-0.5 text-gray-500" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
      </svg>
      {date.toLocaleDateString()}
    </span>
  )
} 
