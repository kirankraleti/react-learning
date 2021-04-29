import React, { useState, useEffect } from 'react';
import Post from './post';

const App = ({initialCount}) => {

  // let [count, setCount] = useState(initialCount);

  const [state, setState] = useState({
    count: initialCount,
    user: "Kiran"
  });

  let [posts, setPosts] = useState([
    {
      name: 'Post 1',
      body: 'Post 1 body'
    },
    {
      name: 'Post 2',
      body: 'Post 2 body'
    }
  ]);

  const addPosts = () => {
    let newPost = {
      name: 'Post 3',
      body: 'Post 3 body'
    };
    setPosts([
      ...posts,
      newPost
    ]);
  };

  const removePosts = () => {
    setPosts([]);
  };

  // const restOne = () => {
  //   setCount(prevCount => prevCount - 1);
  // }

  const restOne = () => {
    setState({
      ...state,
      count: state.count - 1
    });
  }
  // runs at beginning or when an update on props or state.
  // array defines property on which we can control the useEffect trigger
  // we can add multiple
  useEffect(() => {
    console.log("USE EFFECT");
  }, [posts]);

  useEffect(() => {
    console.log("USE EFFECT STATE");
  }, [state]);

  // works only on first run
  useEffect(() => {
    console.log("MOUNTED");
  }, [])

  return (
    <>
      {/* <h3>Count: {count}</h3> */}
      {/* <button onClick={ () => setCount(count+1) }>Add one</button> */}
      {/* <button onClick={ restOne }>Rest one</button>
      <button onClick={ () => setCount(initialCount) }>Reset</button> */}
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={ () => setState({
        ...state,
        count: state.count+1
        }) }>Add one</button>
      <button onClick={ restOne }>Rest one</button>
      <button onClick={ removePosts }>Remove Post</button>

      <hr/>

      { posts.map((item, i)=>(
        <Post item={item} key={i}/>
        // <div key={i}>
        //   <div>Name: {item.name}</div>
        //   <div>Body: {item.body}</div>
        //   <hr/>
        // </div>
      )) }

      <button
        onClick={addPosts}
      >Add Post</button>
    </>
  );
}

export default App;
