import React ,{ useState ,useEffect} from 'react';
import Pagination from './pagination';




const App = () => {
const [posts,setPosts] = useState([]);
const [currentPage,setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);




useEffect(()=>{
fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
.then((resp)=> resp.json())
.then((data)=>{
    setPosts(data);
})
},[]);



const Posts = ({posts}) =>{
    return(
        posts.map((element,index)=>{
            return (
                <ul key={index} className='list-group mb-4'>
                    <li key={index} className='list-group-item' >
                    {element.id}.  Name: {element.name} ,Email_id : {element.email}
                    </li>
            
                 </ul>   
            )
            })
    )
}

const lastPostIndex = currentPage*postsPerPage;
const firstPostIndex = lastPostIndex - postsPerPage;
const currentPosts = posts.slice(firstPostIndex,lastPostIndex);



const paginate =(pageNumber) =>setCurrentPage(pageNumber);
    



return (
<div className="container mt-5">
<h1 className="text-primary mb-3">My App</h1>
<Posts posts={currentPosts}/>
<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate = {paginate}/>

</div>
   );
};

export default App;