export default function Separator( props ) {
  const { position, size } = props;
  
  const auto = position == 'left' ? 'mr-auto' : 'mx-auto';
  const air = size == 'sm' ? 'my-4 md:my-5' : 'my-8 md:my-10';
  
  return (
    <div className={`border-t-2 border-k-blue border-opacity-50 w-1/3 ${air} ${auto} ${props.className}`} ></div>
  )
} 
