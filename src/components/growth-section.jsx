import { lenobGrowthData } from "../lib/constants"
import MaxWidthWrapper from "./max-width-wrapper"
import HighlightedText from "./ui/highlighted-text"

const GrowthSection = () => {
  return (
    <div className="py-10">
      <MaxWidthWrapper>
        <div className="w-full lg:w-[90%] justify-self-center border border-red-600 px-2 py-10">
          <div className="text-3xl md:text-5xl/20 text-myBlack font-myFont font-semibold text-center">
            Why Businesses out there Trust&nbsp;
            <br />
            <HighlightedText text={"Lenob for Growth"} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pt-10 px-2">
            {
              lenobGrowthData.map((item) => (
                <div key={item.id} className={`${item.bgColor} rounded-xl pt-6 flex flex-col justify-between overflow-hidden hover:scale-105 transition-transform duration-300`}>
                  <div className="">
                    <p className="font-myFont text-myBlack text-lg font-bold px-8 pb-5 border-b-[0.5px]">{item.title}</p>
                    <p className="font-myFont text-myBlack text-base px-8 pt-5">{item.description}</p>
                  </div>
                  <div className="flex justify-end mt-5">
                    <div className="aspect-square h-14 bg-myWhite/50 rounded-br-full"></div>
                    <div className="aspect-square h-14 bg-myBlack/50 rounded-t-full"></div>
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

export default GrowthSection