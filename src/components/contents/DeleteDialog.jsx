import { Box, Button } from '@mui/material'
import DialogComponent from './DialogComponents'

export default function DeleteDialog({ openDeleteDialog, handleDeleteDialog, handleDeletePost }) {
  return (
    <DialogComponent title={'Delete this post?'} open={openDeleteDialog} maxWidth={'300px'}>
      <Box sx={{ mt: 1 }}>
        <Button
          variant="contained"
          onClick={handleDeletePost}
          sx={{
            width: '120px',
            mr: 1,
            color: 'white',
            backgroundColor: 'black',
            '&:hover': {
              color: 'black',
              backgroundColor: 'grey'
            }
          }}
        >
          Yes
        </Button>
        <Button
          variant="outlined"
          onClick={handleDeleteDialog}
          sx={{
            width: '120px',
            color: 'black',
            backgroundColor: 'white',
            borderColor: 'black',
            '&:hover': {
              color: 'white',
              backgroundColor: 'grey',
              borderColor: 'transparent'
            }
          }}
        >
          No
        </Button>
      </Box>
    </DialogComponent>
  )
}
