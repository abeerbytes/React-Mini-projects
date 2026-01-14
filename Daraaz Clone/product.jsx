import { FaStar } from "react-icons/fa"

const Product = ({ product }) => {
  return (
    <div className="bg-white p-3 rounded shadow">
      <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain" />
      <h2 className="text-sm font-semibold mt-2 line-clamp-2">{product.title}</h2>
      <p className="text-orange-500 font-bold mt-1">${product.price}</p>
      <div className="flex items-center text-yellow-500">
        <FaStar />
        <span className="ml-1 text-sm text-black">{product.rating.rate}</span>
      </div>
      <button className="mt-2 w-full bg-orange-500 text-white py-1 rounded">Add to Cart</button>
    </div>
  )
}

export default Product
