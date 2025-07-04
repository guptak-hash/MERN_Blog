// blog-frontend\src\pages\CreatePost.jsx
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../components/Editor';

function CreatePost() {
    const [title,setTitle]=useState('');
    const [summary,setSummary]=useState('');
    const [content,setContent]=useState('');
const [files,setFiles]=useState('')
const [redirect,setRedirect]=useState(false)

async function createNewPost(e){
    e.preventDefault();
    const data=new FormData();
    data.set('title',title)
    data.set('summary',summary);
    data.set('content',content);
    data.set('file',files[0])
    const response=await fetch('https://mern-blog-backend-tixg.onrender.com/api/post',{
        method: 'POST',
        body: data,
        credentials: 'include'
    })
    if(response.status===200){
        setRedirect(true)
    }
}

if(redirect){
    return <Navigate to={'/'}/>
}
  return (
    <form onSubmit={createNewPost}>
        <input type="title" 
        placeholder="Title" 
        value={title} 
        onChange={e=>setTitle(e.target.value)}/>
        <input type="summary" 
        placeholder="Summary"
        value={summary}
        onChange={e=>setSummary(e.target.value)}/>
        <input type="file"
        onChange={e=>setFiles(e.target.files)}/>
    <Editor onChange={setContent} value={content}/>
        <button style={{marginTop:'5px'}}>Create post</button>
    </form>
  )
}

export default CreatePost