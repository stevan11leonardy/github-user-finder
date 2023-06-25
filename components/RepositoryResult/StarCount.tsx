import Star from "@/icons/Star"

interface StarCountProps {
  count: number
}

const StarCount: React.FC<StarCountProps> = (props) => {
  const { count } = props

  return (
    <div className="flex items-center gap-1">
      <span>{count}</span>
      <Star />
    </div>
  )
}

export default StarCount
