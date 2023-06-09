import React from 'react'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'
import Link from 'next/link'

const Post = () => {
  return (
    <section>
        <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 flex flex-col items-start">
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">SPORTS</span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Unleashing the Fury: The Epic Comeback of the Underdog</h2>
        <p class="leading-relaxed mb-8">
        As sports enthusiasts, we are always drawn to the underdogs—those teams or individuals who defy the odds and leave us in awe. In the world of sports, where David occasionally triumphs over Goliath, one such tale stands out among the rest. Brace yourselves for the astounding account of an underdog's spectacular journey—how they defied expectations, battled adversity, and emerged victorious against all odds. Get ready to witness the astonishing comeback of the underdog that left fans worldwide in sheer disbelief.


        </p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <Link href={'/post'} class="text-indigo-500 inline-flex items-center">See More
           </Link>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        {/* {isLiked ? <AiFillLike size={20} onClick={handleLike} /> : <AiOutlineLike size={20} onClick={handleLike} />} */}
           
        <AiOutlineLike size={20} />1.2k
          </span>
         </div>
        <a class="inline-flex items-center">
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</section>
    </section>
  )
}

export default Post