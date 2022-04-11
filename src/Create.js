import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title,setTitle]= useState('');
    const [body,setBody]= useState('');
    const [author,setAuthor]= useState('mario');
    const [isPdg,setIsPdg]=useState(false);
    const history = useHistory();
    const handlsubmit=(e)=>{
        e.preventDefault();
        const blog = {title , body,author}
        setIsPdg(true);
        fetch('http://localhost:8000/blogs',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIsPdg(false)
            setBody('')
            setTitle('')
            setAuthor('mario')
            //history.go(-1);
            history.push('/')
        })
        
    }
    return (  
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handlsubmit}>
            <label >Blog title :</label>
            <input
             type="text"
             required
             value={title}
             onChange = { (e)=>setTitle(e.target.value)}
             />
            <br />
            <label >Blog body :</label>
            <textarea
             required
             value={body}
             onChange = { (e)=>setBody(e.target.value)}
             ></textarea>
            <br />
            <label >Blog author :</label>
            <select
            value={author}
            onChange={ (e)=>setAuthor(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
                <option value="mouad">mouad</option>
                <option value="youssef">youssef</option>
                <option value="amine">amine</option>
                <option value="mehdi">mehdi</option>
            </select>
           {!isPdg && <button>Add blog</button>} 
           {isPdg && <button disabled>Adding blog . . .</button>} 
        </form>
        </div>

    );
}
 
export default Create;