import React, { useEffect, useState } from 'react'


export default function App(){

  const [id,setId]=useState(0)
  const [advice,setAdvice]=useState('')
  const [count,setCount]=useState(0)

useEffect(()=>{
        fetch("https://api.adviceslip.com/advice")
        .then(res=>res.json())
         .then(x=>{
           setId(x.slip.id)
           setAdvice(x.slip.advice)
          })
  },[count])

  return (
    <main>
        <p>hello</p>
    <div className="card">
    <h1 className="advice--id">ADVICE #{id}</h1>
    <p>"{advice}"</p>
    <div className="image"></div>
    <div onClick={()=>setCount(x=>x+1)} className="choose">
      </div>
    
    </div>
    </main>
  )
}