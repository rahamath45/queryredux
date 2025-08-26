/*import { useState } from "react";
import { useNewpostMutation } from "./Services/postApiservice";


const App = () =>{
  const [post,setPost] = useState({title:"",body:""})
  const [newpost,{isLoading,error}] = useNewpostMutation();
  return(
    <>
    {error && <h1>error occured</h1>}
    <div>
        <h1>create post</h1>
        <form onSubmit={(e)=>{
                   e.preventDefault();
                   newpost(post)
                }}>
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            <input type="text" value={post.title} 
            onChange={(e)=> setPost(old =>({...old,title:e.target.value}))} placeholder="Enter your title"/>
            <textarea rows={4} placeholder="Enter your content"  value={post.body}  onChange={(e)=> setPost(old =>({...old,body:e.target.value}))} />

          </div>
          <button type="submit"style={{marginTop:"1rem"}} disabled={isLoading}>submit</button>
        </form>
    </div>
    </>
  )
}
export default App;*/




import { useGetAllPostsQuery } from "./Services/postApiservice";

  function App() {
    const {data:posts,isLoading,error} = useGetAllPostsQuery();
  
      if(isLoading){
  return<p>Loading....</p>
    }
     if(error){
        return<P>error:{error}</P>
     }

  return (
    <>
     <h1>post page</h1>
      <ul>
        {posts.map((post)=>(
            <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    
    </>
  )
}

 export default App;