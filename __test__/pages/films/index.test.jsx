import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Films from '@/pages/films'

const queryClient = new QueryClient()

describe('Films page', () => {
  it('Should render properly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Films />
      </QueryClientProvider>
    )

    const search = screen.getByTestId('search-text')

    const searchText = 'Search for Films'

    expect(search).toHaveTextContent(searchText)
  })

  it('Pagination buttons should have left and right icon', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Films />
      </QueryClientProvider>
    )
    
    setTimeout(() => {
      const previousButton = screen.getByTestId('previous-button')
      const arrowLeft = screen.getByTestId('arrow-left')

      const nextButton = screen.getByTestId('next-button')
      const arrowRight = screen.getByTestId('arrow-right')

      expect(previousButton).toContainElement(arrowLeft)
      expect(nextButton).toContainElement(arrowRight)
    }, 2000)
  })
})