import MaxWidthWrapper from "./max-width-wrapper"
import LargeBlueStar from '../assets/img/stars/large-blue-star.svg';
import { FaCheckSquare } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";

const GAMessageSection = () => {
  return (
    <div className="py-16">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2">
        <img className="aspect-square" src={LargeBlueStar} alt="Large-Green-Star" />
          <p className="font-myFont text-3xl/14 md:text-5xl/20 font-bold text-myBlack ">A Personal Note to Business Owners</p>
          <div className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/9">
            <p className="mt-6">Dear Business Owner,</p>
            <p className="mt-10">If you've been searching for a fast, reliable, and scalable way to generate leads and sales, let me tell you why Google Ads could be the game-changer for your business.</p>
            <p>Imagine showing your products or services to people at the exact moment they're searching for them. That's the power of Google Ads. Every click brings potential customers closer to your business, and every conversion takes your ROI higher.</p>
            <p className="mt-10">Over the years, we've helped businesses like yours:</p>
            <div className="mt-10 flex items-center gap-2">
              <FaCheckSquare className="size-8 fill-myDarkPrimary" />
              <p>Drive consistent leads that fuel sustainable growth.</p>
            </div>
            <div className=" flex items-center gap-2">
              <FaCheckSquare className="size-8 fill-myDarkPrimary" />
              <p>Scale revenue by targeting high-intent audiences.</p>
            </div>
            <div className=" flex items-center gap-2">
              <FaCheckSquare className="size-8 fill-myDarkPrimary" />
              <p>Gain visibility in competitive markets with a laser-focused approach.</p>
            </div>
            <p className="mt-10">Using our expertise, one of our recent campaigns achieved:</p>
            <div className="mt-10 flex items-center gap-2">
              <ImArrowRight  className="size-7 fill-myPrimary" />
              <p>27,183+ clicks</p>
            </div>
            <div className=" flex items-center gap-2">
              <ImArrowRight  className="size-7 fill-myPrimary" />
              <p>1616+ Conversions</p>
            </div>
            <div className=" flex items-center gap-2">
              <ImArrowRight  className="size-7 fill-myPrimary" />
              <p>$101,483 in Conversion Value</p>
            </div>
          </div>            
      </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default GAMessageSection