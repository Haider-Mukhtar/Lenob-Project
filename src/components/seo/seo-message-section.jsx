import MaxWidthWrapper from "../max-width-wrapper"
import LargeBlueStar from '../../assets/img/stars/large-blue-star.svg';
import { FaCheckSquare } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";
import SEOImage1 from '../../assets/img/seo-image-1.png'
import SEOImage2 from '../../assets/img/seo-image-2.png'
import SEOImage3 from '../../assets/img/seo-image-3.png'
import { FaArrowRight } from "react-icons/fa6";

const SEOMessageSection = () => {
  return (
    <div className="py-16">
    <MaxWidthWrapper>
      <div className="px-2">
          <p className="font-myFont text-xl/8 md:text-3xl/10 font-bold text-myBlack text-center">
            Your Customers Are Searching—Will They Find You?
          </p>
          <div className="w-full lg:w-[50%] justify-self-center font-myFont text-myBlack font-medium text-lg/8 md:text-xl/10">
            <p className="mt-8 font-bold">Dear Entrepreneurs,</p>
            <p className="mt-8">In today's crowded digital world, standing out is more than just a challenge—it's a battle for survival.</p>
            <p className="mt-8">Millions of businesses are vying for attention, and your competitors are only a click away.</p>
            <p className="mt-8">So, how do you rise above the noise and dominate your market? 🧐</p>
            <p className="mt-8 font-bold text-red-500">Imagine this</p>
            <p>Your website appears at the top of search results every time your customers type in their needs.</p>
            <p className="mt-8">Imagine capturing leads <span className="font-bold">24/7</span>—even while you sleep.</p>
            <p>This isn't a pipe dream—</p>
            <p className="mt-8">it's the power of SEO done right.</p>
            <p className="mt-8">But let's face the reality:</p>
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
            <p className="mt-8">SEO is no longer a “nice-to-have”—it's a non-negotiable necessity for thriving in today's ultra-competitive landscape.</p>
            <p className="mt-8">Here's the truth: Businesses with the smartest SEO strategies don't just survive—they dominate..</p>
            <p className="mt-8">And the good news? 🙌  That's exactly what we specialize in.</p>
            <p className="mb-8">We've helped businesses like yours:</p>
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
          <div className="w-full lg:w-[70%] justify-self-center space-y-10 mt-10">
          <div className="w-full justify-self-center px-2">
            <img className="w-full object-cover rounded-lg drop-shadow-xl" src={SEOImage1} alt="seo-image-1" />
          </div>
          <div className="w-full justify-self-center px-2">
            <img className="w-full object-cover rounded-lg drop-shadow-xl" src={SEOImage2} alt="seo-image-1" />
          </div>
          <div className="w-full justify-self-center px-2">
            <img className="w-full object-cover rounded-lg drop-shadow-xl" src={SEOImage3} alt="seo-image-1" />
          </div>
        </div>
        <div className="w-full lg:w-[50%] justify-self-center my-10 px-2 space-y-4">
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/10 text-center">
          Our approach isn’t about gaming the system or stuffing keywords. It’s about building trust, authority, and visibility that positions your brand as a leader in your industry.
          </p>
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/10 text-center">
          If you’re ready to unlock the potential of your digital presence, let’s talk. 👉
          </p>
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/10 text-center">
              Your competitors won’t wait—and neither should you.
              <br/>
              The Next Step: ITS RIGHT BELOW
          </p>
          <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 rounded-xl cursor-pointer border-2 border-myPrimary mt-4 hover:bg-transparent group transition-colors duration-300">
            <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl font-bold text-center">Claim your Free 30 Min Consultation</p>
            <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SEOMessageSection