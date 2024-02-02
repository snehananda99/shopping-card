import React, { useEffect, useState } from 'react'
import './Home.css'

const Home=()=>{
    const[product,setproduct]=useState([]);
    const[num,setnum]=useState(0);
    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata=async()=>{
        const data=await fetch('https://fakestoreapi.com/products/')
        const result=await data.json();
        setproduct(result);
        console.log(result)
    }
    const removedata=()=>{
        setproduct([])
    }
    const handle=()=>{
        const filterrer=product.filter((item)=>item.price<20);
        setproduct(filterrer);
    }
    return(
        <div>
            <h2>{num}</h2>
            <button onclick={handle}>filter less</button>
            <button onclick={removedata}>remove data</button>
        <div className='product-container'>
            {
                product && product.map((item,index)=>(
                 <div className='card'key={index}>
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>
                    <h5>{item.price}</h5>
                    <h4>{item.rating.rate}*</h4>
                    <button >Add tocart</button>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Home