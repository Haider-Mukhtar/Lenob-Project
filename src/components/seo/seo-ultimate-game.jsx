import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import HighlightedText from '../ui/highlighted-text'
import Marquee from 'react-fast-marquee'

const SEOUltimateGame = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
          <MaxWidthWrapper className={"border-white"}>
            <LeftSideVerticalText text={"Game Changer"} className="bg-myLightGray -left-14" />
            <div className="w-full lg:w-[80%] justify-self-center px-4 py-10 font-myFont">
              <div className="text-xl/8 md:text-4xl/14 text-myWhite text-center font-semibold "> 
              Why SEO is the Ultimate Game-Changer Your&nbsp;
              <HighlightedText text={"Business Needs to Outrank Competitors and"} />
              &nbsp;Capture Customers
              </div>
              <div className="font-myFont text-lg/8 md:text-xl/10 text-center md:mx-12 text-myWhite my-10">
              <span className='font-bold'>Facebook Ads are not just ads.</span> They’re your business’s front-row seat to billions of potential customers. Here’s how we make them work for you: 👉
              </div>
              <Marquee pauseOnHover >
              <div className="w-80 md:w-[400px] my-10 mx-2 h-[310px] rounded-4xl text-myWhite font-myFont overflow-hidden bg-myGrowthCard1 hover:scale-105 transition-transform duration-300">
                <div className="px-8 py-6 space-y-4 text-myWhite">
                <div className="text-lg md:text-xl font-bold text-myWhite mb-8">
                Own Page One
              </div>
                  <div className="text-lg">
                  When was the last time you scrolled to page two? Exactly. 75% of users never do. With our SEO magic, your business doesn’t just show up—it owns the top spots, ensuring customers find you first.
                  </div>
                </div>
                </div>
                <div className="w-80 md:w-[400px] my-10 mx-2 h-[310px] rounded-4xl text-myWhite font-myFont overflow-hidden bg-myGrowthCard2 hover:scale-105 transition-transform duration-300">
                <div className="px-8 py-6 space-y-4 text-myWhite">
                <div className="text-lg md:text-xl font-bold text-myWhite mb-8">
                Turn Clicks into Customers
              </div>
                  <div className="text-lg">
                  Why settle for window shoppers when you can attract ready-to-buy customers? Our SEO strategies bring in intent-driven traffic—people actively searching for what you offer. We don’t just get you clicks; we deliver customers who are primed to purchase.
                  </div>
                </div>
                </div>
                <div className="w-80 md:w-[400px] my-10 mx-2 h-[310px] rounded-4xl text-myWhite font-myFont overflow-hidden bg-myGrowthCard3 hover:scale-105 transition-transform duration-300">
                <div className="px-8 py-6 space-y-4 text-myWhite">
                <div className="text-lg md:text-xl font-bold text-myWhite mb-8">
                Own Build Unshakable Trust Page One
              </div>
                  <div className="text-lg">
                  The businesses at the top of search results don’t just get seen—they get trusted. We’ll transform your website into the go-to authority in your industry, where customers know they’re in expert hands.
                  </div>
                </div>
                </div>
                <div className="w-80 md:w-[400px] my-10 mx-2 h-[310px] rounded-4xl text-myWhite font-myFont overflow-hidden bg-myGrowthCard4 hover:scale-105 transition-transform duration-300">
                <div className="px-8 py-6 space-y-4 text-myWhite">
                <div className="text-lg md:text-xl font-bold text-myWhite mb-8">
                Grow Smarter, Not Harder
              </div>
                  <div className="text-lg">
                  Paid ads stop working the moment you hit pause. But SEO? It’s the gift that keeps on giving. Our strategies are like planting seeds that grow into a forest—your traffic, leads, and sales will thrive long after the work is done.
                  </div>
                </div>
                </div>
                </Marquee>
            </div>
        </MaxWidthWrapper>
        </div>
      </div>
    <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
  </div>
  )
}

export default SEOUltimateGame