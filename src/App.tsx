import React, {useState} from 'react';

import './App.css';

import Users from "./components/users";
import {getuserpost} from "./services/user.api.services";

function App() {
    const [posts, setPosts] = useState([])

    const lift=(id:number)=>{getuserpost(id).then(response=>{setPosts(response.data.posts)})}

  return (
    <div>
      <Users  lift={lift} />
        {posts.map(({title,body})=>(<div><h1>{title}</h1> <p>{body}</p></div>

        ))}


    </div>
  );
}

export default App;
