import { useState } from "react"
import HighlightedText from "./highlighted-text"
import { FaArrowRight } from "react-icons/fa6";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    businesstype: "",
    role: "",
    helpmsg: "",
    companysize: "0 - 10", // Default selection
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const companySizeOptions = ["0 - 10", "10 - 20", "20 - 30", "30 - 40", "50 +"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectCompanySize = (size) => {
    setFormData((prev) => ({ ...prev, companysize: size }));
    setDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      fname: "",
      lname: "",
      email: "",
      businesstype: "",
      role: "",
      helpmsg: "",
      companysize: "0 - 10",
    });
  };

  return (
    <div className="w-full lg:w-[80%] justify-self-center px-2 space-y-8">
            <div className="font-myFont text-xl/8 md:text-4xl/14 font-bold text-center text-myWhite">
                <HighlightedText text={"Partner With us"} />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
            <div className="w-[80%]">
              <div className="text-myWhite">
                <p className="font-bold text-lg/8 md:text-3xl/10">Get in Touch</p>
                <p className="text-base md:text-lg font-extralight">Thank you for considering Lenob to grow your business. Simply fill out the form below, and we'll be in touch shortly to guide you through the next steps.</p>
              </div>
              <div className="text-myWhite md:mt-20 mt-6">
                <p className="font-bold text-lg/8 md:text-3xl/10">Our Process</p>
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
              <div className="space-y-2 relative">
              <label className="block text-sm font-medium text-myWhite">Company Size</label>
              <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors text-left text-gray-500 text-sm font-medium">
                {formData.companysize}
              </button>
              {dropdownOpen && (
                <div className="absolute w-full bg-gray-50 border border-gray-200 rounded-lg mt-2 z-10 text-sm font-medium text-gray-500">
                  {companySizeOptions.map((size) => (
                    <p key={size} onClick={() => handleSelectCompanySize(size)} className="px-4 py-2 cursor-pointer hover:bg-gray-200 ">{size}</p>
                  ))}
                </div>
              )}
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
            </form>
          </div>
              </div>
              <button               onClick={handleSubmit} className="flex justify-center items-center bg-myPrimary justify-self-center gap-3 py-3 px-6 md:px-14 md:py-6 mt-8 rounded-xl cursor-pointer border-2 border-myPrimary hover:bg-transparent group transition-colors duration-300">
              <p className="text-myWhite group-hover:text-myPrimary font-myFont text-lg md:text-2xl font-bold">Schedule a Consultation</p>
              <FaArrowRight className="size-6 fill-myWhite group-hover:fill-myPrimary" />
            </button>
        </div>
  )
}

export default ContactForm