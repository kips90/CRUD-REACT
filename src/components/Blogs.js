import React, { useEffect, useState } from 'react'
import Blog from './Blog'

export default function Blogs() 
{
  
    const [blogs, setBlogs] = useState([])
    const [onChange, setOnchange] = useState(false)

    useEffect(()=>{
      fetch("http://localhost:3000/blog")
      .then((res)=>res.json())
      .then((res)=>{
        setBlogs(res)
      })
    }, [onChange])

    console.log(blogs)
  return (
    <div className='container bg-white text-dark p-4'>
       <h1>Blogs</h1> 
       {
        blogs.length<1 && <p className='alert alert-warning'>There is no blogs at the moment</p>
       }

        <div className='container row'>
       {
          blogs && blogs.map((blog)=>(
            <Blog key={blog.id} onChange={onChange} setOnchange={setOnchange} blog={blog}/>
          ))
       }
        </div>
    </div>
  )
}
