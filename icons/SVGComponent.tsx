import React from "react"

interface SvgComponentProps {
  children: any
}

const SvgComponent: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  />
)
export default SvgComponent
