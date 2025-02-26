import MaxWidthWrapper from "./max-width-wrapper"
import { FaArrowRight } from "react-icons/fa6";

const ReadyToWorkSection = () => {
  return (
    <div className="my-10">
      <MaxWidthWrapper>
      <div className="w-full lg:w-[90%] justify-self-center px-2 py-10 ">
        <div className="bg-myPrimary px-12 py-20 rounded-4xl drop-shadow-xl xl:flex justify-between items-center">
          <p className="font-myFont text-myWhite text-7xl font-bold">Ready to work with us ?</p>
          <div className="flex gap-4 justify-center items-center bg-myBlack rounded-full px-6 py-4 border-2 border-myBlack hover:border-myWhite hover:bg-transparent cursor-pointer transition-colors duration-200 mt-10 xl:mt-0">
            <p className="font-myFont text-xl font-bold text-myWhite">
              Get Started
            </p>
            <FaArrowRight className="size-6 fill-myWhite" />
          </div>
          </div>
          </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default ReadyToWorkSection