// pages/index.js

import Comment from '@/components/Comment';
import Head from 'next/head';
import Link from 'next/link';
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'



export default function Post() {
  return (
    <div className="bg-gray-100 max-w-screen-sm m-auto">
      <Head>
        <title>Modern Blog Design</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.17/dist/tailwind.min.css" />
      </Head>
        <section>
        <div class="container px-5 py-12 mx-auto ">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 flex flex-col">
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 text-center">Roof party normcore before they sold out, SBSRB srb m lknlkm asrlk laksnrl als nbjka bkljadkbm  cornhole vape</h2>
        <div className="flex items-center justify-center mt-4 gap-x-5 pt-4 pb-5">
              <Link href="/" className="px-6 py-2 rounded-md text-primary font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              <BsFillPencilFill style={{fontSize: "34px"}} />
              </Link>
              <Link href="#" className="px-6 py-2 rounded-md text-primary font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              <AiFillDelete style={{fontSize: "34px"}} />
              </Link>
          </div>
        <h2 className='text-center text-gray-400 mb-2'>Post By</h2>
        <span class="text-center inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
        <p class="leading-relaxed mb-8">
        Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic
        Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic
            Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
           <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 cursor-pointer">
           {/* {isLiked ? <AiFillLike size={20} onClick={handleLike} /> : <AiOutlineLike size={20} onClick={handleLike} />} */}
           
           <AiOutlineLike size={20} />1.2k
      
          </span>
         </div>
        </div>
    </div>
    <h2 className='text-center'>Comment Section</h2>

    <form>
        <div>
            <input className='w-full focus:outline-none p-8 mt-4' placeholder='Leave your comment here...'/>
        </div>
        <div>
            <button
            className='px-6 py-2.5 rounded-md bg-primary mt-3 text-white hover:bg-blue-500 hover:text-white transition-all duration-300'
            >Comment</button>
        </div>
    </form>
    <Comment />
    <Comment />
    <Comment />

  </div>
        </section>
    </div>
  );
}
