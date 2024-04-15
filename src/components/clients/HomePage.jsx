'use client'

import { Box } from '@mui/material'
import PostsClients from '../contents/PostsClients'
import NewPostComponent from './NewPostComponent'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DeleteDialog from '../contents/DeleteDialog'

export default function HomePage() {
  const [posts, setPosts] = useState([])

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

    fetchPosts()
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

  return (
    <>
      <Box display="flex" flexDirection="column">
        <PostsClients posts={posts} handleClickEditPost={handleClickEditPost} handleClickDeletePost={handleClickDeletePost} />
      </Box>
      <NewPostComponent
        handleOpenPostDialog={handleOpenPostDialog}
        openPostDialog={openPostDialog}
        handleSetNewPost={handleSetNewPost}
        newPost={newPost}
        handlePost={isEdit ? handlePatchEditPost : handlePost}
      />
      <DeleteDialog openDeleteDialog={openDeleteDialog} handleDeleteDialog={handleDeleteDialog} handleDeletePost={handleDeletePost} />
    </>
  )
}
