import { Box, Card, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/system'

const StatusBadge = styled('div')(({ theme, completed }) => ({
  backgroundColor: completed ? 'green' : 'red',
  color: 'white',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  position: 'absolute',
  bottom: theme.spacing(1),
  right: theme.spacing(1)
}))

export default function TodosCard({ title, completed }) {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2, position: 'relative', minHeight: '200px', backgroundColor: '#d5b59c' }}>
      <CardContent>
        <Typography variant="h6" fontSize={15}>
          {title}
        </Typography>
        {/* Status badge */}
        <StatusBadge completed={completed}>{completed ? 'Completed' : 'Incomplete'}</StatusBadge>
      </CardContent>
    </Card>
  )
}
