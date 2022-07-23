import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
function Home() {

    const url = `https://62dbdcac57ac3c3f3c5046ef.mockapi.io/api/v1/products?page=1&limit=5`
    const [products, setProducts] = useState({
        loader : false,
        error:false,
        data : null,
    })

    useEffect(()=>{
        setProducts({
            loader: true,
            data: null,
            error:false,
        })
        axios.get(url).then(response=>{
            setProducts({
                loader: false,
                data: response.data,
                error:false,
            })
        }).catch((response)=>{
            console.error(response.data)
            setProducts({
                loader: false,
                data: null,
                error:true,
            })
        })
    },[url])
    let content = null

    if(products.error){
        content= 
        <div className=" text-2xl text-red-500">Error happened</div>}
        

    if(products.loader){
        content = <Loader></Loader>
        
    }

    if(products.data){
        content = 
            products.data.map((product,key) =>
                <div key={key}>
                <ProductCard product={product}></ProductCard>
                </div> 
            )
                
    }
    return(
        <div >
            <h1 className="text-2xl font-bold">Best Sellers !</h1>
            
            {content}
            
        </div>
    )
}

export default Home