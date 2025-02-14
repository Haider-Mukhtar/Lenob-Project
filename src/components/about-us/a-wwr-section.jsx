import MaxWidthWrapper from "../max-width-wrapper"

const AWWRSection = () => {
  return (
    <div className="py-10">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[70%] justify-self-center border border-red-600 px-2">
          <div className="font-myFont text-myBlack">
            <p className="mt-10 font-bold text-xl/8 md:text-3xl/10">Who We Are</p>
            <p className="mt-6 text-lg/8 md:text-xl/10">Our story began after a decade of working with businesses to implement high-impact strategies. We noticed a recurring challenge: many agencies and businesses struggled to maximize the potential of paid media, SEO, and performance marketing due to a lack of in-depth expertise and strategic planning. Lenob.co was born to bridge this gap.</p>
            <p className="mt-6 text-lg/8 md:text-xl/10">Lenob.co started with a simple idea: to create an agency that doesn’t just follow trends but sets them. With a team of passionate marketers, data scientists, and creative minds, we’ve grown into a trusted partner for businesses across industries. From our early days of managing small campaigns to now scaling multi-million-dollar strategies, our journey has been one of relentless pursuit of excellence.</p>
          </div>            
      </div>
      </MaxWidthWrapper>
      <div className="bg-myPrimary -skew-y-[2deg] h-18 mt-10"></div>
    </div>
  )
}

export default AWWRSection