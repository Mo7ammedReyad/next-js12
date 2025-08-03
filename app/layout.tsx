export const metadata = { title: 'Firebase Auth App', description: 'Next.js + Firebase' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}