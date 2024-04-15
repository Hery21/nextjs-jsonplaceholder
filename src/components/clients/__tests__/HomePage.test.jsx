import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import axios from 'axios'
import HomePage from '../HomePage'

jest.mock('axios')

describe('All HomePage tests', () => {
  const samplePosts = [
    { id: 1, userId: 1, title: 'Post 1', body: 'Body 1' },
    { id: 2, userId: 2, title: 'Post 2', body: 'Body 2' }
  ]

  const sampleUsers = [
    { id: 1, name: 'User 1', username: 'user1' },
    { id: 2, name: 'User 2', username: 'user2' }
  ]

  beforeEach(() => {
    axios.get.mockReset()
    axios.post.mockReset()
    axios.put.mockReset()
    axios.delete.mockReset()
  })

  test('Should render posts and other components correctly', async () => {
    axios.get.mockResolvedValueOnce({ data: samplePosts })
    axios.get.mockResolvedValueOnce({ data: sampleUsers })

    render(<HomePage />)

    // Wait for posts and users to load
    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeInTheDocument()
      expect(screen.getByText('Body 1')).toBeInTheDocument()
      expect(screen.getByText('User 1')).toBeInTheDocument()
      expect(screen.getByText('@user1')).toBeInTheDocument()

      expect(screen.getByText('Post 2')).toBeInTheDocument()
      expect(screen.getByText('Body 2')).toBeInTheDocument()
      expect(screen.getByText('User 2')).toBeInTheDocument()
      expect(screen.getByText('@user2')).toBeInTheDocument()
    })
  })

  test('Should handle posting new post', async () => {
    const newPost = { userId: 1, title: 'New Post', body: 'New Body' }
    axios.post.mockResolvedValueOnce({ data: newPost })

    render(<HomePage />)

    // Open new post dialog
    fireEvent.click(screen.getByText('New Post'))

    // Fill in the form
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New Post' } })
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'New Body' } })

    // Submit the form
    fireEvent.click(screen.getByText('Post'))

    // Wait for the new post to be rendered
    await waitFor(() => {
      expect(screen.getByText('New Post')).toBeInTheDocument()
      expect(screen.getByText('New Body')).toBeInTheDocument()
      expect(screen.getByText('User 1')).toBeInTheDocument()
      expect(screen.getByText('@user1')).toBeInTheDocument()
    })

    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(axios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', newPost)
  })

  test('Should handle editing existing post', async () => {
    const updatedPost = { id: 1, userId: 1, title: 'Updated Post', body: 'Updated Body' }
    axios.get.mockResolvedValueOnce({ data: samplePosts })
    axios.get.mockResolvedValueOnce({ data: sampleUsers })
    axios.get.mockResolvedValueOnce({ data: samplePosts[0] }) // Return post for editing
    axios.put.mockResolvedValueOnce({ data: updatedPost })

    render(<HomePage />)

    // Click on the edit button of the first post
    fireEvent.click(screen.getAllByLabelText('Edit')[0])

    // Wait for the edit post dialog to open
    await waitFor(() => {
      expect(screen.getByLabelText('Title')).toHaveValue('Post 1')
      expect(screen.getByLabelText('Subject')).toHaveValue('Body 1')
    })

    // Update the post
    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Updated Post' } })
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Updated Body' } })

    // Submit the edit
    fireEvent.click(screen.getByText('Post'))

    // Wait for the post to be updated
    await waitFor(() => {
      expect(screen.getByText('Updated Post')).toBeInTheDocument()
      expect(screen.getByText('Updated Body')).toBeInTheDocument()
    })

    expect(axios.put).toHaveBeenCalledTimes(1)
    expect(axios.put).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1', updatedPost)
  })

  test('Should handle deleting existing post', async () => {
    axios.get.mockResolvedValueOnce({ data: samplePosts })
    axios.get.mockResolvedValueOnce({ data: sampleUsers })
    axios.delete.mockResolvedValueOnce() // Assume successful deletion

    render(<HomePage />)

    // Click on the delete button of the first post
    fireEvent.click(screen.getAllByLabelText('Delete')[0])

    // Confirm deletion
    fireEvent.click(screen.getByText('Yes'))

    // Wait for the post to be deleted
    await waitFor(() => {
      expect(screen.queryByText('Post 1')).not.toBeInTheDocument()
    })

    expect(axios.delete).toHaveBeenCalledTimes(1)
    expect(axios.delete).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1')
  })
})
