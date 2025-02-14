import { useState } from "react"
import MaxWidthWrapper from "../max-width-wrapper"
import HighlightedText from "../ui/highlighted-text"

const CFormSection = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    companysize: "",
    businesstype: "",
    role: "",
    helpmsg: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log("Form submitted:", formData)

    // Reset form after submission
    setFormData({
      fname: "",
      lname: "",
      email: "",
      companysize: "",
      businesstype: "",
      role: "",
      helpmsg: "",
    })
  }
  return (
    <div>
    <div className="bg-myPrimary h-32"></div>
    <div className="bg-myDarkBackground -skew-y-[2deg] font-myFont -mt-18">
      <div className="skew-y-[2deg] py-16">
        <MaxWidthWrapper className={"border-white"}>
            <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2 space-y-8">
            <div className="font-myFont text-3xl md:text-5xl/20 font-bold text-center text-myWhite">
                <HighlightedText text={"Partner With us"} />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-20">
            <div className="w-[80%]">
              <div className="text-myWhite">
                <p className="font-bold text-2xl md:text-4xl/20 lg:text-5xl/20">Get in Touch</p>
                <p className="text-base md:text-lg font-extralight">Thank you for considering Lenob to grow your business. Simply fill out the form below, and we'll be in touch shortly to guide you through the next steps.</p>
              </div>
              <div className="text-myWhite md:mt-20 mt-6">
                <p className="font-bold text-xl md:text-3xl/20">Our Process</p>
                    <ul className="text-base md:text-lg font-extralight list-disc list-inside">
                      <li>Initial Email Discovery</li>
                      <li>Introductory Call</li>
                      <li>Proposal &</li>
                      <li>ContractSeamless Onboarding</li>
                    </ul>
              </div>
            </div>
            <div className="py-6">
            <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="lg:flex gap-10 space-y-6 lg:space-y-0">
                            <div className="space-y-2 w-full">
                        <label htmlFor="fname" className="block text-sm font-medium text-myWhite">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          value={formData.fname}
                          onChange={handleChange}
                          required
                          placeholder="Enter your first name"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                        />
                      </div>
                            <div className="space-y-2 w-full">
                        <label htmlFor="lname" className="block text-sm font-medium text-myWhite">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          value={formData.lname}
                          onChange={handleChange}
                          required
                          placeholder="Enter your last name"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                        />
                      </div>
                    </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-myWhite">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="companysize" className="block text-sm font-medium text-myWhite">
                  Company Size
                </label>
                <input
                  type="number"
                  id="companysize"
                  name="companysize"
                  value={formData.companysize}
                  onChange={handleChange}
                  required
                  placeholder="0 - 10"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="businesstype" className="block text-sm font-medium text-myWhite">
                  What is your type of business?
                </label>
                <input
                  type="text"
                  id="businesstype"
                  name="businesstype"
                  value={formData.businesstype}
                  onChange={handleChange}
                  required
                  placeholder="Enter your business type"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium text-myWhite">
                What role Best describe you?
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  placeholder="Enter your role"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="helpmsg" className="block text-sm font-medium text-myWhite">
                How can we help you?
                </label>
                <input
                  type="text"
                  id="helpmsg"
                  name="helpmsg"
                  value={formData.helpmsg}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-myWhite bg-myPrimary border-2 border-myPrimary hover:text-myPrimary rounded-lg hover:bg-myWhite transition-colors duration-200 cursor-pointer"
              >
                Schedule a Consultation
              </button>
            </form>
          </div>
          </div>
        </div>
        </MaxWidthWrapper>
        </div>
      </div>
    <div className="bg-myPrimary -skew-y-[2deg] h-20"></div>
  </div>
  )
}

export default CFormSection