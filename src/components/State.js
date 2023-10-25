import { useState } from "react"


export default function State() 
{
    const [cohort, setCohort] = useState("SDFT07")

    // const cohort = "SDFT07"
    function updateC()
    {
        setCohort("SDFT03")
    }

  return (
    <div>
      <h1>State</h1>  
      <p onClick={updateC}>{cohort}</p>
    </div>
  )
}


