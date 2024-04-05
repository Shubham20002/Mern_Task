import React, { useEffect, useState } from 'react'

export default function Array() {
    const [number,setnumber]=useState({});
    const [arr,setArray]=useState([]);
    const [order,setorder]=useState({assending:true});
    let inputRef=React.createRef();
    useEffect(()=>{
        async function fetchData() {
          const response = await fetch("http://localhost:8000/getarray");
          const array = await response.json();
        //   console.log("array",array);
          setArray(array);          
          }
          fetchData();  
    },[number]);
   
    //api to add number
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(number);
        try {
            const res = await fetch('http://localhost:8000/addnumber', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(number),
          });
          inputRef.current.value="";
          setnumber({});
             
        } catch (error) {
        
        }
      }
//handlereset
const handleRestart=async(e)=>{
    e.preventDefault();
        try {
            const res = await fetch('http://localhost:8000/restart', {
            method: 'GET',
          });
          const array = await res.json();
          console.log("item from get",array);
          setArray(array);
        } catch (error) {
        }
}
//handle assending and decending

const handleOrder=async(e)=>{
    setorder({assending:!order.assending});
    try {
        const res = await fetch('http://localhost:8000/arrange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(order),
      });
      const array = await res.json();
      setArray(array);
      console.log(order);
      
         
    } catch (error) {
    
    }
}
  return (
    <>
    <div className='maindiv'>
    <form onSubmit={handleSubmit}>
        <input type="number"ref={inputRef} onChange={(e)=>setnumber({number:e.target.value})} />
        <button type="submit" >Add number</button>
    </form>
    {/* <h1>number:{number}</h1> */}
    {arr.map((e)=><>
        <span>{e}</span>
        <span>,</span>
    </>)}
    <br />
    <button onClick={handleOrder} >order</button>
    <br />
    <button onClick={handleRestart}>Reset</button>
    </div>
    </>
  )
}
