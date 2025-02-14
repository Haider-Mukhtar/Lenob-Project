import MaxWidthWrapper from "../max-width-wrapper"

const AWWBSection = () => {
  return (
    <div className="pb-10">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[70%] justify-self-center border border-red-600 px-2">
          <div className="font-myFont text-myBlack">
            <p className="mt-10 font-bold text-xl/8 md:text-3xl/10">What We Believe</p>
            <p className="mt-6 text-lg/8 md:text-xl/10">We believe in results, not excuses. In a world driven by data, we combine creativity with analytics to craft marketing strategies that deliver real outcomes. For us, success isn't just about clicks or impressions—it's about the tangible growth we bring to your business.</p>
          </div>            
      </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default AWWBSection