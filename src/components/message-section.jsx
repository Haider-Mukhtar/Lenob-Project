import MaxWidthWrapper from "./max-width-wrapper"
import LargeGreenStar from '../assets/img/stars/large-green-star.svg';

const MessageSection = () => {
  return (
    <div className="py-16">
      <MaxWidthWrapper>
        <div className="w-full lg:w-[90%] justify-self-center border border-red-600 px-2">
          <img className="aspect-square" src={LargeGreenStar} alt="Large-Green-Star" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0" >
            <p className="font-myFont text-4xl/14 md:text-5xl/20 font-semibold text-myBlack ">A Message to Ambitious Entrepreneurs</p>
            <div className="font-myFont text-myBlack text-xl/9">
              <p className="font-semibold text-myGrayText">Growing a business can be overwhelming, with constant challenges like managing budgets, clients, and employees while staying on top of marketing strategies.</p>
              <p className="font-bold text-myGrayText">At Lenob, we simplify growth by helping you focus on what matters most—building a business you love.</p>
              <p className="font-bold text-red-500">Let us turn your big dreams into reality. Ready to take the next step? Let's build something great together.</p>
            </div>            
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default MessageSection