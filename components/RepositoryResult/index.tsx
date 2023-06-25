import StarCount from "./StarCount"

interface RepositoryResultProps {
  title: string
  description: string
  starCount: number
}

const RepositoryResult: React.FC<RepositoryResultProps> = (props) => {
  const { title, description, starCount } = props

  return (
    <div
      className="bg-gray-400 p-2 mb-3"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="font-bold truncate">{title}</div>
        <StarCount count={starCount}/>
      </div>
      <p className="text-ellipsis overflow-hidden line-clamp-3">{description}</p>
    </div>
  )
}

export default RepositoryResult
