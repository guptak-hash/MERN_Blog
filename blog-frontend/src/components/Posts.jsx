import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom';

function Posts({ _id,title, summary, cover, createdAt, author }) {
  const atIndex = author.email.indexOf("@");
  const username = author.email.slice(0, atIndex);
  return (
    <div className='post'>
      <div className='image'>
        <Link to={`/post/${_id}`}>
          <img src={'https://mern-blog-backend-tixg.onrender.com/uploads/' + cover} alt='' />
        </Link>
      </div>
      <div className='texts'>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  )
}

export default Posts