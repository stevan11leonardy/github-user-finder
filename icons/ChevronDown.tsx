import React from "react"
import SvgComponent from "./SVGComponent"

const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <SvgComponent {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </SvgComponent>
)

export default ChevronDown
