import { Box, Card, CardContent, Typography } from '@mui/material'

export default function TodosCard({ title, completed }) {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2, position: 'relative', height: '200px' }}>
      <CardContent>
        <Typography variant="h6" fontSize={15}>
          {title}
        </Typography>
        <Box
          sx={{
            backgroundColor: completed ? 'green' : 'red',
            height: 'auto',
            position: 'absolute',
            bottom: 1,
            right: 1,
            width: 'auto',
            p: 1,
            borderRadius: 8,
            m: 1
          }}
        >
          <Typography color={'black'}>{completed ? 'Completed' : 'Incomplete'}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
