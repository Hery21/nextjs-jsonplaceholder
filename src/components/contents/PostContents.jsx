import { Box, Paper, Typography, ButtonBase } from '@mui/material'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import React from 'react'

export default function PostsContents({ title, body }) {
  return (
    <Paper elevation={10} sx={{ m: 1, width: '750px', borderRadius: 3 }}>
      <Box sx={{ p: 2 }}>
        <Typography fontWeight="bolder" variant="h6">
          {title}
        </Typography>
        <Typography>{body}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <ButtonBase>
            <ModeCommentIcon />
          </ButtonBase>
        </Box>
      </Box>
    </Paper>
  )
}
