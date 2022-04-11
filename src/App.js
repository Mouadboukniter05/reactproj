import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
 
  return (
    <Router>
    <div className="App">
    <Navbar />
      <div className="content">
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

//////////////////////////////////////
/*  <h1>{title}</h1>
        <p>Liked {likes}</p>

        {/*<p> {person}</p>
      <a href={link}>google site</a>*/
       //const title = "Welcome to the new blog";
  //const likes = 50;
  //const link  = "https://www.google.com/";
  //const person = {name:"mouad",age:"50"} 