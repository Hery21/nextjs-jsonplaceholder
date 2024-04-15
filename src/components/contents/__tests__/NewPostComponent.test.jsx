import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import NewPostComponent from '../NewPostComponent'

describe('All NewPostComponent tests', () => {
  const mockHandleOpenPostDialog = jest.fn()
  const mockHandleSetNewPost = jest.fn()
  const mockHandlePost = jest.fn()
  const initialNewPost = { title: '', body: '' }

  test('Should render component with title and input fields', () => {
    render(
      <NewPostComponent
        title="Test"
        handleOpenPostDialog={mockHandleOpenPostDialog}
        openPostDialog={true}
        handleSetNewPost={mockHandleSetNewPost}
        newPost={initialNewPost}
        handlePost={mockHandlePost}
      />
    )

    expect(screen.getByText('Test Post')).toBeInTheDocument()
    expect(screen.getByLabelText('Title')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
  })

  test('Should fill input fields and update state', () => {
    render(
      <NewPostComponent
        title="Test"
        handleOpenPostDialog={mockHandleOpenPostDialog}
        openPostDialog={true}
        handleSetNewPost={mockHandleSetNewPost}
        newPost={initialNewPost}
        handlePost={mockHandlePost}
      />
    )

    const titleInput = screen.getByLabelText('Title')
    const subjectInput = screen.getByLabelText('Subject')

    fireEvent.change(titleInput, { target: { value: 'Test Title' } })
    fireEvent.change(subjectInput, { target: { value: 'Test Body' } })

    expect(mockHandleSetNewPost).toHaveBeenCalledTimes(2)
  })

  test('Should trigger post action when button is clicked', () => {
    render(
      <NewPostComponent
        title="Test"
        handleOpenPostDialog={mockHandleOpenPostDialog}
        openPostDialog={true}
        handleSetNewPost={mockHandleSetNewPost}
        newPost={initialNewPost}
        handlePost={mockHandlePost}
      />
    )

    const postButton = screen.getByRole('button', { name: 'Post' })
    fireEvent.click(postButton)

    expect(mockHandlePost).toHaveBeenCalledTimes(1)
  })

  test('Should open and close dialog when close button is clicked', () => {
    render(
      <NewPostComponent
        title="Test"
        handleOpenPostDialog={mockHandleOpenPostDialog}
        openPostDialog={true}
        handleSetNewPost={mockHandleSetNewPost}
        newPost={initialNewPost}
        handlePost={mockHandlePost}
      />
    )

    const closeButton = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(closeButton)

    expect(mockHandleOpenPostDialog).toHaveBeenCalledTimes(1)
  })
})
