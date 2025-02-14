import MaxWidthWrapper from "../max-width-wrapper"
import LargeBlueStar from '../../assets/img/stars/large-blue-star.svg';
import { FaCheckSquare } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";

const SEOMessageSection = () => {
  return (
    <div className="py-16">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[70%] justify-self-center border border-red-600 px-2">
          <p className="font-myFont text-3xl/14 md:text-5xl/20 font-bold text-myBlack ">Your Customers Are Searching—Will They Find You?</p>
          <div className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/9">
            <p className="mt-6 font-bold">Dear Entrepreneurs,</p>
            <p className="mt-6">In today's crowded digital world, standing out is more than just a challenge—it's a battle for survival.</p>
            <p className="mt-6">Millions of businesses are vying for attention, and your competitors are only a click away.</p>
            <p className="mt-6">So, how do you rise above the noise and dominate your market? 🧐</p>
            <p className="mt-6 font-bold text-red-500">Imagine this</p>
            <p>Your website appears at the top of search results every time your customers type in their needs.</p>
            <p className="mt-6">Imagine capturing leads <span className="font-bold">24/7</span>—even while you sleep.</p>
            <p>This isn't a pipe dream—</p>
            <p className="mt-6">it's the power of SEO done right.</p>
            <p className="mt-6">But let's face the reality:</p>
            {[
              { text: "The cost of ignoring SEO is rising every single day." },
              { text: "Google's algorithms are evolving faster than ever." },
              { text: "Outdated tactics won't just fail—they could get your site penalized in 2025." },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <ImArrowRight className="size-7 md:size-8 fill-myPrimary flex-shrink-0" />
                <p>{item.text}</p>
              </div>
            ))}
            <p className="mt-6">SEO is no longer a “nice-to-have”—it's a non-negotiable necessity for thriving in today's ultra-competitive landscape.</p>
            <p className="mt-6">Here's the truth: Businesses with the smartest SEO strategies don't just survive—they dominate..</p>
            <p className="mt-6">And the good news? 🙌  That's exactly what we specialize in.</p>
            <p className="mb-6">We've helped businesses like yours:</p>
            {[
              { text: "Achieve a 1,000% increase in organic traffic" },
              { text: "Generate a 300% boost in qualified leads" },
              { text: "Deliver unmatched ROI with sustainable growth" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
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

export default SEOMessageSection