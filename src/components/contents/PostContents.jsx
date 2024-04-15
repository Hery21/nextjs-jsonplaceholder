import { Box, Paper, Typography, ButtonBase } from '@mui/material'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

export default function PostsContents({ id, title, body, handleClickEditPost, handleClickDeletePost }) {
  return (
    <Paper elevation={10} sx={{ m: 1, width: '750px', borderRadius: 3 }}>
      <Box sx={{ p: 2 }}>
        <Typography fontWeight="bolder" variant="h6">
          {title}
        </Typography>
        <Typography>{body}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Box sx={{ mt: 1 }}>
            <ButtonBase onClick={() => handleClickEditPost(id)} sx={{ mx: 1 }}>
              <EditIcon />
            </ButtonBase>
            <ButtonBase onClick={() => handleClickDeletePost(id)} sx={{ mx: 1 }}>
              <DeleteIcon />
            </ButtonBase>
          </Box>
          <ButtonBase>
            <ModeCommentIcon />
          </ButtonBase>
        </Box>
      </Box>
    </Paper>
  )
}
