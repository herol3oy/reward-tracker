import { render, screen } from '@testing-library/react'
import TopBar from './TopBar'

test('renders the app title', () => {
  render(<TopBar />)
  const titleElement = screen.getByText('Reward Tracker')
  expect(titleElement).toBeInTheDocument()
})
