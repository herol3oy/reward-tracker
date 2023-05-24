import { render, screen } from '@testing-library/react'
import App from './App'

test('renders loading message', () => {
  render(<App />)
  const loadingMessage = screen.getByText(/Getting reward points data.../i)
  expect(loadingMessage).toBeInTheDocument()
})
