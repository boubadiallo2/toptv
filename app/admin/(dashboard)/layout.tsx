import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import AdminHeader from '@/components/AdminHeader'

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')

  if (!session) {
    redirect('/admin/login')
  }

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <AdminHeader />
      <main style={{ padding: '2rem' }}>
        {children}
      </main>
    </div>
  )
}
