import React from 'react'

const LeftSideVerticalText = ({text, className }) => {
  return (
    <div className={`absolute top-[20%] -translate-y-1/2 transform -rotate-90 origin-center ${className} px-4 py-2 hidden lg:block`}>
      <span className="text-myWhite font-myFont text-base font-normal uppercase">{text}</span>
    </div>
  )
}

export default LeftSideVerticalText