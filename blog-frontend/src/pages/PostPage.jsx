import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";

function PostPage() {
    const [postInfo,setPostInfo]=useState(null);
    const {id}=useParams();
    useEffect(()=>{
        fetch(`http://localhost:8000/api/post/${id}`)
        .then(response=>{
            response.json().then(postInfo=>{
                setPostInfo(postInfo);
            })
        })
    },[]);

    if(!postInfo) return '';
  return (
    <div className="post-page"> 
<div className="image">
        <img src={`http://localhost:8000/${postInfo.cover}`} alt=""/>
    </div>
    <h1>{postInfo.title}</h1>
    <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
    </div>
    
  )
}

export default PostPage