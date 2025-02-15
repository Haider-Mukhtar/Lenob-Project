const HighlightedText = ({text}) => {
  return (
    <div className="bg-myPrimary -skew-x-12 rounded-xl inline-flex justify-self-start">
      <p className="p-0 md:p-4 skew-x-12 text-myWhite mx-2">{text}</p>
    </div>
  )
}

export default HighlightedText;