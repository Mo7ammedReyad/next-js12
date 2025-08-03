'use client'
import { useState } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push('/')
    } catch (err) {
      alert('فشل التسجيل: ' + err.message)
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>تسجيل حساب جديد</h1>
      <input placeholder="الإيميل" onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup}>تسجيل</button>
    </div>
  )
}