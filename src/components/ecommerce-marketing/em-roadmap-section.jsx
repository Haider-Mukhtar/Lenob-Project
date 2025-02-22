import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'
import DotIcon from '../../assets/img/dot-icon.png'
import RightPath from '../../assets/img/right-path.png'
import LeftPath from '../../assets/img/left-path.png'

const EMRoadmapSection = () => {
  return (
    <div className='py-10'>
    <MaxWidthWrapper className={"border-amber-300"}>
        <LeftSideVerticalText text={"Roadmap"} className="bg-myPrimary -left-9" />
        <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2 py-10 font-myFont">
        <div className="text-3xl md:text-5xl/20 text-myBlack text-center font-semibold "> 
        <HighlightedText text={"Your Roadmap"} />
        &nbsp;to Ecommerce Success
          </div>
                      {/*Desktop*/}
                      <div className='text-myBlack font-myFont mt-16 hidden xl:block'>
                        <div className='flex  justify-self-start'>
                          <div className='bg-mySteps flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                            <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                            <div className='text-lg md:text-3xl/12'>
                              <p className='font-bold'>Strategy Call</p>
                              <p>We’ll analyze your business, identify gaps, and create a tailored action plan.</p>
                            </div>
                          </div>
              { /*<img className='mt-40 h-60' src={RightPath} />*/}
              <div className='mt-24 h-60 w-60 border-r-2 border-t-2 border-dashed' />
                        </div>
                        <div className='flex justify-end'>
              {/*<img className='mt-40 h-60' src={LeftPath} />*/}
              <div className='mt-24 h-60 w-60 border-l-2 border-t-2 border-dashed' />
                          <div className='bg-[#FF89DC] flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                            <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                            <div className='text-lg md:text-3xl/12'>
                              <p className='font-bold'>Launch & Optimize</p>
                              <p>From ad campaigns to CRO, we implement strategies designed to scale.</p>
                            </div>
                          </div>
                        </div>
                        <div className='flex  justify-self-start'>
                        <div className='bg-[#9AE982] flex gap-4 w-[60%] p-4 rounded-xl h-fit'>
                          <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
                          <div className='text-lg md:text-3xl/12'>
                            <p className='font-bold'>Scale & Dominate</p>
                            <p>As results pour in, we double down on what’s working and refine the rest.</p>
                          </div>
                        </div>
            </div>
                      </div>
          {/*Mobile*/}
          <div className='text-myBlack font-myFont mt-10 block xl:hidden space-y-4'>
          <div className='flex  justify-self-start'>
            <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
              <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
              <div className='text-lg md:text-3xl/12'>
                <p className='font-bold'>Strategy Call</p>
                <p>We’ll analyze your business, identify gaps, and create a tailored action plan.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
              <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
              <div className='text-lg md:text-3xl/12'>
                <p className='font-bold'>Launch & Optimize</p>
                <p>From ad campaigns to CRO, we implement strategies designed to scale.</p>
              </div>
            </div>
          </div>
          <div className='flex  justify-self-start'>
          <div className='bg-mySteps flex gap-4 w-full p-4 rounded-xl h-fit'>
            <img className='h-16 object-cover' src={DotIcon} alt='Dot-Icon' />
            <div className='text-lg md:text-3xl/12'>
              <p className='font-bold'>Scale & Dominate</p>
              <p>As results pour in, we double down on what’s working and refine the rest.</p>
            </div>
          </div>
            </div>
          </div>
          </div>
        </MaxWidthWrapper>
    </div>
  )
}

export default EMRoadmapSection
