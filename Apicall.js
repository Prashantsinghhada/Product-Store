import React,{useEffect,useState} from "react";
import axios from "axios";
import  "./productBox.css";
import "./AppiCallREspons.css";


function ProductList({title,thumbnail,brand,description}){
    return(<>
    
  <figure>
      <img
        src={`${thumbnail}?w=248&fit=crop&auto=format`}
        srcSet={`${thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
      <h2>{brand}</h2>
<figcaption> {description} </figcaption>
</figure>
    </>
    )}



 function Product(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
      axios.get("https://dummyjson.com/products").then(function(result){
        console.log(result.data.products);
        setProducts(result.data.products)
      }).catch((error)=>{
        console.log(error)
      });
    },[])
return(
    <>
    {products.map((products)=><ProductList{...products}/>)}
    </>
)
}

 export default  function PrintApi(){
        return(<> 
     <Product/>
            </>
        )
    }
