import MaxWidthWrapper from "./max-width-wrapper"
import { FaCheckSquare } from "react-icons/fa";

const GAMakeStandoutSection = () => {
  return (
    <div className="">
      <MaxWidthWrapper>
        <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2 space-y-8">
          <p className="font-myFont text-3xl/14 md:text-5xl/20 font-bold text-myBlack">
            Stories that Make us Stand to Our World
          </p>
          <div className="font-myFont text-myBlack">
            <div className="text-xl md:text-3xl font-bold text-myGrayText mb-8">
              Generated <span className="text-red-500">65%</span> More Signups While Lowering CPA by <span className="text-red-500">18%</span>
            </div>
            {[
              { text: "Industry: Financial Services" },
              { text: "Challenge: Low signup rates with an unoptimized campaign structure." },
              { text: "Solution: Improved ad targeting, revised messaging, and optimized budget allocation." },
              { text: "Results: Increased signups by 65% and reduced CPA by 18% within three months." }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-lg md:text-2xl font-semibold">
                <FaCheckSquare className="size-7 md:size-8 fill-myDarkPrimary flex-shrink-0" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="font-myFont text-myBlack">
            <div className="text-xl md:text-3xl font-bold text-myGrayText mb-8">
              Generated&nbsp;
              <span className="text-red-500">$1M+</span>
              &nbsp;in Purchase Revenue with&nbsp;
              <span className="text-red-500">15%</span>
              <p>Lower CPA</p>
            </div>
            {[
              { text: "Industry: Apparel Ecommerce" },
              { text: "Challenge: Challenges with driving sales and maintaining MER." },
              { text: "Solution: Enhanced audience segmentation, revamped ad visuals, and streamlined the landing page experience." },
              { text: "Results: Achieved a 230% increase in purchases and a 15% decrease in CPA within four months." }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-lg md:text-2xl font-semibold">
                <FaCheckSquare className="size-7 md:size-8 fill-myDarkPrimary flex-shrink-0" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="font-myFont text-myBlack">
            <div className="text-xl md:text-3xl font-bold text-myGrayText mb-8">
              Generated&nbsp;
              <span className="text-red-500">1283 Leads</span>
              &nbsp;in PPC Paid Search with&nbsp;
              <span className="text-red-500">18%</span>
              <p>Lower CPA</p>
            </div>
            {[
              { text: "Industry: Insurance" },
              { text: "Challenge: Underperforming paid search campaigns with poor conversion rates." },
              { text: "Solution: Refined paid search strategies and improved landing page usability." },
              { text: "Results: Boosted conversion rates by 45% and reduced CPA by 18% in three months." }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-lg md:text-2xl font-semibold">
                <FaCheckSquare className="size-7 md:size-8 fill-myDarkPrimary flex-shrink-0" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default GAMakeStandoutSection