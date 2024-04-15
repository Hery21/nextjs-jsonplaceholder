'use client'
import AlbumContent from '@/components/contents/AlbumContent'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PhotosPage() {
  const [albums, setAlbums] = useState([])
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
        setAlbums(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    const fetchPhotos = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
        setPhotos(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchAlbums()
    fetchPhotos()
  }, [])
  return <AlbumContent albums={albums} photos={photos} />
}
