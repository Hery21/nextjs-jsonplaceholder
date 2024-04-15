import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import PostsContents from '../PostContents'

describe('All PostsContents tests', () => {
  const mockHandleClickEditPost = jest.fn()
  const mockHandleClickDeletePost = jest.fn()
  const mockHandleGetComments = jest.fn()

  const samplePost = {
    id: 1,
    title: 'Test Title',
    body: 'Test Body',
    username: 'test_username',
    name: 'Test User'
  }

  test('Should render post with correct content', () => {
    render(
      <PostsContents
        id={samplePost.id}
        title={samplePost.title}
        body={samplePost.body}
        username={samplePost.username}
        name={samplePost.name}
        handleClickEditPost={mockHandleClickEditPost}
        handleClickDeletePost={mockHandleClickDeletePost}
        handleGetComments={mockHandleGetComments}
      />
    )

    expect(screen.getByText(samplePost.title)).toBeInTheDocument()
    expect(screen.getByText(samplePost.body)).toBeInTheDocument()
    expect(screen.getByText(`@${samplePost.username}`)).toBeInTheDocument()
    expect(screen.getByText(samplePost.name)).toBeInTheDocument()
  })

  test('Should call handleClickEditPost with correct id when edit button is clicked', () => {
    render(
      <PostsContents
        id={samplePost.id}
        title={samplePost.title}
        body={samplePost.body}
        username={samplePost.username}
        name={samplePost.name}
        handleClickEditPost={mockHandleClickEditPost}
        handleClickDeletePost={mockHandleClickDeletePost}
        handleGetComments={mockHandleGetComments}
      />
    )

    const editButton = screen.getByRole('button', { name: 'Edit' })
    fireEvent.click(editButton)

    expect(mockHandleClickEditPost).toHaveBeenCalledWith(samplePost.id)
  })

  test('Should call handleClickDeletePost with correct id when delete button is clicked', () => {
    render(
      <PostsContents
        id={samplePost.id}
        title={samplePost.title}
        body={samplePost.body}
        username={samplePost.username}
        name={samplePost.name}
        handleClickEditPost={mockHandleClickEditPost}
        handleClickDeletePost={mockHandleClickDeletePost}
        handleGetComments={mockHandleGetComments}
      />
    )

    const deleteButton = screen.getByRole('button', { name: 'Delete' })
    fireEvent.click(deleteButton)

    expect(mockHandleClickDeletePost).toHaveBeenCalledWith(samplePost.id)
  })

  test('Should call handleGetComments with correct id when comments button is clicked', () => {
    render(
      <PostsContents
        id={samplePost.id}
        title={samplePost.title}
        body={samplePost.body}
        username={samplePost.username}
        name={samplePost.name}
        handleClickEditPost={mockHandleClickEditPost}
        handleClickDeletePost={mockHandleClickDeletePost}
        handleGetComments={mockHandleGetComments}
      />
    )

    const commentsButton = screen.getByRole('button', { name: 'Comments' })
    fireEvent.click(commentsButton)

    expect(mockHandleGetComments).toHaveBeenCalledWith(samplePost.id)
  })
})
