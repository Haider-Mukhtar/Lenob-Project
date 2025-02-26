import MaxWidthWrapper from "../max-width-wrapper"
import LargeBlueStar from '../../assets/img/stars/large-blue-star.svg';
import { FaCheckSquare } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";

const GAMessageSection = () => {
  return (
    <div className="py-16">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[70%] justify-self-center px-2">
          {/*<img className="aspect-square" src={LargeBlueStar} alt="Large-Green-Star" />*/}
          <p className="font-myFont text-3xl/14 md:text-5xl/20 font-bold text-myBlack ">A Personal Note to Business Owners</p>
          <div className="font-myFont text-myBlack font-medium text-lg/8 md:text-xl/9">
            <p className="mt-6 font-bold">Dear Business Owner,</p>
            <p className="mt-6">If you've been searching for a fast, reliable, and scalable way to generate leads and sales.</p>
            <p className="mt-6">Let me tell you why Google Ads could be the game-changer for your business.</p>
            <p className="mt-6">Imagine showing your products or services to people at the exact moment they're searching for them.</p>
            <p className="mt-6">That's the power of Google Ads. Every click brings potential customers closer to your business, and every conversion takes your ROI higher.</p>
            <p className="my-6">Over the years, we've helped businesses like yours:</p>
            {[
              { text: "Drive consistent leads that fuel sustainable growth." },
              { text: "Scale revenue by targeting high-intent audiences." },
              { text: "Gain visibility in competitive markets with a laser-focused approach." },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheckSquare className="size-7 md:size-8 fill-myDarkPrimary flex-shrink-0" />
                <p>{item.text}</p>
              </div>
            ))}
            <p className="my-6">Using our expertise, one of our recent campaigns achieved:</p>
            {[
              { text: "27,183+ clicks" },
              { text: "1616+ Conversions" },
              { text: "$101,483 in Conversion Value" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <ImArrowRight className="size-7 md:size-8 fill-myPrimary flex-shrink-0" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>            
      </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default GAMessageSection