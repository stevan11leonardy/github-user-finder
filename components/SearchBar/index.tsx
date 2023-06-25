"use client"

import { useForm } from "react-hook-form";

interface SearchFieldProps {
  search: string
}

interface SearchBarProps {
  onSubmit: (searchResult: string) => void
  defaultValue?: string
  isLoading?: boolean
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { onSubmit, defaultValue = "", isLoading = false } = props;

  const { register, handleSubmit } = useForm<SearchFieldProps>({
    defaultValues: {
      search: defaultValue
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data.search))}
      className="flex flex-col md:flex-row flex-wrap gap-4"
    >
      <input
        {...register("search", { required: true })}
        disabled={isLoading}
        type="text"
        name="search"
        className="rounded px-4 py-3 grow disabled:opacity-75"
        autoComplete="off"
        autoFocus
        placeholder="Enter Username"
      />
      <input
        disabled={isLoading}
        type="submit"
        value="Search"
        className="py-3 md:py-2 px-5 rounded bg-blue-700 text-white disabled:opacity-75"
      />
    </form>
  )
}

export default SearchBar