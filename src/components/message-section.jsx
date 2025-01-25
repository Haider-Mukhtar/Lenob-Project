import MaxWidthWrapper from "./max-width-wrapper"

const MessageSection = () => {
  return (
    <div className="py-16">
      <MaxWidthWrapper>
        <div className="grid grid-cols-2 w-full lg:w-[80%] justify-self-center border border-red-600 px-2" >
          <div>
            <p>A Message to Ambitious Entrepreneurs</p>
          </div>
          <div>
            Growing a business can be overwhelming, with constant challenges like managing budgets, clients, and employees while staying on top of marketing strategies. 
            At Lenob, we simplify growth by helping you focus on what matters most—building a business you love.&nbsp;
            <span>Let us turn your big dreams into reality. Ready to take the next step? Let's build something great together.</span>
          </div>            
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default MessageSection