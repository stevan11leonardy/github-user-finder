"use client"

import SearchBar from '@/components/SearchBar'
import SearchResultLabel from '@/components/SearchResultLabel'
import { useState } from 'react'
import { QueryClient, QueryClientProvider, useInfiniteQuery } from '@tanstack/react-query'
import { searchUsers } from '@/apis/github/search'
import FetcherWrapper from '@/components/FetcherWrapper'
import SearchResult from '@/components/SearchResult'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 1,
      retry: 0,
    },
  },
})

function Home() {
  const [search, setSearch] = useState<string>("")

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['search-users', search],
    queryFn: ({ pageParam }) => searchUsers({ username: search, page: pageParam ?? 1 }),
    getNextPageParam: (lastPage, pages) => {
      if (Math.round(lastPage.total_count / 5) == pages.length || lastPage.total_count <= 1) return
      if (lastPage.items.length > 0) return pages.length + 1
    },
    enabled: !!search,
    refetchOnWindowFocus: false,
  })

  return (
    <main className="container flex min-h-screen flex-col p-8">
      <SearchBar
        onSubmit={(searchResult) => setSearch(searchResult)}
        isLoading={isFetching || isFetchingNextPage}
      />
      <FetcherWrapper isFetching={isFetching && !isFetchingNextPage} errorMessage={error}>
        <SearchResultLabel
          value={search}
        />
        {
          data?.pages.map((page) => page.items.map((item: any) => (
            <SearchResult
              key={item.id}
              username={item.login}
            />
          )))
        }
        <div className="my-1"></div>
        <FetcherWrapper isFetching={isFetchingNextPage}>
          {
            (hasNextPage) && (
              <button
                onClick={() => fetchNextPage()}
                className="bg-blue-700 text-white py-2 rounded"
              >
                Show More
              </button>
            )
          }
        </FetcherWrapper>
      </FetcherWrapper>
    </main>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}
