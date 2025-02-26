import React from 'react'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'
import MaxWidthWrapper from '../max-width-wrapper'
import BlueDot from '../../assets/img/blue-dot.png'

const SEOExplosiveGrowth = () => {
  return (
    <div className='py-10'>
      <MaxWidthWrapper className={"border-white"}>
        <LeftSideVerticalText text={"Hint"} className="bg-myPrimary -left-4" />
        <div className="w-full lg:w-[75%] justify-self-center px-4 py-10 font-myFont">
        <div className="bg-[#FF5E48] justify-self-center flex  items-center px-4 py-2 rounded-full gap-2">
        <div className="bg-myWhite h-3 w-3 rounded-full"></div>
        <p className="font-myFont text-myWhite text-base">Explosive Growth</p>
      </div>
              <div className="text-3xl md:text-5xl/20 text-myBlack text-center font-semibold mt-6"> 
              What makes us stand us: We Don’t Just Do SEO&nbsp;
            <HighlightedText text={"—We Deliver Explosive Growth in Clicks,"} />
            &nbsp;Leads, and Sales
          </div>
          <div className='font-myFont text-myBlack text-lg md:text-3xl/10 font-medium space-y-10 mt-10'>
                        {[
                          { heading: "We Don’t Chase Rankings—We Chase Results",text: "Most agencies celebrate a #1 spot. We celebrate increased traffic, better leads, and real revenue growth. Rankings are just part of the journey." },
              { heading: "End-to-End SEO Excellence", text: "From technical optimization to compelling content and authority-building backlinks, we cover every aspect of SEO with precision." },
              { heading: "Insight-Driven Decisions", text: "Our strategies are rooted in data and analytics. No guesswork—just actionable insights that drive measurable growth." },
              { heading: "Content That Commands Attention",text: "Our writers craft blogs, landing pages, and copy that not only rank but also resonate with your audience." },
              { heading: "Transparency That Builds Trust",text: "No jargon, no fluff—just clear, straightforward updates on how your campaigns are performing." },
                        ].map((item, index) => (
                            <div>
                              <p className='font-bold'>{item.heading}</p>
                              <p>{item.text}</p>
                            </div>
                        ))}
          </div>
          </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SEOExplosiveGrowth