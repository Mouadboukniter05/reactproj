
import BlogList from './bloglist'
import useFetch from "./useFetch";
const Home = () => {
const{data,isPending,error,handleDelete}=useFetch('http://localhost:8000/blogs');
      return ( 
        <div className="home">
         {error &&<div>{error}</div>}
        {isPending && 
        <div>
            Loading...
        </div>
        }
       
        {data && <BlogList blogs={data}  title="All Blogs !" handleDelete = {handleDelete}/>}
        </div>
      );
}
 
export default Home;














/*let name = "mario";
    const [i,setI]=useState(1);
    const [name,setName] = useState("mario");
    const [age,setAge]= useState(25);
    const handleclick = (e)=>{
        if (i%2 === 0) {
            setName("linda jamila");
            setAge(30);
            setI(prevcount => prevcount + 1);
        }else{
            setName("mario");
            setAge(25);
            setI(prevcount => prevcount + 1);
        }
       
    }
     <BlogList blogs={blogs.filter(o=> o.author ==="mario")} title="Mario's blogs" />
    */
   /*handleDelete=handleDelete*/