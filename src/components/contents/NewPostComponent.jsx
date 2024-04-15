import { Box, Button, ButtonBase, TextField } from '@mui/material'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import DialogComponent from './DialogComponents'

export default function NewPostComponent({ title, handleOpenPostDialog, openPostDialog, handleSetNewPost, newPost, handlePost }) {
  return (
    <>
      <ButtonBase
        onClick={handleOpenPostDialog}
        sx={{ position: 'fixed', bottom: '50px', right: '50px', backgroundColor: 'white', borderRadius: 250 }}
      >
        <HistoryEduIcon sx={{ width: '50px', height: '50px', color: 'black', p: 0.5 }} />
      </ButtonBase>
      <DialogComponent title={`${title} Post`} open={openPostDialog} maxWidth={'540px'}>
        <TextField
          label="Title"
          name="title"
          size="small"
          fullWidth
          onChange={handleSetNewPost}
          value={newPost.title}
          sx={{
            width: '500px',
            mt: 2,
            borderColor: 'black',
            '&:hover': {
              borderColor: 'black'
            }
          }}
        />
        <TextField
          label="Subject"
          name="body"
          size="large"
          fullWidth
          multiline
          rows={3}
          onChange={handleSetNewPost}
          value={newPost.body}
          sx={{
            width: '500px',
            mt: 2,
            borderColor: 'black',
            '&:hover': {
              borderColor: 'black'
            }
          }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button variant="contained" onClick={handlePost} sx={{ backgroundColor: 'black', mt: 1, '&:hover': { backgroundColor: 'grey' } }}>
            Post
          </Button>
        </Box>
        <Button
          onClick={handleOpenPostDialog}
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
    </>
  )
}
