import { render, screen } from '@testing-library/react'
import Layout from './Layout'

describe('Layout', () => {
  it('renders the children components', () => {
    const mockChildren = <main>mock children</main>
    render(<Layout>{mockChildren}</Layout>)
    const childrenElement = screen.getByText('mock children')
    expect(childrenElement).toBeInTheDocument()
  })
})
