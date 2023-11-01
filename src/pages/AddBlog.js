import React, {useState} from 'react'
import Swal from "sweetalert2"

export default function AddBlog() 
{
    const [title, setTitle] = useState()
    const [desc, setDescription] = useState()
    const [image_url, setImageUrl] = useState()

    function blogSubmit(e)
    {
        e.preventDefault()

        fetch("http://localhost:3000/blog", {
            method: "POST",
            headers: {"Content-Type":"application/json" },
            body: JSON.stringify({title: title,description:desc, image:image_url, is_archived:false })
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log("success")
             
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Blog saved successfully!',
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

        setTitle("")
        setDescription("")
        setImageUrl("")

    }


  return (
    <div className='container row mt-5'>
        <div className='col-md-6'>
            <h1>ADD BLOG</h1>
        </div>
        <div className='col-md-6'>
           <form onSubmit={blogSubmit}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" value={desc}  onChange={e=>setDescription(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Image url</label>
                <input type="url" value={image_url}  onChange={e=>setImageUrl(e.target.value)} className="form-control" required />
            </div>

            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
        

       
    </div>
  )
}
