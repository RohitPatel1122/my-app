import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Products() {
    const { id } = useParams()
    const url = `https://62dbdcac57ac3c3f3c5046ef.mockapi.io/api/v1/products/${id}`
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        axios.get(url).then(response=>{
            setProduct(response.data)
        }).catch(response=>{
            console.error(response.data)
        })
    },[url])
    let content = null
    if(product){
        content = 
            <div>
                <h1 className="font-bold text-xl mb-1">{product.name}</h1>
                <div>
                    <img src={product.image} alt={product.name}></img>
                </div>
                <h1 className="font-bold text-xl mb-1">{product.createdAt}</h1>
            </div>
    }

    return (
        <div>{content}</div>
    )
}

export default Products;