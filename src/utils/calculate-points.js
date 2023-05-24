export const calculatePoints = (amount) => {
  let rewardPoints = 0
  if (amount >= 100) {
    rewardPoints = 2 * (amount - 100) + 50
  }
  if (amount > 50 && amount <= 100) {
    rewardPoints += amount - 50
  }
  return rewardPoints
}
