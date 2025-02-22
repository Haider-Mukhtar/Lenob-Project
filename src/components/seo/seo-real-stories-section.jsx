import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import HighlightedText from '../ui/highlighted-text'
import LeftSideVerticalText from '../ui/left-side-vertical-text'

const SEORealStoriesSection = () => {
  return (
    <div className="py-16">
      <MaxWidthWrapper>
      <LeftSideVerticalText text={"Results"} className="bg-myPrimary -left-7" />
        <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-4 space-y-8">
          <div className="font-myFont text-3xl md:text-5xl/20 font-bold text-start text-myBlack">
            Real Stories.&nbsp;
            <HighlightedText text={"Real Results."} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard1 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">01</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl md:text-2xl font-bold text-myBlack mb-8">
                                Tech Startup: From Obscurity to Industry Leader
                              </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Lost in the depths of search results.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    A complete SEO overhaul, from technical fixes to content marketing..
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    A 250% increase in traffic and a 70% boost in leads within six months.
                                  </div>
                                </div>
                              </div>
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard2 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">02</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl md:text-2xl font-bold text-myBlack mb-8">
                                E-Commerce Brand: Turning Clicks into Cash
                              </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Declining sales and stagnant visibility.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Product page optimization, site speed enhancements, and targeted long-tail keywords.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    A 500% increase in revenue from organic traffic and sustained top rankings.
                                  </div>
                                </div>
                              </div>
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard3 hover:scale-105 transition-transform duration-300">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">03</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl md:text-2xl font-bold text-myBlack mb-8">
                                Local Business: Owning the Neighborhood
                              </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Competing against well-established local competitors.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Geo-targeted keywords, Google My Business optimization, and review generation.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    200% increase in local search visibility and consistent leads.
                                  </div>
                                </div>
            </div>
            </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SEORealStoriesSection