import { styled, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const StyledTable = styled(Table)({
  backgroundColor: '#f0f0f0',
  border: '1px solid #000',
  borderRadius: '4px',
  width: '100%'
})

const StyledTableHead = styled(TableHead)({
  backgroundColor: '#333'
})

const StyledTableCell = styled(TableCell)({
  color: '#fff',
  fontWeight: 'bold'
})

const StyledTableRow = styled(TableRow)(({ index }) => ({
  backgroundColor: index % 2 === 0 ? '#fff' : '#f5f5f5'
}))

export default function UserTable({ users }) {
  return (
    <StyledTable>
      <StyledTableHead>
        <TableRow>
          <StyledTableCell>No</StyledTableCell>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell>Username</StyledTableCell>
          <StyledTableCell>E-mail</StyledTableCell>
          <StyledTableCell>Address</StyledTableCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {users.map((user, idx) => (
          <StyledTableRow key={user.id} index={idx}>
            <TableCell>{idx + 1}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.address.street}</TableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </StyledTable>
  )
}
