'use client'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) setUser(u)
      else router.push('/login')
    })
    return () => unsub()
  }, [])

  return (
    <div style={{ padding: 40 }}>
      <h1>مرحبًا {user?.email}</h1>
      <button onClick={() => { signOut(auth); router.push('/login') }}>تسجيل الخروج</button>
    </div>
  )
}