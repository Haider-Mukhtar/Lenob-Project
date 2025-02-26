import React from 'react'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'
import MaxWidthWrapper from '../max-width-wrapper'
import BlueDot from '../../assets/img/blue-dot.png'

const FAHintEveryone = () => {
  return (
    <div className='py-10'>
      <MaxWidthWrapper className={"border-white"}>
        <LeftSideVerticalText text={"Hint"} className="bg-myPrimary -left-4" />
        <div className="w-full lg:w-[70%] justify-self-center px-4 py-10 font-myFont">
              <div className="text-3xl md:text-5xl/20 text-myBlack text-center font-semibold "> 
              What Sets Us Apart?&nbsp;<br/>
              <HighlightedText text={"Hint: It’s Everything🔥"} />
          </div>
          <div className='font-myFont text-myBlack text-lg md:text-3xl/10 font-medium space-y-10 mt-10'>
            <p>Let’s face it—mediocre ad campaigns don’t cut it anymore. The algorithm is smarter, the competition is tougher, and the audience? Pickier than ever. Here’s how we makes Facebook Ads work for your business:</p>
                        {[
                          { heading: "Data-Driven Creatives That Converts",text: "Our ads don’t just look good—they’re crafted to perform. We combine deep audience insights with scroll-stopping visuals to drive action." },
              { heading: "Always-On Optimization", text: "We don’t just set it and forget it. Our team constantly monitors your campaigns, optimizing targeting, creative, and budget to ensure every dollar drives results." },
              { heading: "Beyond Clicks: Focused on ROI", text: "We know impressions and clicks don’t pay the bills. That’s why we’re laser-focused on delivering what matters most—revenue, leads, and scalable growth." },
              { heading: "Comprehensive Management",text: "From strategy to reporting, we take care of everything. You get peace of mind, and your business gets results." },
                        ].map((item, index) => (
                          <div key={index} className="flex gap-4">
                            <img src={BlueDot} className="size-7 md:size-8 fill-myDarkPrimary flex-shrink-0 mt-1" />
                            <div>
                              <p className='font-bold'>{item.heading}</p>
                              <p>{item.text}</p>
                            </div>
                          </div>
                        ))}
          </div>
          </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default FAHintEveryone