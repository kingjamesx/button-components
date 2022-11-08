import React from 'react'
import { MdOutlineLocalGroceryStore } from "react-icons/md";
const Button = (props) => {
    const{variant,disableShadow,disabled,startIcon,endIcon,size,color}=props
    console.log(props)
  if(variant==='outline'){
    return <button className='shadow-sm w-20 h-9 m-2 bg-transparent hover:bg-lightblue text-blue font-semibold  border border-blue rounded-md'>
    Default
</button>
  }
  if(variant==='text'){
    return <button className='shadow-sm w-20 h-9 m-2 bg-transparent  text-blue font-semibold  hover:bg-lightblue rounded-md'>
    Default
</button>
  }
  if(disableShadow){
    return <button className='w-20 h-9 m-2 bg-blue  text-white font-semibold rounded-md'>
    Default
</button>
  }
  if(disabled){
    return <button className='w-20 h-9 m-2 bg-default  text-dtext font-semibold rounded-md'>
    Default
</button>
  }
  if(variant==='dtext'){
    return <button className='w-20 h-9 m-2   text-dtext rounded-md font-semibold'>
    Defaults
</button>
  }
  if(startIcon==='local_grocery_store'){
    return <button className='shadow-sm  flex flex-row  items-center gap-2 justify-center w-24 h-9 m-2 bg-blue  text-white font-semibold rounded-md'>
     <MdOutlineLocalGroceryStore/> <span >Default</span>
</button>
  }
  if(endIcon==='local_grocery_store'){
    return <button className='shadow-sm flex flex-row items-center justify-center align-center gap-2 w-24 h-9 m-2 bg-blue  text-white font-semibold rounded-md'>
    Defaults <MdOutlineLocalGroceryStore/> 
</button>
  }
 if(size==='sm'){
    return <button className='shadow-sm w-16 h-9 m-2 bg-blue  text-white font-semibold rounded-md'>
    Defaults 
</button>
  } 
  if(size==='md'){
    return <button className='shadow-sm w-20 h-9 m-2 bg-blue  text-white font-semibold rounded-md'>
    Defaults 
</button>
  }
  if(size==='lg'){
    return <button className='shadow-sm w-24 h-10 m-2 bg-blue  text-white font-semibold rounded-md'>
    Defaults 
</button>
  }
  if(color==='default'){
    return <button className='shadow-sm w-20 h-9 m-2 bg-default hover:bg-darkdefault  text-gray font-semibold rounded-md'>
    Defaults 
</button>
  }
  if(color==='primary'){
    return <button className='shadow-sm w-20 h-9 m-2 bg-primary hover:bg-dprimary  text-white font-semibold rounded-md'>
    Defaults 
</button>
  }
  if(color==='secondary'){
    return <button className='shadow-sm w-20 h-9 m-2 bg-secondary hover:bg-dsecondary  text-white font-semibold rounded-md'>
    Defaults 
</button>
  }
  if(color==='danger'){
    return <button className='shadow-sm w-20 h-9 m-2 bg-danger hover:bg-ddanger  text-white font-semibold rounded-md'>
    Defaults 
</button>
  }
  else{
    return <button className='shadow-sm w-20 h-9 bg-default hover:bg-darkdefault text-gray m-2 font-semibold rounded-md'>
    Default
</button>
  }
}

export default Button