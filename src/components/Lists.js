
export default function Lists() 
{
  const fruits = ["Apple", "Mangoes", "Banana", "Oranges", "xxxx"]

  const students = [
    {name: "Saningo", TM: "Victor"}, {name: "Jainam", TM: "Kelvin"},
    {name: "Irene", TM: "Victor"}, {name: "Caleb", TM: "Kelvin"}
  ]

  return (
    <div className="container">
      <h1>Lists</h1>

      {
        fruits.map((fruit)=>(
          <div key={fruit}>
            <p>{fruit}</p>
          </div>
        ))
      }

      <h1>Students</h1>
      {
        students.map((student)=>(
          <div key={student.name} className="my-4 bg-secondary">
            <p>{student.name}</p>
            <p>{student.TM}</p>
          </div>
        ))
      }
   
        
    
    </div>
  )
}
