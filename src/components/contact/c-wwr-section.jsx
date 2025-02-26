import MaxWidthWrapper from "../max-width-wrapper"

const CWWRSection = () => {
  return (
    <div className="py-10">
    <MaxWidthWrapper>
      <div className="w-full lg:w-[70%] justify-self-center px-2">
          <div className="font-myFont text-myBlack">
            <p className="mt-10 font-bold text-xl/8 md:text-3xl/10">Who We Are</p>
            <p className="mt-6 text-lg/8 md:text-xl/10">Whether you're looking to scale your business, improve your lead generation, or dominate search engines, we're here to help. At Lenob.co, we believe every conversation is the start of something great.</p>
            <p className="mt-6 text-lg/8 md:text-xl/10">Fill out the form below, and one of our experts will get back to you within 24 hours:</p>
          </div>            
      </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default CWWRSection