import { useState } from "react"

export default function Forms() {

    const [email,setEmail ] = useState()
    const [password,setPassword ] = useState()

    function formSubmit(e){
        e.preventDefault()

       console.log("submitted")

    }

  return (
    <div className="container">
       <div className="row">
         <div className="col-md-6">
            <h6>Email : {email}</h6>
            <h6>Password : {password}</h6>
         <form onSubmit={formSubmit}>
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" required onChange={(e)=>setEmail(e.target.value)} class="form-control" />
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" required onChange={(event)=>setPassword(event.target.value)} class="form-control"  />
            </div>
            
            <button type="submit" class="btn btn-success">Submit</button>
         </form>

         </div>
         <div className="col-md-6 bg-success">
            <h1>MY FORMS</h1>
         </div>
       </div>
    </div>
  )
}
