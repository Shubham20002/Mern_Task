import React, { useEffect, useState } from 'react'

export default function Array() {
    const [number,setnumber]=useState(10);
    const [arr,setArray]=useState();

    useEffect(()=>{
        async function fetchData() {
          const response = await fetch("http://localhost:8000/getarray");
          const array = await response.json();
          console.log("item from get",array);
          const {items}=array;
          setArray(array);          
          }
          fetchData();  
    },[]);
   

  return (
    <>
    <form >
        <input type="number" onChange={(e)=>setnumber(e.target.value)} />
        <button type="submit" >Add number</button>
    </form>
    <h1>number:{number}</h1>
    {arr.map((e)=><h1>{e}</h1>)}
    </>
  )
}
