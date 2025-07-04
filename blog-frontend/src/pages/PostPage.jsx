// blog-frontend\src\pages\PostPage.jsx
import { formatISO9075 } from "date-fns";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext)
    const { id } = useParams();
    // console.log('userInfo >> ', userInfo)
    useEffect(() => {
        fetch(`https://mern-blog-backend-tixg.onrender.com/api/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            })
    }, []);
    console.log('postInfo >> ',postInfo)
    console.log('userInfo >> ',userInfo)

    // function deletePost() { }

    if (!postInfo) return '';
    const atIndex = postInfo.author.email.indexOf("@");
    const username = postInfo.author.email.slice(0, atIndex);
    return (
        <div className="post-page">
            <h1>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">By {username}</div>
            {userInfo?.id === postInfo.author._id && (
        
                <div className="edit-row">
                    <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>

                        Edit Post</Link>
                </div>
    
            )}
            <div className="image">
                <img src={`https://mern-blog-backend-tixg.onrender.com/${postInfo.cover}`} alt="" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
            
        </div>

    )
}

export default PostPage