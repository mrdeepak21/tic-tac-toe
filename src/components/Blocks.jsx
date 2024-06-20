import React from 'react'

function Blocks(props) {
    const {onClick,value} = props;
  return (
    <div className='border-2 border-white border-solid p-2 font-bold text-[80px] size-32 flex items-center justify-center cursor-pointer' onClick={onClick}>{value}</div>
  )
}

export default Blocks