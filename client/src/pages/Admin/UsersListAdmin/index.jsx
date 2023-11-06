import { useState, useEffect } from 'react'

import { getUsersAPI } from '../../../services/api/userAPI'
import { UsersTable } from './components/UsersTable'
import { CrudAdmin } from '../../../components/CrudAdmin'

export const UsersListAdmin = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const loadUsers = async () => {
    const usersList = await getUsersAPI()
    if (usersList.data) {
      setUsers(usersList.data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [users.length])

  return (
    <CrudAdmin
      title='Usuarios Registrados'
      createButtonName='Nuevo usuario'
      createButtonPath='/admin/users/new'
      isLoading={isLoading}
      tableComponent={<UsersTable usersList={users} />}
    />
  )
}
