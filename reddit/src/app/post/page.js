// pages/index.js

import Head from 'next/head';

const blogPosts = [
  {
    title: 'Sample Blog Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut hendrerit est.',
    author: 'John Doe',
    date: 'June 1, 2023',
  },
  {
    title: 'Sample Blog Post 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut hendrerit est.',
    author: 'Jane Smith',
    date: 'June 3, 2023',
  },
  // Add more blog posts here...
];

export default function Post() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Modern Blog Design</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.17/dist/tailwind.min.css" />
      </Head>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Blog</h1>
        {blogPosts.map((post, index) => (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6" key={index}>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-sm">{`By ${post.author}`}</p>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
