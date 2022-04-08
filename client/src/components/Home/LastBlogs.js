import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {fetchBlogs} from '../../app/app.slice'
import BlogCard from "./BlogCard";

export default function LastBlogs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  },[])
  const blogs = useSelector(state => state.app.blogs)
  return <div style={{height:'600px',overflow:'auto'}}>
     {
        blogs.length <1 ? <h1>Loading..</h1>:blogs.map(blog => <BlogCard key={blog.id} blog={blog}/>)
     }
  </div>;
}
