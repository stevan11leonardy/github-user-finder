"use client"

import ChevronDown from "@/icons/ChevronDown"
import ChevronUp from "@/icons/ChevronUp"
import classNames from "classnames"
import { useRef, useState } from "react"
import Repository from "../Repository"

interface SearchResultProps {
  username: string
}

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const { username } = props
  const contentRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)

  function updateContentHeight() {
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight)
  }

  return (
    <button
      onClick={() => setOpen(!open)}
      className="collapse-container mb-2 text-left"
    >
      <div
        className={"flex flex-row items-center px-2 py-4 bg-gray-300"}
      >
        <div className="grow">{username}</div>
        {(open) ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div
        className={classNames(
          { "active": open }, "content pl-5")
        }
        style={{
          maxHeight: (open && contentRef.current) ? contentHeight : 0
        }}
        ref={contentRef}
      >
        {(open) && (
          <Repository
            username={username}
            updateContentHeight={updateContentHeight}
          />
        )}
      </div>
    </button>
  )
}

export default SearchResult
