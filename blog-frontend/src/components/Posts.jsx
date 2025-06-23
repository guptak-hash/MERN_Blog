import {formatISO9075} from 'date-fns'

function Posts({title,summary,cover,createdAt,author}) {
  const atIndex = author.email.indexOf("@");
const username = author.email.slice(0, atIndex);
  return (
      <div className='post'>
        <div className='image'>
          <img src='https://techcrunch.com/wp-content/uploads/2024/02/GettyImages-1783835425-crop-e1717409949317.jpg?resize=1280,721' />
        </div>
        <div className='texts'>
          <h2>{title}</h2>
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