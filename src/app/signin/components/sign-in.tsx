'use client'

import { useEffect, useState } from 'react'

import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { Toast } from './toast'

export function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isSuccess, setIsSuccess] = useState<boolean>()
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false)

  const handleSignIn = () => {
    if (username === 'username' && password === 'password') {
      setIsSuccess(true)
      setIsToastVisible(true)
    } else {
      setIsSuccess(false)
      setIsToastVisible(false)
    }
  }

  useEffect(() => {
    isToastVisible && setTimeout(() => setIsToastVisible(false), 4000)
  }, [isToastVisible])

  return (
    <div className="flex w-80 flex-col gap-4 rounded-lg border p-6 shadow-md">
      <Input
        type="string"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <span className="text-xs font-medium text-red-500">
        {isSuccess !== undefined && !isSuccess && 'ID 혹은 PW가 잘못되었습니다'}
      </span>
      <Button
        className="bg-black text-white hover:bg-black/80"
        onClick={handleSignIn}
      >
        Sign in
      </Button>
      <Toast
        content="로그인이 되었습니다."
        isVisible={isToastVisible}
        className="bg-green-500"
      />
    </div>
  )
}
