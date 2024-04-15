import React from 'react'
import AlbumCard from './AlbumCard'
import { Box } from '@mui/material'

export default function AlbumContent({ albums, photos }) {
  const combinedData = albums.map((album) => {
    const photo = photos.find((photo) => photo.albumId === album.id)
    return {
      ...album,
      photo: photo || {}
    }
  })

  console.log(combinedData)
  return (
    <>
      <Box sx={{ display: 'grid', gridTemplate: 'repeat(3, 200px) / repeat(3, 200px)', gap: '20px' }}>
        {combinedData.map((data) => (
          <AlbumCard key={data.id} albumTitle={data.title} thumbnail={data.photo.thumbnailUrl} />
        ))}
      </Box>
    </>
  )
}
