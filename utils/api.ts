const getApiEndpoint = (path?: string): string => {
  const apiURL = process.env.API_URL

  if (apiURL) {
    if (!apiURL.endsWith('/'))
      throw new Error("API_URL must end with /")
    return `${apiURL}${(path) ? path : ""}`
  }

  throw new Error("API_URL must be set in environment variable")
}

export { getApiEndpoint }