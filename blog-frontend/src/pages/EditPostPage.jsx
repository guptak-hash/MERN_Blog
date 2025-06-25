// blog-frontend\src\pages\EditPostPage.jsx
import { useState } from 'react';
import 'react-quill-new/dist/quill.snow.css'
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../components/Editor';
import { useEffect } from 'react';

function EditPostPage() {
    const { id } = useParams()
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    // const [cover,setCover]=useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        fetch('https://mern-blog-backend-tixg.onrender.com/api/post/' + id)
            .then(response => {
                response.json().then(postInfo => {
                    console.log('postInfo >> ', postInfo)
                    setTitle(postInfo.title)
                    setSummary(postInfo.summary)
                    setContent(postInfo.content)
                })
            })
    }, [])

    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('id', id);
        data.set('title', title)
        data.set('summary', summary);
        data.set('content', content);
        if (files?.[0]) {
            data.set('file', files[0])
        }
        const response = await fetch('https://mern-blog-backend-tixg.onrender.com/api/post', {
            method: 'PUT',
            body: data,
            credentials: 'include'
        })
        if (response.ok) {
            setRedirect(true)
        }

    }

    if (redirect) {
        return <Navigate to={'/post/' + id} />
    }
    return (
        <form onSubmit={updatePost}>
            <input type="title"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input type="summary"
                placeholder="Summary"
                value={summary}
                onChange={e => setSummary(e.target.value)} />
            <input type="file"
                onChange={e => setFiles(e.target.files)} />
            <Editor onChange={setContent} value={content} />
            <button style={{ marginTop: '5px' }}>Edit post</button>
        </form>
    )
}

export default EditPostPage