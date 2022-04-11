import { Link } from "react-router-dom";
const BlogList = (props) => {
  
    
    
    return (  

        <div className="blog-list">
            <h2>{props.title}</h2>
            { props.blogs.map(blog => (
                
                <div className="blog-preview" key={blog.id} >
                    <Link to={'/blogs/'+blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>written by : {blog.author}</p>
                    </Link>
                  
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;


/*
                
                */
               //import { useState,useEffect } from "react";
 // const [user,setUser]=useState(null);
   /* useEffect(()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    if(!res.ok)throw Error("could not fetch the data for that resource");
                    return res.json()
                }) 
                .then(data=>{
                    setUser(data);
                   // console.log(user);
                })
                .catch(err=>{
               console.log(err.message);
                })
        },100)
        },[])
    */
   //////////

   /*
     <button onClick={
                    ()=> {
                        return props.handleDelete(blog.id);
                    }
                }
                >delete blog</button>
*/