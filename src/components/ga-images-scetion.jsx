import { FaArrowRight } from "react-icons/fa";
import GAImage1 from "../assets/img/ga-image-1.png";
import GAImage2 from "../assets/img/ga-image-2.png";
import GAImage3 from "../assets/img/ga-image-3.png";
import MaxWidthWrapper from "./max-width-wrapper";

const GAImagesScetion = () => {
  return (
    <div className="">
      <MaxWidthWrapper>
        <div className="space-y-10">
          <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2">
            <img className="w-full object-cover" src={GAImage1} alt="google-ads-image-1" />
          </div>
          <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2">
            <img className="w-full object-cover" src={GAImage2} alt="google-ads-image-1" />
          </div>
          <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2">
            <img className="w-full object-cover" src={GAImage3} alt="google-ads-image-1" />
          </div>
        </div>
        <div className="my-10 w-full lg:w-[80%] justify-self-center border border-red-600 px-2 space-y-4">
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/9 text-center">
          This is not just advertising; it's strategic growth engineered for your success.
          </p>
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/9 text-center">
          The next step? It's right below…
          </p>
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/9 text-center">
          Let's unlock this potential for your business, turning every ad dollar into measurable impact.
          </p>
          <div className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 rounded-xl cursor-pointer border-2 border-myPrimary mt-4 hover:bg-transparent group transition-colors duration-300">
            <p className="text-myWhite group-hover:text-myPrimary font-myFont text-base md:text-xl font-bold">Claim your Free 30 Min Consultation</p>
            <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default GAImagesScetion