import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'

const SEOHiddenCost = () => {
  return (
    <div className='py-10'>
      <MaxWidthWrapper className={"border-amber-300"}>
        <div className="w-full lg:w-[70%] justify-self-center px-4 py-10 font-myFont">
        <div className="text-3xl md:text-5xl/20 text-myBlack text-center font-semibold "> 
        The&nbsp;
        <HighlightedText text={"Hidden Costs"} />
        &nbsp;of Ignoring SEO
          </div>
          <div className="font-myFont text-myBlack font-medium text-lg/8 md:text-2xl/10">
            <p className="mt-6">Every day you’re not investing in SEO, you’re leaving money on the table. Here’s what’s at stake:</p>
            <ul className='list-disc list-inside'>
              <li>Skyrocketing Ad Costs: The average CPC on Google and Facebook has increased by over 200% in the last four years. SEO offers a sustainable way to reduce your customer acquisition costs.</li>
              <li>Lost Credibility: 75% of users never scroll past the first page of search results. If you’re not there, you’re invisible.</li>
            </ul>
            <p>Missed Opportunities: Organic traffic is the most valuable kind of traffic. Without SEO, you’re missing out on high-intent customers actively searching for your products or services.</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SEOHiddenCost