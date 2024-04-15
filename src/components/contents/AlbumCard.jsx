import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function AlbumCard({ albumTitle, thumbnail }) {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia component="img" src={thumbnail} />
      <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
        <Typography sx={{ color: 'white', padding: '8px' }}>{albumTitle || 'Album'}</Typography>
      </CardContent>
    </Card>
  )
}
