import Hero from '@/components/Hero'
import Post from '@/components/Post'

export default function Home() {
  return (
    <main className='max-w-screen-sm m-auto'>

      <Hero />
      <Post />
      <Post />
      <Post />
    </main>
  )
}
