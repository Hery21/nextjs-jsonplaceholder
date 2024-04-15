import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import CommentsDialog from '../CommentsDialog'

const users = [
  { id: 1, name: 'John Doe', username: 'johndoe' },
  { id: 2, name: 'Jane Smith', username: 'janesmith' }
]

const commentPost = { userId: 1, title: 'Test Title', body: 'Test Body' }

const comments = [
  { id: 1, name: 'Commenter 1', body: 'Comment 1' },
  { id: 2, name: 'Commenter 2', body: 'Comment 2' }
]

describe('All CommentsDialog Component tests', () => {
  test('Should render user name and username', () => {
    render(<CommentsDialog users={users} commentPost={commentPost} comments={comments} openCommentsDialog={true} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('@johndoe')).toBeInTheDocument()
  })

  test('Should render post title and body', () => {
    render(<CommentsDialog users={users} commentPost={commentPost} comments={comments} openCommentsDialog={true} />)

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Body')).toBeInTheDocument()
  })

  test('Should render comments', () => {
    render(<CommentsDialog users={users} commentPost={commentPost} comments={comments} openCommentsDialog={true} />)

    expect(screen.getByText('Commenter 1')).toBeInTheDocument()
    expect(screen.getByText('Comment 1')).toBeInTheDocument()
    expect(screen.getByText('Commenter 2')).toBeInTheDocument()
    expect(screen.getByText('Comment 2')).toBeInTheDocument()
  })

  test('SHould call handleCommentsDialog when close button is clicked', () => {
    const handleCommentsDialog = jest.fn()
    render(
      <CommentsDialog
        users={users}
        commentPost={commentPost}
        comments={comments}
        openCommentsDialog={true}
        handleCommentsDialog={handleCommentsDialog}
      />
    )

    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)

    expect(handleCommentsDialog).toHaveBeenCalledTimes(1)
  })
})
