import { ButtonBase, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function NavMenu() {
  return (
    <Stack direction="row" spacing={8}>
      <ButtonBase>
        <Link href="/">
          <Typography color="black" fontWeight="bold">
            Home
          </Typography>
        </Link>
      </ButtonBase>
      <ButtonBase>
        <Link href="/photos">
          <Typography color="black" fontWeight="bold">
            Photos
          </Typography>
        </Link>
      </ButtonBase>
      <ButtonBase>
        <Link href="/todos">
          <Typography color="black" fontWeight="bold">
            Todos
          </Typography>
        </Link>
      </ButtonBase>
      <ButtonBase>
        <Link href="/users">
          <Typography color="black" fontWeight="bold">
            Users
          </Typography>
        </Link>
      </ButtonBase>
    </Stack>
  )
}
