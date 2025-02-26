import MaxWidthWrapper from "../max-width-wrapper"

const AWWDSection = () => {
  return (
    <div className="pb-10">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[70%] justify-self-center px-2">
          <div className="font-myFont text-myBlack">
            <p className="mt-10 font-bold text-xl/8 md:text-3xl/10">What We Do</p>
            <p className="mt-6 text-lg/8 md:text-xl/10">We specialize in:</p>
            <ul className="list-disc list-inside text-lg/8 md:text-xl/10">
              <li>
                <span className="font-bold">B2B Lead Generation:</span>&nbsp;Turning ads into pipelines of qualified leads.
              </li>
              <li>
                <span className="font-bold">SEO Services:</span>&nbsp;Helping your business rank where it matters most.
              </li>
              <li>
                <span className="font-bold">ECommerce Marketing:</span>&nbsp;Scaling online stores with data-driven strategies.
              </li>
              <li>
                <span className="font-bold">Google, Meta, and LinkedIn Ads:</span>&nbsp;Leveraging multi-channel platforms for maximum ROI.
              </li>
            </ul>
          </div>            
      </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default AWWDSection