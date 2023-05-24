import { calculatePoints } from './calculate-points'

export const calculateRewards = (transactions) => {
  const monthlyRewards = {}
  const totalRewards = {}

  transactions.forEach((transaction) => {
    const { clientId, amount, date } = transaction
    const month = new Date(date).getMonth()

    const points = calculatePoints(amount)

    monthlyRewards[clientId] = monthlyRewards[clientId] || {}
    monthlyRewards[clientId][month] = (monthlyRewards[clientId][month] || 0) + points

    totalRewards[clientId] = (totalRewards[clientId] || 0) + points
  })

  return { monthlyRewards, totalRewards }
}
