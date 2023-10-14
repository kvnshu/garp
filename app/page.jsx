import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Dashboard from '../components/Dashboard'
import LandingPage from '../components/LandingPage'
import Layout from '../components/Layout'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const toRead = await supabase.from("paper").select();
  const feed = [];

  const content = user ? <Dashboard toRead={toRead} feed={feed}/> : <LandingPage />

  return (
    <div>
      <Layout user={user}>
        {content}
      </Layout>
    </div>
  )
}
