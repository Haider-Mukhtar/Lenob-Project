import MaxWidthWrapper from "../max-width-wrapper"
import LargeBlueStar from '../../assets/img/stars/large-blue-star.svg';
import { FaCheckSquare } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";
import EMImage1 from '../../assets/img/em-image-1.png'
import EMImage2 from '../../assets/img/em-image-2.png'
import EMImage3 from '../../assets/img/em-image-3.png'
import { FaArrowRight } from "react-icons/fa6";
import HighlightedText from "../ui/highlighted-text";

const B2BMessageSection = () => {
  return (
    <div className="py-16">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[70%] justify-self-center px-2">
          <p className="font-myFont text-3xl/14 md:text-5xl/20 font-bold text-myBlack ">Dear Business Owners,</p>
          <div className="font-myFont text-myBlack font-medium text-lg/8 md:text-xl/9">
          <p className="mt-6">We get it. Running a business is tough. You’re pouring your time and resources into finding the right leads, only to be met with endless frustration—calls that don’t get answered, emails left unopened, and ads that don’t seem to deliver.</p>
            <p className="mt-6 font-bold">But picture this:</p>
            <p className="mt-6">What if every ad you ran delivered sales-ready prospects straight to your inbox?</p>
            <p>What if instead of chasing leads, your sales team spent their time closing deals with decision-makers who are genuinely interested in what you offer?</p>
            <p className="mt-6">This isn’t wishful thinking—this is what we do.</p>
            <p className="mt-6 text-red-500">We specialize in transforming your ad spend into predictable, scalable pipelines of qualified leads.</p>
            <p className="mt-6">Using Google, Meta, and LinkedIn Ads, we connect you with the decision-makers who matter, ensuring your message is heard by those who are ready to act.</p>
            <div className="mt-6 justify-self-center">
            <HighlightedText text={"No more wasted efforts. No more dead ends."} />
            </div>
            <p className="mt-6">Partner with Lenob.co and experience a lead generation system that works as hard as you do.</p>
            <p className="mt-6 font-bold">The Next Step: ITS RIGHT BELOW 👇</p>
          </div>
          <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 rounded-xl cursor-pointer border-2 border-myPrimary mt-10 hover:bg-transparent group transition-colors duration-300">
            <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl font-bold text-center">Claim your Free 30 Min Consultation</p>
            <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
          </div>
      </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default B2BMessageSection