import Hero from '@/components/Hero'
import Post from '@/components/Post'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='max-w-screen-sm m-auto'>
      <h2>Blog Site</h2>
      
      <Post />
      <Post />
      <Post />
    </main>
  )
}
