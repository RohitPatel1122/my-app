import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Products() {
    const { id } = useParams()
    const url = `https://62dbdcac57ac3c3f3c5046ef.mockapi.io/api/v1/products/${id}`
    const [product, setProduct] = useState({
        loader : false,
        error:false,
        data : null,
    })

    useEffect(()=>{
        setProduct({
            loader: true,
            data: null,
            error:false,
        })
        axios.get(url).then(response=>{
            setProduct({
                loader: false,
                data: response.data,
                error:false,
            })
        }).catch((response)=>{
            console.error(response.data)
            setProduct({
                loader: false,
                data: null,
                error:true,
            })
        })
    },[url])
    let content = null

    if(product.error){
        content= 
        <div className=" text-2xl text-red-500">Error happened</div>}
        

    if(product.loader){
        content = <Loader></Loader>
        
    }
    if(product.data){
        content = 
            <div>
                <h1 className="font-bold text-xl mb-1">{product.data.name}</h1>
                <div>
                    <img src={product.data.image} alt={product.data.name}></img>
                </div>
                <h1 className="font-bold text-xl mb-1">{product.data.createdAt}</h1>
            </div>
    }

    return (
        <div>{content}</div>
    )
}

export default Products;