import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import DeleteDialog from '../DeleteDialog'

describe('All DeleteDialog Component tests', () => {
  const handleDeleteDialog = jest.fn()
  const handleDeletePost = jest.fn()

  test('Should render title', () => {
    render(<DeleteDialog openDeleteDialog={true} handleDeleteDialog={handleDeleteDialog} handleDeletePost={handleDeletePost} />)

    expect(screen.getByText('Delete this post?')).toBeInTheDocument()
  })

  test('Should render Yes and No buttons', () => {
    render(<DeleteDialog openDeleteDialog={true} handleDeleteDialog={handleDeleteDialog} handleDeletePost={handleDeletePost} />)

    expect(screen.getByRole('button', { name: /yes/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /no/i })).toBeInTheDocument()
  })

  test('Should call handleDeletePost when Yes button is clicked', () => {
    render(<DeleteDialog openDeleteDialog={true} handleDeleteDialog={handleDeleteDialog} handleDeletePost={handleDeletePost} />)

    const yesButton = screen.getByRole('button', { name: /yes/i })
    fireEvent.click(yesButton)

    expect(handleDeletePost).toHaveBeenCalledTimes(1)
  })

  test('Should call handleDeleteDialog when No button is clicked', () => {
    render(<DeleteDialog openDeleteDialog={true} handleDeleteDialog={handleDeleteDialog} handleDeletePost={handleDeletePost} />)

    const noButton = screen.getByRole('button', { name: /no/i })
    fireEvent.click(noButton)

    expect(handleDeleteDialog).toHaveBeenCalledTimes(1)
  })
})
