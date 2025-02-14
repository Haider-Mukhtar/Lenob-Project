import { FaArrowRight } from "react-icons/fa";
import FAImage1 from "../../assets/img/fa-image-1.png";
import FAImage2 from "../../assets/img/fa-image-2.png";
import FAImage3 from "../../assets/img/fa-image-3.png";
import FAImage4 from "../../assets/img/fa-image-4.png";
import MaxWidthWrapper from "../max-width-wrapper";

const FAImagesScetion = () => {
  return (
    <div className="">
      <MaxWidthWrapper>
        <div className="space-y-10">
          <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2">
            <img className="w-full object-cover" src={FAImage1} alt="facebook-ads-image-1" />
          </div>
          <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2">
            <img className="w-full object-cover" src={FAImage2} alt="facebook-ads-image-1" />
          </div>
          <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2">
            <img className="w-full object-cover" src={FAImage3} alt="facebook-ads-image-1" />
          </div>
          <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2">
            <img className="w-full object-cover" src={FAImage4} alt="facebook-ads-image-1" />
          </div>
        </div>
        <div className="my-10 w-full lg:w-[80%] justify-self-center border border-red-600 px-2 space-y-4">
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/9 text-center">
          This is what happens when creativity meets strategy.
          </p>
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/9 text-center">
          The next step? It's right below…
          </p>
          <p className="font-myFont text-myBlack font-semibold text-lg/8 md:text-xl/9 text-center">
          Let's turn your audience into advocates and your ads into profit-generating machines.
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

export default FAImagesScetion