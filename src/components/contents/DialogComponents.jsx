import { Box, Dialog, DialogTitle } from '@mui/material'
import ScrollBar from 'react-perfect-scrollbar'
import { useCallback, useRef } from 'react'

function DialogComponent({ title, open, children, maxWidth }) {
  const dialogRef = useRef(null)
  const handleRef = useRef(null)

  const handleMouseDown = useCallback((event) => {
    const dialogNode = dialogRef.current
    if (!dialogNode) return

    const startX = event.clientX
    const startY = event.clientY
    const startLeft = dialogNode.offsetLeft
    const startTop = dialogNode.offsetTop

    const handleMouseMove = (moveEvent) => {
      dialogNode.style.left = `${startLeft + moveEvent.clientX - startX}px`
      dialogNode.style.top = `${startTop + moveEvent.clientY - startY}px`
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }, [])

  return (
    <Dialog
      open={open}
      PaperProps={{
        ref: dialogRef,
        style: {
          position: 'absolute',
          maxWidth,
          height: 'auto'
        }
      }}
    >
      <ScrollBar>
        <Box sx={{ px: '18px', py: '10px', minWidth: 300 }}>
          <Box ref={handleRef}>
            <DialogTitle
              sx={{ fontSize: '1rem', fontWeight: 'bold', px: 0, py: 0, width: '95%', cursor: 'grab', '&:active': { cursor: 'grabbing' } }}
              onMouseDown={handleMouseDown}
            >
              {title || 'Empty Title'}
            </DialogTitle>
          </Box>
          {children}
        </Box>
      </ScrollBar>
    </Dialog>
  )
}

export default DialogComponent
