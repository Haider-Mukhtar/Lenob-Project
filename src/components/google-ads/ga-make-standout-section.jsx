import MaxWidthWrapper from "../max-width-wrapper"
import { FaCheckSquare } from "react-icons/fa";

const GAMakeStandoutSection = () => {
  return (
    <div className="">
      <MaxWidthWrapper>
        <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2 space-y-8">
          <p className="font-myFont text-3xl/14 md:text-5xl/20 font-bold text-myBlack text-center">
            Stories that Make us Stand to Our World
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard1">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">01</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl md:text-2xl font-bold text-myBlack mb-8">
                                Generated <span className="text-red-500">65%</span> More Signups While Lowering CPA by <span className="text-red-500">18%</span>
                              </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Industry:</span>&nbsp;
                                    Financial Services
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Low signup rates with an unoptimized campaign structure.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Improved ad targeting, revised messaging, and optimized budget allocation.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    Increased signups by 65% and reduced CPA by 18% within three months.
                                  </div>
                                </div>
                              </div>
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard2">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">02</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl md:text-2xl font-bold text-myBlack mb-8">
                                Generated&nbsp;
                                <span className="text-red-500">$1M+</span>
                                &nbsp;in Purchase Revenue with&nbsp;
                                <span className="text-red-500">15%</span>
                                <p>Lower CPA</p>
                              </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Industry:</span>&nbsp;
                                    Apparel Ecommerce
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Challenges with driving sales and maintaining MER.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Enhanced audience segmentation, revamped ad visuals, and streamlined the landing page experience.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    Achieved a 230% increase in purchases and a 15% decrease in CPA within four months.
                                  </div>
                                </div>
                              </div>
                              <div className="rounded-4xl text-myWhite font-myFont overflow-hidden bg-myCard3">
                                <p className="text-xl md:text-2xl justify-self-start font-myFont text-myWhite bg-myBlack p-5 rounded-br-2xl">03</p>
                                <div className="px-8 py-4 space-y-4 text-myBlack">
                                <div className="text-xl md:text-2xl font-bold text-myBlack mb-8">
                                Generated&nbsp;
                                <span className="text-red-500">1283 Leads</span>
                                &nbsp;in PPC Paid Search with&nbsp;
                                <span className="text-red-500">18%</span>
                                <p>Lower CPA</p>
                              </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Industry:</span>&nbsp;
                                    Insurance
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Challenge:</span>&nbsp;
                                    Underperforming paid search campaigns with poor conversion rates.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Solution:</span>&nbsp;
                                    Refined paid search strategies and improved landing page usability.
                                  </div>
                                  <div className="text-lg md:text-xl">
                                    <span className="font-semibold">Results:</span>&nbsp;
                                    Boosted conversion rates by 45% and reduced CPA by 18% in three months.
                                  </div>
                                </div>
            </div>
            </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default GAMakeStandoutSection