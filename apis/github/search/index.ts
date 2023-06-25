import { getApiEndpoint } from "@/utils/api"

const PATH = "search"

type SearchUsersFilter = {
  username: string,
  page?: number
}

const searchUsers = async (filter: SearchUsersFilter) => {
  const q = new URLSearchParams()

  q.set('q', filter.username.toString())
  if (filter.page) 
    q.set('page', filter.page.toString())
  q.set('per_page', "5")

  const res = await fetch(getApiEndpoint(`${PATH}/users?${q.toString()}`), {
    method: "GET",
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  if (res.ok) return res.json()

  const error = await res.json()

  throw error.message
}

export { searchUsers }

