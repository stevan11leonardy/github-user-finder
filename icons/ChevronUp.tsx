import React from "react"
import SvgComponent from "./SVGComponent"

const ChevronUp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <SvgComponent {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    />
  </SvgComponent>
)

export default ChevronUp
