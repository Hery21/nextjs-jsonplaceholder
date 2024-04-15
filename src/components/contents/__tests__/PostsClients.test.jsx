import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import PostsClients from '../PostsClients'

describe('All PostsClients tests', () => {
  const mockHandleClickEditPost = jest.fn()
  const mockHandleClickDeletePost = jest.fn()
  const mockHandleGetComments = jest.fn()

  const sampleUsers = [
    { id: 1, name: 'User 1', username: 'user1' },
    { id: 2, name: 'User 2', username: 'user2' }
  ]

  const samplePosts = [
    { id: 1, userId: 1, title: 'Post 1', body: 'Body 1' },
    { id: 2, userId: 2, title: 'Post 2', body: 'Body 2' }
  ]

  test('Should render combined data correctly', () => {
    render(
      <PostsClients
        users={sampleUsers}
        posts={samplePosts}
        handleClickEditPost={mockHandleClickEditPost}
        handleClickDeletePost={mockHandleClickDeletePost}
        handleGetComments={mockHandleGetComments}
      />
    )

    expect(screen.getByText(samplePosts[0].title)).toBeInTheDocument()
    expect(screen.getByText(samplePosts[0].body)).toBeInTheDocument()
    expect(screen.getByText(sampleUsers[0].name)).toBeInTheDocument()
    expect(screen.getByText(sampleUsers[0].username)).toBeInTheDocument()

    expect(screen.getByText(samplePosts[1].title)).toBeInTheDocument()
    expect(screen.getByText(samplePosts[1].body)).toBeInTheDocument()
    expect(screen.getByText(sampleUsers[1].name)).toBeInTheDocument()
    expect(screen.getByText(sampleUsers[1].username)).toBeInTheDocument()
  })

  test('Should call handleClickEditPost with correct id when edit button is clicked', () => {
    render(
      <PostsClients
        users={sampleUsers}
        posts={samplePosts}
        handleClickEditPost={mockHandleClickEditPost}
        handleClickDeletePost={mockHandleClickDeletePost}
        handleGetComments={mockHandleGetComments}
      />
    )

    const editButton = screen.getAllByRole('button', { name: 'Edit' })[0]
    fireEvent.click(editButton)

    expect(mockHandleClickEditPost).toHaveBeenCalledWith(samplePosts[0].id)
  })

  test('Should call handleClickDeletePost with correct id when delete button is clicked', () => {
    render(
      <PostsClients
        users={sampleUsers}
        posts={samplePosts}
        handleClickEditPost={mockHandleClickEditPost}
        handleClickDeletePost={mockHandleClickDeletePost}
        handleGetComments={mockHandleGetComments}
      />
    )

    const deleteButton = screen.getAllByRole('button', { name: 'Delete' })[0]
    fireEvent.click(deleteButton)

    expect(mockHandleClickDeletePost).toHaveBeenCalledWith(samplePosts[0].id)
  })

  test('Should call handleGetComments with correct id when comment button is clicked', () => {
    render(
      <PostsClients
        users={sampleUsers}
        posts={samplePosts}
        handleClickEditPost={mockHandleClickEditPost}
        handleClickDeletePost={mockHandleClickDeletePost}
        handleGetComments={mockHandleGetComments}
      />
    )

    const commentButton = screen.getAllByRole('button', { name: 'Comment' })[0]
    fireEvent.click(commentButton)

    expect(mockHandleGetComments).toHaveBeenCalledWith(samplePosts[0].id)
  })
})
