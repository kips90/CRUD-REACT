import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import UpdateBlog from '../components/UpdateBlog'

export default function SingleBlog() 
{
  const {id} = useParams()
  const [blog, setBlog] = useState([])

  useEffect(()=>{

    fetch(`http://localhost:3000/blog/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
      setBlog(res)
    })

  }, [])
 
  console.log(blog)
  return (
    <div className='container row'>
      <div className='col-md-6'>
        <img src={blog.image} className='img-fluid' alt='loading...' />
      </div>
      <div className='col-md-6'>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
        {
          blog.is_archived===true?
           <button className='btn btn-sm btn-danger'>Archived blog</button>
           :
           <button className='btn btn-sm btn-success'>Not Archived</button>
        }

        <UpdateBlog blog={blog} />
      </div> 
      
    </div>
  )
}


