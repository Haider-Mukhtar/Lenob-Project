import { AiOutlineClose,AiOutlinePlus } from "react-icons/ai"
import MaxWidthWrapper from "../max-width-wrapper"
import HighlightedText from "../ui/highlighted-text"
import { useState } from "react"
import { faqData } from "../../lib/constants"
import LeftSideVerticalText from "../ui/left-side-vertical-text"

const B2BFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="my-10">
      <MaxWidthWrapper>
      <LeftSideVerticalText text={"FAQ"} className="bg-myPrimary -left-3" />
        <div className="w-full md:w-[95%] lg:[80%] justify-self-center px-2 space-y-14">
          <div className="text-3xl md:text-5xl/20 text-myBlack text-center font-semibold ">  
            <HighlightedText text={"FAQs: Your Questions, Answered"} />
          </div>
          <div className="font-myFont">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <span className="text-left font-semibold text-myBlack">{faq.question}</span>
                  {openIndex === index ? (
                    <AiOutlineClose className="flex-shrink-0 ml-4" />
                  ) : (
                    <AiOutlinePlus className="flex-shrink-0 ml-4" />
                  )}
                </button>
      
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-100 rounded-lg mt-1">
                    <p className="text-myBlack">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default B2BFAQSection