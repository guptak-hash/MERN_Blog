import { useEffect } from 'react';
import Posts from '../components/Posts'
import { useState } from 'react'

const HomePage = () => {
 const [posts,setPosts]=useState([]);
 useEffect(()=>{
  fetch('https://mern-blog-backend-tixg.onrender.com/api/post',{
    credentials:'include'
  }).then(response=>{
    response.json().then(posts=>{
      setPosts(posts)
    })
  })
 },[])
 console.log('posts >> ',posts)
  return (
    <>
    {posts.length>0 && posts.map(post=>(
      <Posts {...post}/>
    ))}
    </>
  )
}

export default HomePage