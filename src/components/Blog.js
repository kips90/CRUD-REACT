import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Blog({blog, onChange, setOnchange}) 
{

    function deleteBlog(){
        fetch(`http://localhost:3000/blog/${blog.id}`, {
            method: "DELETE"
        })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res);
        setOnchange(!onChange)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Blog deleted successfully!',
          showConfirmButton: false,
          timer: 1500
      })


    })


   
    }

  return (
    <div className='col-md-3 mb-5 '>
        <img src={blog.image} alt='loading...' className='img-fluid' />
        <div className='card p-1'>
            <Link to={`/blogs/${blog.id}`} >
              <h6>{blog.title}</h6>
            </Link>
            <button onClick={()=>deleteBlog()} type="button" class="btn btn-outline-danger btn-sm">DELETE</button>

        </div>
    </div>
        
  )
}
