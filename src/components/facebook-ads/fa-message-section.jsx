import MaxWidthWrapper from "../max-width-wrapper"
import LargeBlueStar from '../../assets/img/stars/large-blue-star.svg';
import { FaCheckSquare } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";

const FAMessageSection = () => {
  return (
    <div className="py-16">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[70%] justify-self-center px-2">
          <p className="font-myFont text-3xl/14 md:text-5xl/20 font-bold text-myBlack ">A Personal Note to Business Owners</p>
          <div className="font-myFont text-myBlack font-medium text-lg/8 md:text-xl/9">
            <p className="mt-6">Dear Visionary Entrepreneur,</p>
            <p className="mt-6">If you're here, it's because you already know the power of Facebook. With over 2.9 billion active users scrolling, liking, and sharing every month, your audience is there.</p>
            <p className="mt-6">The real question is—are they seeing your brand?</p>
            <p>Facebook Ads aren't just another marketing channel—they're a golden opportunity to meet your audience where they already spend their time. But, let's be honest: getting Facebook Ads right is no small feat.</p>
            <p className="mt-6">We've seen it all:</p>
            {[
              { text: "Ad budgets drained with nothing to show for it." },
              { text: "Engagement that never translates to sales." },
              { text: "Generic campaigns lost in the noise." },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaCheckSquare className="size-7 md:size-8 fill-myDarkPrimary flex-shrink-0" />
                <p>{item.text}</p>
              </div>
            ))}
            <p className="mt-6">That's where we come in.</p>
            <p>We specialize in turning “likes” into loyal customers, “shares” into sales, and clicks into consistent revenue.</p>
            <p className="mt-6">One of our recent campaigns achieved:</p>
            {[
              { text: "8,000+ clicks" },
              { text: "1,400+ conversions" },
              { text: "$120,000 in Revenue" },
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

export default FAMessageSection