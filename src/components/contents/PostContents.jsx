import { Box, Paper, Typography, ButtonBase } from '@mui/material'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function PostsContents({ id, title, body, username, name, handleClickEditPost, handleClickDeletePost, handleGetComments }) {
  return (
    <Paper elevation={10} sx={{ m: 1, width: '750px', borderRadius: 3 }}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AccountCircleIcon sx={{ mr: 2, width: '70px', height: '70px' }} />
          </Box>
          <Box>
            <Box>
              <Typography fontWeight="bold" variant="h5">
                {name}
              </Typography>
              <Typography variant="h6" fontSize="15px">
                @{username}
              </Typography>
            </Box>
            <Typography variant="h6">{title}</Typography>
          </Box>
        </Box>
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
          <ButtonBase onClick={() => handleGetComments(id)}>
            <ModeCommentIcon />
          </ButtonBase>
        </Box>
      </Box>
    </Paper>
  )
}
