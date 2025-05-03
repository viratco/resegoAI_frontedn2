import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export function Layout() {
  return (
    <>
      <Helmet>
        <meta name="google-site-verification" content="wC1CD66tpBTIXJ5t5IjIXycNO9xcopzmkklRePgQq4k" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 pt-16">
          <Outlet />
        </main>
      </div>
    </>
  )
} 