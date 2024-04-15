'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TodosContent from '../contents/TodosContent'

export default function TodosPage() {
  const [todos, setTodos] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const sorted = res.data.sort((a, b) => b.id - a.id)
        setTodos(sorted)
      } catch (err) {
        console.error(err)
      }
    }

    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchTodos()
    fetchUsers()
  }, [])
  return <TodosContent todos={todos} users={users} />
}
