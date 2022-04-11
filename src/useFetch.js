// eslint-disable-next-line no-unused-vars
import { useState,useEffect } from "react";
const useFetch = (url)=>{
    const [data, setData] = useState(null);
    //const [usr, setUsr] = useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
    const handleDelete = (id)=>{
        const newBlogs = data.filter(p=>p.id !==id);
        setData(newBlogs);
    }
    useEffect(()=>{
        const AbortCotrl = new AbortController();



        setTimeout(()=>{
            fetch(url,{ signal:AbortCotrl.signal })
                .then(res => {
                    if(!res.ok)throw Error("could not fetch the data for that resource");
                    return res.json()
                }) 
                .then(data=>{
                setData(data)
                setIsPending(false)
                setError(null)
                })
                .catch(err=>{
                    if(err.name ==='AbortError')
                    {
                        console.log("fetch aborted");
                    }else{
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        },1000);
        return ()=>AbortCotrl.abort();
        },[url]);
        return {data,isPending,error,handleDelete}
}
export default useFetch;