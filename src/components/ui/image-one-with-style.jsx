import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'

const ImageOneWithStyle = ({ image }) => {
  return (
    <div className='relative mt-20 h-fit'>
    <div className="bg-myPrimary h-28 -skew-y-2"></div>
      <div className='absolute -top-20 w-full left-0'>
      <MaxWidthWrapper>
      <div className="w-full lg:w-[75%] justify-self-center border border-red-600 px-2">
                  <img className="w-full object-cover" src={image} alt="image-1" />
                </div>
    </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default ImageOneWithStyle