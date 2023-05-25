import { useEffect, useState } from 'react'
import { calculateRewards } from 'utils/calculate-rewards'

export const useRewards = (transactions) => {
  const [rewards, setRewards] = useState({})

  useEffect(() => {
    const updatedRewards = calculateRewards(transactions)
    setRewards(updatedRewards)
  }, [transactions])

  return {
    monthlyRewards: rewards.monthlyRewards,
    totalRewards: rewards.totalRewards,
  }
}
