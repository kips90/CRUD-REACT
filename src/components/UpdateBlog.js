import React, {useState} from 'react'
import Swal from "sweetalert2"

export default function UpdateBlog({blog}) 
{
    const [title, setTitle] = useState()
    const [desc, setDescription] = useState()
    const [image_url, setImageUrl] = useState()


    console.log("DATA",blog);
    function blogSubmit(e)
    {
        e.preventDefault()

        fetch(`http://localhost:3000/blog/${blog.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json" },
            body: JSON.stringify({title: title,description:desc, image:image_url, is_archived:false })
        })
        .then((res)=>res.json())
        .then((res)=>{
             
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Blog Updated successfully!',
                showConfirmButton: false,
                timer: 1500
            })
          
        })
        .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'We have an error reaching our servers!',
                
              })
        })

      

    }


  return (
    <div className='container mt-5'>
        <h4>UPDATE</h4>
      
        <div className=''>
           <form onSubmit={blogSubmit}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" value={title || blog.title} onChange={e=>setTitle(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" value={desc || blog.description}  onChange={e=>setDescription(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Image url</label>
                <input type="url" value={image_url || blog.image}  onChange={e=>setImageUrl(e.target.value)} className="form-control" required />
            </div>

            
            <button type="submit" className="btn btn-success">Update</button>
            </form>

        </div>
        

       
    </div>
  )
}
