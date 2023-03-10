import React, { useState } from 'react'
import { useEffect } from 'react';
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import db from "./firebase"
 import FlipMove from "react-flip-move"

function Feed() {
      const[posts, setPosts]=useState([]);

      useEffect(()=>{
           db.collection('posts').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>  doc.data()))
           ))
      },[])
  return (
    
    <div className="feed" >
     
      <div className="feed-header">
        <h2>Home</h2>
     </div>
            
  
       <TweetBox />
       
       <FlipMove>
       {posts.map(post=>(
        <Post
        key={post.text}
         displayName={post.displayName} 
         userName={post.userName}
          Verified={post.Verified} 
          text={post.text}
           avatar={post.avatar}
            image={post.image}
            />))}
         </FlipMove>
    </div>
  )
}

export default Feed
