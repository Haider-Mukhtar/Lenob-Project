import { useState } from "react"
import MaxWidthWrapper from "../max-width-wrapper"

const GAFormSection = () => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
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
      phone: "",
      email: "",
    })
  }
  return (
    <div className="my-20 font-myFont">
      <MaxWidthWrapper>
        <div className="w-full lg:w-[80%] justify-self-center border border-red-600 px-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="font-bold text-2xl md:text-5xl/20 lg:text-6xl/20">
              <p>What's Holding You Back? Let's Get Started!</p>
              <p>👉</p>
            </div>
            <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-myBlack">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-myBlack">
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
  )
}

export default GAFormSection