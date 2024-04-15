import { Box, Button, Divider, Typography } from '@mui/material'
import DialogComponent from './DialogComponents'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'

export default function CommentsDialog({ users, openCommentsDialog, commentPost, comments, handleCommentsDialog }) {
  const userPost = users.find((user) => user.id === commentPost.userId)

  return (
    <DialogComponent title={' '} open={openCommentsDialog} maxWidth={'auto'}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AccountCircleIcon sx={{ mr: 2, width: '70px', height: '70px' }} />
        </Box>
        <Box>
          <Box>
            <Typography fontWeight="bold" variant="h5">
              {userPost?.name}
            </Typography>
            <Typography variant="h6" fontSize="15px">
              @{userPost?.username}
            </Typography>
          </Box>
          <Typography variant="h6">{commentPost.title}</Typography>
        </Box>
      </Box>
      <Typography>{commentPost.body}</Typography>
      <Divider sx={{ mt: 2 }} />
      <Typography fontWeight="bold">Comments</Typography>
      {comments.map((comment) => (
        <Box key={comment.id} sx={{ mb: 2 }}>
          <Divider />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <AccountCircleIcon sx={{ width: '30px', height: '30px', mr: 1 }} />
            <Typography fontWeight="bold">{comment?.name}</Typography>
          </Box>
          <Typography>{comment?.body}</Typography>
        </Box>
      ))}
      <Button
        onClick={handleCommentsDialog}
        sx={{
          minWidth: '5px',
          maxWidth: '20px',
          maxHeight: '20px',
          borderRadius: '250%',
          position: 'absolute',
          top: '10px',
          right: '10px'
        }}
      >
        <ClearOutlinedIcon sx={{ height: '20px', width: '20px', color: 'black', '&:hover': { color: 'grey' } }} />
      </Button>
    </DialogComponent>
  )
}
