import React from 'react'
import MaxWidthWrapper from '../max-width-wrapper'
import LeftSideVerticalText from '../ui/left-side-vertical-text'
import ContactForm from '../ui/contact-form'

const B2BFormSection = () => {
  return (
    <div>
    <div className="bg-myPrimary h-32 -mt-10"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
          <MaxWidthWrapper className={"border-white"}>
          <LeftSideVerticalText text={"Partner"} className="bg-myLightGray -left-7" />
            <ContactForm />
        </MaxWidthWrapper>
        </div>
      </div>
    <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
  </div>
  )
}

export default B2BFormSection