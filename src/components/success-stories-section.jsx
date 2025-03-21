import MaxWidthWrapper from "./max-width-wrapper"
import HighlightedText from "./ui/highlighted-text"
import SmallBlueStar from "../assets/img/stars/small-blue-star.svg"
import { successStoriesData } from "../lib/constants"
import { FaPlay } from "react-icons/fa";
import LeftSideVerticalText from "./ui/left-side-vertical-text";

const SuccessStoriesSection = () => {
  return (
    <div className="mt-10">
      <MaxWidthWrapper>
      <LeftSideVerticalText text={"Testimonials"} className="bg-myPrimary -left-12" />
        <div className="w-full lg:w-[90%] justify-self-center px-2 py-10 ">
          <div className="font-myFont w-full lg:w-[70%] justify-self-center">
            {/*<img className="aspect-square justify-self-start" src={SmallBlueStar} alt="Small-White-Star" />*/}
            <div className="text-xl/8 md:text-4xl/14 text-myBlack text-center font-semibold ">
              <HighlightedText text={"Success"} />
              &nbsp;Stories of our loyal clients
            </div>
            <p className="text-myGrayText text-lg md:text-xl text-center mt-6">
              At Captens, we turn visions into victories—delivering growth so impactful, it leaves every client smiling from ear to ear!
            </p>
            <img className="aspect-square justify-self-end" src={SmallBlueStar} alt="Small-White-Star" />
          </div>
          {/*Mobile*/}
          <div className="md:hidden grid grid-cols-1 gap-8 px-4 mt-10 w-full justify-self-center">
            {
              successStoriesData.map((item) => (
                <div key={item.id} className="hover:scale-105 transition-transform duration-500">
                  <div className={`bg-myStoriesCardBackground border-8 ${item.borderColor} rounded-3xl px-4 py-4`}>
                    <p className="font-myFont text-2xl font-bold text-myBlack">{item.title}</p>
                    <p className="font-myFont text-base text-myBlack mt-2">{item.description}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <img className="aspect-square object-cover h-12 rounded-full" src={item.clientImage} alt="Client-Image" />
                      <div className="font-myFont text-myBlack">
                        <p className="text-sm font-semibold">{item.clientName}</p>
                        <p className="text-xs">{item.clientDetail}</p>
                      </div>
                    </div>
                    <div className="bg-myPrimary justify-self-end p-5 rounded-full border-[6px] border-myWhite -mr-10 -mb-12 cursor-pointer">
                      <FaPlay className="size-5" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {/*Tab*/}
          <div className="hidden xl:hidden md:grid grid-cols-2 gap-8 px-4 mt-10 w-[92%] justify-self-center">
            {
              successStoriesData.map((item) => (
                <div key={item.id} className="hover:scale-105 transition-transform duration-500">
                  <div className={`bg-myStoriesCardBackground border-8 ${item.borderColor} ${item.rotation} rounded-3xl px-4 py-4`}>
                    <p className="font-myFont text-2xl font-bold text-myBlack">{item.title}</p>
                    <p className="font-myFont text-base text-myBlack mt-2">{item.description}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <img className="aspect-square object-cover h-12 rounded-full" src={item.clientImage} alt="Client-Image" />
                      <div className="font-myFont text-myBlack">
                        <p className="text-sm font-semibold">{item.clientName}</p>
                        <p className="text-xs">{item.clientDetail}</p>
                      </div>
                    </div>
                    <div className="bg-myPrimary justify-self-end p-5 rounded-full border-[6px] border-myWhite -mr-10 -mb-12 cursor-pointer">
                      <FaPlay className="size-5" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {/*Desktop*/}
          <div className="hidden xl:grid grid-cols-4 mt-10 w-[92%] justify-self-center">
            {
              successStoriesData.map((item) => (
                <div key={item.id} className={`${item.marginTop} hover:scale-105 transition-transform duration-500`}>
                  <div className={`bg-myStoriesCardBackground border-8 ${item.borderColor} ${item.rotation} rounded-3xl px-4 py-4`}>
                    <p className="font-myFont text-2xl font-bold text-myBlack">{item.title}</p>
                    <p className="font-myFont text-base text-myBlack mt-2">{item.description}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <img className="aspect-square object-cover h-12 rounded-full" src={item.clientImage} alt="Client-Image" />
                      <div className="font-myFont text-myBlack">
                        <p className="text-sm font-semibold">{item.clientName}</p>
                        <p className="text-xs">{item.clientDetail}</p>
                      </div>
                    </div>
                    <div className="bg-myPrimary justify-self-end p-5 rounded-full border-[6px] border-myWhite -mr-10 -mb-12 cursor-pointer">
                      <FaPlay className="size-5" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default SuccessStoriesSection