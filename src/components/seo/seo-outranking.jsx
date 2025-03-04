import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'

const SEOOutranking = () => {
  return (
    <div className='pb-10'>
    <MaxWidthWrapper className={"border-amber-300"}>
        <div className="w-full lg:w-[50%] justify-self-center px-4 py-10 font-myFont">
        <div className="bg-[#FF5E48] justify-self-center flex  items-center px-4 py-2 rounded-full gap-2">
        <div className="bg-myWhite h-3 w-3 rounded-full"></div>
        <p className="font-myFont text-myWhite text-base">Outranking</p>
      </div>
      <div className="text-xl/8 md:text-4xl/14 text-myBlack text-center font-semibold mt-6"> 
      Why Your Competitors Are Outranking You on&nbsp;
      <HighlightedText text={"Google and Stealing Your Customers"} />
      &nbsp;—And What You Can Do to Stop Them
        </div>
        <div className="font-myFont text-myBlack font-medium text-lg/8 md:text-xl/10">
          <p className="mt-6">Let’s get one thing straight: your competitors aren’t smarter, and they’re not running better businesses.</p>
          <p className="mt-6">What they are doing is making SEO a top priority—and it’s paying off.</p>
          <p className="mt-6">While your website struggles to climb the rankings, your competitors are capturing all the traffic, leads, and sales that should have been yours.</p>
          <p className="mt-6">They’re showing up where it matters most: at the top of search results, right in front of your target audience. And every day you delay optimizing your website, they’re pulling further ahead.</p>
          <p className="mt-6">This isn’t just a missed opportunity—it’s a direct loss for your business.</p>
          <p className="mt-6 text-myPrimary">But here’s the good news  It doesn’t have to be this way.</p>
            <p className="mt-6">At Lenob.co, we specialize in leveling the playing field.</p>
            <p>We’ll arm you with cutting-edge tools, proven strategies, and data-driven insights to not just compete—but to outshine your competitors and dominate your industry.</p>
            <p className="mt-6">Imagine seeing your website climb to the top of search results, capturing the attention of customers who are actively searching for what you offer.</p>
            <p className="mt-6">It’s time to stop letting your competition win. Let’s take your business to the next level—starting today.</p>
        </div>
      </div>
    </MaxWidthWrapper>
  </div>
  )
}

export default SEOOutranking