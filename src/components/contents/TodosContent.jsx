import React from 'react'
import TodosCard from './TodosCard'
import { Box } from '@mui/material'

export default function TodosContent({ todos, users }) {
  const combinedData = todos.map((todo) => {
    const user = users.find((user) => user.id === todo.userId)
    return {
      ...todo,
      user: user || {}
    }
  })
  return (
    <Box sx={{ display: 'grid', gridTemplate: 'repeat(3, 200px) / repeat(3, 200px)', gap: '20px' }}>
      {combinedData.map((data) => (
        <TodosCard key={data.id} title={data.title} completed={data.completed} />
      ))}
    </Box>
  )
}
