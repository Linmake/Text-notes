import React from 'react'
import { Outlet } from 'react-router-dom'

export default function UsersLayout() {
  return (
    <div>Authentication Users
    <Outlet/>
    </div>
  )
}
