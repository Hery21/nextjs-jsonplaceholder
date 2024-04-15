'use client'

import { Box } from '@mui/material'
import PostsClients from '../contents/PostsClients'
import NewPostComponent from './NewPostComponent'
import axios from 'axios'
import { useEffect, useState } from 'react'

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

  return (
    <>
      <Box display="flex" flexDirection="column">
        <PostsClients posts={posts} />
      </Box>
      <NewPostComponent handleSetPosts={handleSetPosts} />
    </>
  )
}
