import { useEffect, useState } from 'react'
import { BASE_URL } from 'utils/base-url'
import { fetchData } from 'utils/fetch-data'

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const requestTransactions = async () => {
      try {
        const json = await fetchData(BASE_URL)
        setTransactions(json)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    requestTransactions()
  }, [])

  return { transactions, loading, error }
}
