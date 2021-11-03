import React from 'react'
import axios from 'axios'

const { useEffect, useState } = React

const BTCNews = () => {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    const res = await axios.get('/api/btc')
    setPosts(res.data.posts)
  }
  useEffect(() => {
    getPosts()
    return () => {
      setPosts([])
    }
  }, [])
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div
            key={index}
            className="bg-gray-200 text-gray-800 px-8 py-4 m-4 max-w-3xl mx-auto"
          >
            <h1 className="text-xl font-semibold mb-2">
              #{index + 1} - {post.title}
            </h1>
            <a
              href={post.url}
              target="_blank"
              className="bg-blue-400 text-white px-4 py-1 rounded"
            >
              Read More...
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default BTCNews
