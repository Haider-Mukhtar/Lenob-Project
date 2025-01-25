const HighlightedText = ({text}) => {
  return (
    <div className="bg-myPrimary -skew-x-12 rounded-xl inline-flex justify-self-start">
      <p className="p-4 skew-x-12 text-myBlack">{text}</p>
    </div>
  )
}

export default HighlightedText;