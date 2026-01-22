import { useEffect, useState } from "react"

const FakeStore = () => {
 const [Products,SetProducts]=useState([])
 const [Loading,SetLoading]=useState(false)
 const [Error,SetError]=useState()

 useEffect(()=>{

const fetchProducts=async()=>{
    SetLoading(true)
    try{
         const response = await fetch("https://fakestoreapi.com/products");
         if(!response.ok){
            Error("Failed to fetch products")
            


         }
         const data=await response.json()
         SetProducts(data)
        
    }
    catch(err){
        SetError(err.message)
    }
    finally{
        SetLoading(false)

    }
}
fetchProducts()





 },[])
 if(Loading){
    return(
        <div>Loading.....</div>

    )
 }

if(Error){
    return(
        <div>Error:{Error}</div>
    )
}


}
export default FakeStore
