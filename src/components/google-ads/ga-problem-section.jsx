import MaxWidthWrapper from "../max-width-wrapper"
import HighlightedText from "../ui/highlighted-text"
import SmallWhiteStar from "../../assets/img/stars/small-white-star.svg";
import { FaArrowRight } from "react-icons/fa";

const GAProblemSection = () => {
  return (
    <div className=" bg-myPrimary -skew-y-[2deg]">
      <div className=" bg-myDarkBackground skew-y-[2deg]">
        <MaxWidthWrapper className={"border-amber-300"}>
          <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2 py-10 ">
            <div className="pt-10 font-myFont w-full justify-self-center border border-amber-400">
              <div className="bg-myPrimary justify-self-center flex  items-center px-2 py-1 rounded-full gap-2">
                <div className="bg-myWhite h-3 w-3 rounded-full"></div>
                <p className="font-myFont text-myWhite text-base">Get Consistent Sales and 3X Your Profits</p>
              </div>
              <img className="aspect-square justify-self-end" src={SmallWhiteStar} alt="Small-White-Star" />
              <div className="text-2xl md:text-5xl/16 text-myWhite text-center font-semibold ">
                Businesses typically face one of two challenges: a sales&nbsp;   
                <HighlightedText text={"problem or a lead problem."} />
                &nbsp;We solve both
              </div>
              <img className="aspect-square justify-self-start" src={SmallWhiteStar} alt="Small-White-Star" />
            </div>
            <div className="font-myFont text-myWhite my-10 space-y-10">
              <p className="text-lg md:text-3xl">Are sales falling short of expectations? Here's how we help 👉</p>
              <ul className="list-disc list-inside text-lg md:text-3xl/12">
                <li>
                  <span className="font-bold">Shopping and Performance Max:</span>
                  &nbsp;Showcase your products directly to ready-to-buy customers.
                </li>
                <li>
                  <span className="font-bold">Search Ads:</span>
                  &nbsp;Capture customers actively searching for your offerings.
                </li>
                <li>
                  <span className="font-bold">Remarketing Campaigns:</span>
                  &nbsp;Re-engage past visitors to close more sales.
                </li>
              </ul>
              <p className="text-lg md:text-3xl/12">Our Google Ads strategies turn every click into a potential purchase, helping you boost your revenue sustainably.</p>
              <p className="text-xl md:text-4xl/12 text-myPrimary font-bold">🌟Attract 3X More Leads and Clients</p>
              <p className="text-lg md:text-3xl/12">Never worry where your next lead is coming from because We've got you covered:</p>
              <ul className="list-disc list-inside text-lg md:text-3xl/12">
                <li>
                  <span className="font-bold">Shopping and Performance Max:</span>
                  &nbsp;Reach high-intent prospects searching for services like yours.
                </li>
                <li>
                  <span className="font-bold">Display Ads:</span>
                  &nbsp;Build brand awareness and capture leads across Google's vast network.
                </li>
                <li>
                  <span className="font-bold">YouTube Ads:</span>
                  &nbsp;Leverage engaging video content to generate consistent leads.
                </li>
              </ul>
              <p className="text-lg md:text-3xl/12">Our solutions ensure a steady flow of high-quality inquiries and appointments tailored to your business goals 🚀</p>
              <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 rounded-xl cursor-pointer border-2 border-myPrimary mt-4 hover:bg-transparent group transition-colors duration-300">
                <p className="text-myWhite group-hover:text-myPrimary font-myFont text-base md:text-xl font-bold">Get your Free Google Ads Audit</p>
                <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  )
}

export default GAProblemSection