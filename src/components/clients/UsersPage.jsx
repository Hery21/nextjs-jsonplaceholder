'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserTable from '../contents/UserTable'

export default function UsersPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchUsers()
  }, [])
  return <UserTable users={users} />
}
