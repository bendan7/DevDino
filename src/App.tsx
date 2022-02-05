import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPostsList } from './actions';
import { Post } from './actions/interfaces';


function App() {

  const [posts, setPosts]  = useState([]);

  // onComponentDidMount
  useEffect(() => {
    getPostsList((posts: any) => setPosts(posts))
  }, []);



  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {posts?.map((post: Post) => <div key={post.id}>{post?.title}</div>)}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
