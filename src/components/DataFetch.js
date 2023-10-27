import {useEffect, useState} from 'react'

export default function DataFetch() 
{
    const [data, setData] = useState([])
    const [name, setName] = useState()

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

       fetch("https://www.boredapi.com/api/activity/")
        .then((res)=> res.json())
        .then((res)=>{
            setData(res)
            setLoading(false)
        })
        .catch(error=>{

        })
        
    }, [name])

    console.log(data);

  
  return (
    <div className='bg-dark text-white p-4 card container my-4'>
       <h1>DataFetch</h1>
       {
        loading===true?
        <div class="spinner-border text-primary" role="status">
           <span class="sr-only"></span>
        </div>:
       <div>  
        {     
            data?
            <div>
                <p>{data && data.accessibility}</p>
                <p>{data && data.participants}</p>
                <p>{data && data.key}</p>
                <p>{data && data.activity}</p>
                <a href={data && data.link}>{data && data.link}</a>
            </div>
            :
            <p className='text-warning'>No data found!</p>
            
        }
       </div>
       } 

       <input type='text' onChange={e => setName(e.target.value)} />

     </div>
  )
}
