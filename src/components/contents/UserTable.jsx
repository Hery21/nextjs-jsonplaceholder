import { styled, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: 'grey',
  '&:nth-of-type(odd)': {
    backgroundColor: 'white'
  }
}))

export default function UserTable({ users }) {
  return (
    <Table sx={{ backgroundColor: 'grey', mx: 2 }}>
      <TableHead sx={{ backgroundColor: 'black', border: '1px solid white' }}>
        <TableRow>
          <TableCell sx={{ color: 'white' }}>No</TableCell>
          <TableCell sx={{ color: 'white' }}>Name</TableCell>
          <TableCell sx={{ color: 'white' }}>Username</TableCell>
          <TableCell sx={{ color: 'white' }}>E-mail</TableCell>
          <TableCell sx={{ color: 'white' }}>Address</TableCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{ backgroundColor: 'grey' }}>
        {users.map((user, idx) => (
          <StyledTableRow key={user.id}>
            <TableCell sx={{ color: 'black' }}>{idx + 1}</TableCell>
            <TableCell sx={{ color: 'black' }}>{user.name}</TableCell>
            <TableCell sx={{ color: 'black' }}>{user.username}</TableCell>
            <TableCell sx={{ color: 'black' }}>{user.email}</TableCell>
            <TableCell sx={{ color: 'black' }}>{user.address.street}</TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  )
}
