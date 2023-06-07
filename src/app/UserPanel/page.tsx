"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const UserPostPage = () => {
  const { data: session, status } = useSession()
  console.log(session?.user)
  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }
}

export default UserPostPage


// {
// 	"name": "czpisy",
// 	"amount": "4.50",
// 	"category": "snacks"
// }


// HEADERS
// auth = access token
// Content-Type - application/json