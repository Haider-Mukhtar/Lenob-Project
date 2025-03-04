import MaxWidthWrapper from "../max-width-wrapper"
import LargeBlueStar from '../../assets/img/stars/large-blue-star.svg';
import { FaCheckSquare } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";
import EMImage1 from '../../assets/img/em-image-1.png'
import EMImage2 from '../../assets/img/em-image-2.png'
import EMImage3 from '../../assets/img/em-image-3.png'
import { FaArrowRight } from "react-icons/fa6";

const EMMessageSection = () => {
  return (
    <div className="py-16">
    <MaxWidthWrapper>
      <div className="px-2">
          <p className="w-full lg:w-[50%] justify-self-center font-myFont text-xl/8 md:text-4xl/14 font-bold text-myBlack text-center">
            Your eCommerce Potential is Waiting to Be Unlocked
          </p>
          <div className="w-full lg:w-[50%] justify-self-center font-myFont text-myBlack font-medium text-lg/8 md:text-xl/10">
            <p className="mt-8 font-bold">Dear Online Entrepreneur,</p>
            <p className="mt-8">Running an eCommerce business in today’s competitive market isn’t just tough—it’s a full-scale battlefield. With thousands of stores vying for attention, what sets the winners apart?</p>
            <p className="mt-8">The ability to:</p>
            {[
              { text: "Drive highly-targeted traffic." },
              { text: "Convert visitors into repeat buyers." },
              { text: "Scale effortlessly while dominating your niche." },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <ImArrowRight className="size-7 md:size-8 fill-myPrimary flex-shrink-0" />
                <p>{item.text}</p>
              </div>
            ))}
            <p className="mt-8">This isn’t about luck—it’s about having a results-driven strategy. A strategy that’s proven, results-driven, and tailored to the unique needs of your eCommerce business.</p>
            <p className="mt-8">But here’s the reality: the eCommerce space is more competitive than ever before. The market is constantly evolving, and if you’re not innovating, your competitors are.</p>
            <p className="mt-8">To thrive, you need more than a good idea—you need a game plan. One that aligns with your goals, resonates with your audience, and adapts to the challenges of today’s market.</p>
            <p className="mt-8">Because in this battlefield, it’s not enough to survive; you need to lead, dominate, and scale to new heights.</p>

            <p className="mt-8 font-bold">But Here’s the Good News!</p>
            <p className="mt-8">You don’t have to navigate this competitive eCommerce landscape alone. With the right strategy and execution, you can:</p>
            {[
              { text: "Achieve a 5X increase in sales and conversions" },
              { text: "Generate consistent MER (Marketing Efficiency Ratio)   and   ROAS (Return on Ad Spend)" },
              { text: "Build a loyal customer base with repeat purchases Just like how we got these results for our Ecommerce clients," },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <ImArrowRight className="size-7 md:size-8 fill-myPrimary flex-shrink-0" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[70%] justify-self-center space-y-10 mt-10">
          <div className="w-full justify-self-center px-2">
            <img className="w-full object-cover" src={EMImage1} alt="em-image-1" />
          </div>
          <div className="w-full justify-self-center px-2">
            <img className="w-full object-cover" src={EMImage2} alt="em-image-1" />
          </div>
          <div className="w-full justify-self-center px-2">
            <img className="w-full object-cover" src={EMImage3} alt="em-image-1" />
          </div>
        </div>
        <div className="w-full lg:w-[50%] justify-self-center my-10 px-2 space-y-4">
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/10 text-center">
          Your competitors are moving fast—and now is the time to outpace them. The key to transforming your business is just one step away.
          </p>
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/10 text-center">
          The Next Step: It’s Right Below
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

export default EMMessageSection