import { getApiEndpoint } from "@/utils/api"

const PATH = "users"

type GetRepositoriesByUsernameFilter = {
  username: string
  page?: number
}

const getRepositoriesByUsername = async (filter: GetRepositoriesByUsernameFilter) => {
  const q = new URLSearchParams()

  if (filter.page) q.set('page', filter.page.toString())
  
  q.set('per_page', "100")

  const res = await fetch(getApiEndpoint(`${PATH}/${filter.username}/repos?${q.toString()}`), {
    method: "GET",
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  if (res.ok) return res.json()

  const error = await res.json()

  throw error.message
}

export { getRepositoriesByUsername }

