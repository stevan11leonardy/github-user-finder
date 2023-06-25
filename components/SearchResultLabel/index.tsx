import React from "react"

interface SearchResultLabelProps {
  value?: string
}

const SearchResultLabel: React.FC<SearchResultLabelProps> = (props) => {
  const { value } = props

  if (value === "")
    return null

  return (
    <p className="text-slate-600 my-5">
      Showing users for &ldquo;{value}&rdquo;
    </p>
  )
}

export default SearchResultLabel
