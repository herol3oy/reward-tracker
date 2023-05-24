export const fetchData = async (BASE_URL) => {
  const response = await fetch(BASE_URL)
  const json = await response.json()
  return json
}
