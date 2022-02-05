import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPostsList } from './actions';
import { Post } from './actions/interfaces';
import PostList from './components/PostList';


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
        <PostList />
      </header>
    </div>
  );
}

export default App;
