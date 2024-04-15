'use client'

import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import axios from 'axios'
import PostsClients from '../contents/PostsClients'
import NewPostComponent from '../contents/NewPostComponent'
import DeleteDialog from '../contents/DeleteDialog'
import CommentsDialog from '../contents/CommentsDialog'

export default function HomePage() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  const handleSetPosts = (val) => {
    setPosts((prevItem) => [val, ...prevItem])
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const sorted = res.data.sort((a, b) => b.id - a.id)
        setPosts(sorted)
      } catch (err) {
        console.error(err)
      }
    }

    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchPosts()
    fetchUsers()
  }, [])

  const initialPostState = {
    userId: 1,
    title: '',
    body: ''
  }
  const [openPostDialog, setOpenPostDialog] = useState(false)
  const [newPost, setNewPost] = useState(initialPostState)

  const handleOpenPostDialog = () => {
    setOpenPostDialog(!openPostDialog)
  }

  const handleSetNewPost = (e) => {
    e.preventDefault()
    setNewPost((prevItem) => ({ ...prevItem, [e.target.name]: e.target.value }))
  }

  const handlePost = async () => {
    try {
      const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost)
      handleSetPosts(res.data)
    } catch (err) {
      console.error(err)
    }
    setNewPost(initialPostState)
    handleOpenPostDialog()
  }

  const [isEdit, setIsEdit] = useState(false)

  const handleIsEdit = () => {
    setIsEdit(!isEdit)
  }

  const handleClickEditPost = async (id) => {
    handleIsEdit()
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setNewPost(res.data)
    } catch (err) {
      console.error(err)
    }
    handleOpenPostDialog()
  }

  const handlePatchEditPost = async () => {
    try {
      const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${newPost.id}`, newPost)
      const newArray = posts.map((item) => {
        if (item.id === res.data.id) {
          return res.data
        }
        return item
      })
      setPosts(newArray)
    } catch (err) {
      console.error(err)
    }
    setNewPost(initialPostState)
    handleOpenPostDialog()
    handleIsEdit()
  }

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  const handleDeleteDialog = () => {
    setOpenDeleteDialog(!openDeleteDialog)
  }

  const handleClickDeletePost = (id) => {
    handleDeleteDialog()
    setDeleteId(id)
    console.log(id)
  }

  const handleDeletePost = async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${deleteId}`)
      const newArray = posts.filter((item) => item.id !== deleteId)
      setPosts(newArray)
    } catch (err) {
      console.error(err)
    }
    handleDeleteDialog()
    setDeleteId(null)
  }

  const [comments, setComments] = useState([])
  const [commentPost, setCommentPost] = useState({})
  const [openCommentsDialog, setOpenCommentsDialog] = useState(false)

  const handleCommentsDialog = () => {
    setOpenCommentsDialog(!openCommentsDialog)
    setComments([])
    setCommentPost({})
  }

  const handleGetComments = async (id) => {
    handleCommentsDialog()
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      setComments(res.data)
    } catch (err) {
      console.error(err)
    }
    setCommentPost(posts.find((p) => p.id === id))
  }

  return (
    <>
      <Box display="flex" flexDirection="column">
        <PostsClients
          users={users}
          posts={posts}
          handleClickEditPost={handleClickEditPost}
          handleClickDeletePost={handleClickDeletePost}
          handleGetComments={handleGetComments}
        />
      </Box>
      <NewPostComponent
        title={isEdit ? 'Edit' : 'New'}
        handleOpenPostDialog={handleOpenPostDialog}
        openPostDialog={openPostDialog}
        handleSetNewPost={handleSetNewPost}
        newPost={newPost}
        handlePost={isEdit ? handlePatchEditPost : handlePost}
      />
      <DeleteDialog openDeleteDialog={openDeleteDialog} handleDeleteDialog={handleDeleteDialog} handleDeletePost={handleDeletePost} />
      <CommentsDialog
        users={users}
        openCommentsDialog={openCommentsDialog}
        commentPost={commentPost}
        comments={comments}
        handleCommentsDialog={handleCommentsDialog}
      />
    </>
  )
}
