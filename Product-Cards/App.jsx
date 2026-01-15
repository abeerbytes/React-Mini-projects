import ProductCard from "./components/ProductCard"
function App() {
  

  return (
    
     <div>
      <ProductCard
      title="Iphone 15 Pro Max"
      price={1200}
      image="https://share.google/LUtlwk7Hhnr3rGUgi"
      instock={true}
         />



       <ProductCard
       title="Samsung Galaxy S24 Ultra"
       price={1100}
       image="https://share.google/tg0J3n0ipVmoXBa2h"
       instock={false}
         />  
     </div>
  )
}

export default App
