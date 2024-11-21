import React from "react";

const demo=()=>{
    const name='john';
    const x=10;
    const y=20;

    const names=['Brad','Mary','Joe','Sarah'];
    const loggedIn=true;

    return(
        <>
        <div className='text-3xl font-bold underline'>App</div>
        <p>Hello {name}</p>
        <p>The sum of {x} and {y} is {x+y}</p>
        <ul>
            {
               names.map((name,index)=>(
               <li key={index}>{name}</li>
               ))
            }
        </ul>
        {loggedIn ? <h1>Hello Member</h1>:<h1>Hello Guest</h1>}
        <Card customClasses="bg-green-400"/>
        <Card customClasses="bg-blue-400"/>
        <Card customClasses="bg-yellow-400"/>
        </>
    )
}
export default demo;