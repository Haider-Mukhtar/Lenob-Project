const HighlightedText = ({text}) => {
  return (
    <div className="bg-myPrimary -skew-x-12 rounded-xl inline-flex justify-self-start">
      <p className="px-4 py-2 md:px-4 md:py-0 skew-x-12 text-myWhite mx-4">{text}</p>
    </div>
  )
}

export default HighlightedText;