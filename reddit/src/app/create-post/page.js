import React from 'react'

const Createpost = () => {
  return (
    <section className="bg-gray-100 max-w-screen-sm m-auto p-8">
        
        <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Create A Post</h1>
      <div class="flex mt-2 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>

        <form>
        <div>
            <input className='w-full focus:outline-none p-2' placeholder='Title Your Work'/>
        </div>
        <div>
            <input className='w-full focus:outline-none pt-8 pb-8 pl-2 mt-4' placeholder='Share Your Thoughts...'/>
        </div>
        <div>
            <select  className='w-full focus:outline-none p-2 mt-4'>
            <option >Categories</option>
                <option value='sports'>Sports</option>
                <option value='money'>Money</option>
                <option value='news'>News</option>
                <option value='tech'>Tech</option>
                <option value='programming'>Programming</option>
            </select>
        </div>
        <div>
            <button
            className='px-6 py-2.5 rounded-md bg-primary mt-3 text-white hover:bg-blue-500 hover:text-white transition-all duration-300'
            >Post</button>
        </div>
        </form>
    </section>
  )
}

export default Createpost