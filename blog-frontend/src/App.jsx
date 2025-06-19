import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <a href='' className='logo'>MyBlog</a>
        <nav>
          <a href=''>Login</a>
          <a href=''>Register</a>
        </nav>
      </header>
      <div className='post'>
        <div className='image'>
          <img src='https://techcrunch.com/wp-content/uploads/2024/02/GettyImages-1783835425-crop-e1717409949317.jpg?resize=1280,721' />
        </div>
        <div className='texts'>
          <h2>New code in Spotify’s app references the long-awaited ‘lossless’ tier</h2>
          <p className="info">
            <a className="author">Steve Jobs</a>
            <time>2025-06-19 05:15</time>
          </p>
          <p className='summary'>After numerous leaks and teases from company execs, we know better than to
            start hoping that the long-delayed service could be finally nearing arrival.
            But newly added references in the music app’s code suggest the lossless
            service is at least still under development and could even be getting closer to launch.</p>
        </div>
      </div>
      <div className='post'>
        <div className='image'>
          <img src='https://techcrunch.com/wp-content/uploads/2024/02/GettyImages-1783835425-crop-e1717409949317.jpg?resize=1280,721' />
        </div>
        <div className='texts'>
          <h2>New code in Spotify’s app references the long-awaited ‘lossless’ tier</h2>
          <p className="info">
            <a className="author">Steve Jobs</a>
            <time>2025-06-19 05:15</time>
          </p>
          <p className='summary'>After numerous leaks and teases from company execs, we know better than to
            start hoping that the long-delayed service could be finally nearing arrival.
            But newly added references in the music app’s code suggest the lossless
            service is at least still under development and could even be getting closer to launch.</p>
        </div>
      </div>
      <div className='post'>
        <div className='image'>
          <img src='https://techcrunch.com/wp-content/uploads/2024/02/GettyImages-1783835425-crop-e1717409949317.jpg?resize=1280,721' />
        </div>
        <div className='texts'>
          <h2>New code in Spotify’s app references the long-awaited ‘lossless’ tier</h2>
          <p className="info">
            <a className="author">Steve Jobs</a>
            <time>2025-06-19 05:15</time>
          </p>
          <p className='summary'>After numerous leaks and teases from company execs, we know better than to
            start hoping that the long-delayed service could be finally nearing arrival.
            But newly added references in the music app’s code suggest the lossless
            service is at least still under development and could even be getting closer to launch.</p>
        </div>
      </div>
      <div className='post'>
        <div className='image'>
          <img src='https://techcrunch.com/wp-content/uploads/2024/02/GettyImages-1783835425-crop-e1717409949317.jpg?resize=1280,721' />
        </div>
        <div className='texts'>
          <h2>New code in Spotify’s app references the long-awaited ‘lossless’ tier</h2>
          <p className="info">
            <a className="author">Steve Jobs</a>
            <time>2025-06-19 05:15</time>
          </p>
          <p className='summary'>After numerous leaks and teases from company execs, we know better than to
            start hoping that the long-delayed service could be finally nearing arrival.
            But newly added references in the music app’s code suggest the lossless
            service is at least still under development and could even be getting closer to launch.</p>
        </div>
      </div>
      <div className='post'>
        <div className='image'>
          <img src='https://techcrunch.com/wp-content/uploads/2024/02/GettyImages-1783835425-crop-e1717409949317.jpg?resize=1280,721' />
        </div>
        <div className='texts'>
          <h2>New code in Spotify’s app references the long-awaited ‘lossless’ tier</h2>
          <p className="info">
            <a className="author">Steve Jobs</a>
            <time>2025-06-19 05:15</time>
          </p>
          <p className='summary'>After numerous leaks and teases from company execs, we know better than to
            start hoping that the long-delayed service could be finally nearing arrival.
            But newly added references in the music app’s code suggest the lossless
            service is at least still under development and could even be getting closer to launch.</p>
        </div>
      </div>
    </main>
  )
}

export default App
