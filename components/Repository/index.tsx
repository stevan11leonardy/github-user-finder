import { useEffect } from "react"
import FetcherWrapper from "../FetcherWrapper"
import { useQuery } from "@tanstack/react-query"
import { getRepositoriesByUsername } from "@/apis/github/repositories"
import RepositoryResult from "../RepositoryResult"

interface RepositoryProps {
  username: string
  updateContentHeight: () => void
}

const Repository: React.FC<RepositoryProps> = (props) => {
  const { username, updateContentHeight } = props

  const {
    data,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["repositories", username],
    queryFn: () => getRepositoriesByUsername({
      username,
    }),
    enabled: !!username,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    updateContentHeight()
  }, [updateContentHeight])

  useEffect(() => {
    if (!isFetching) updateContentHeight()
  }, [isFetching, updateContentHeight])

  return (
    <FetcherWrapper isFetching={isFetching} errorMessage={error}>
      {
        data && data.map((repository: any) => (
          <RepositoryResult
            key={repository.id}
            title={repository.name}
            description={repository.description}
            starCount={repository.stargazers_count}
          />
        ))
      }
    </FetcherWrapper>
  )
}

export default Repository
