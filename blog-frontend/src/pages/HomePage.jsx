import { useEffect } from 'react';
import Posts from '../components/Posts'
import { useState } from 'react'

const HomePage = () => {
 const [posts,setPosts]=useState([]);
 useEffect(()=>{
  fetch('http://localhost:8000/api/post',{
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