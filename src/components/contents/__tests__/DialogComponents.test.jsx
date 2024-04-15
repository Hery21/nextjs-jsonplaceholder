import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import DialogComponent from '../DialogComponents'

describe('All DialogComponent tests', () => {
  test('Should render dialog title', () => {
    render(<DialogComponent title="Test Title" open={true} />)

    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  test('Dialog should be draggable', () => {
    render(<DialogComponent title="Test Title" open={true} />)
    const dialogTitle = screen.getByRole('heading', { name: 'Test Title' })

    fireEvent.mouseDown(dialogTitle, { clientX: 100, clientY: 100 })
    fireEvent.mouseMove(document, { clientX: 150, clientY: 150 })
    fireEvent.mouseUp(document)

    expect(screen.getByRole('dialog')).toHaveStyle('left: 50px')
    expect(screen.getByRole('dialog')).toHaveStyle('top: 50px')
  })

  test('Dialog should opens and closes correctly', () => {
    const handleClose = jest.fn()
    render(<DialogComponent title="Test Title" open={true} />)

    expect(screen.getByRole('dialog')).toBeInTheDocument()

    render(<DialogComponent title="Test Title" open={false} />)

    expect(screen.queryByRole('dialog')).toBeNull()
  })
})
