import React from 'react'
import { UserDataTable } from './user-data-table'
import { userData } from './userData'
import { columns } from './columns'

const User = () => {
  return (
    <div className='container py-10 mx-auto'>
      <UserDataTable columns={columns} data={userData} />
    </div>
  )
}

export default User
