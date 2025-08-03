'use client'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/')
    } catch (err) {
      alert('فشل تسجيل الدخول: ' + err.message)
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>تسجيل الدخول</h1>
      <input placeholder="الإيميل" onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>دخول</button>
    </div>
  )
}