const ProductCard = ({ title, price, image, instock }) => {
  return (
    <div className=" content-center-safe  group relative w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="relative h-64 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
          instock 
            ? 'bg-emerald-500/90 text-white' 
            : 'bg-red-500/90 text-white'
        }`}>
          {instock ? "In Stock" : "Out of Stock"}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
        </div>

        <button 
          disabled={!instock}
          className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
            instock
              ? 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Buy Now!
        </button>
      </div>
    </div>
  );
};

export default ProductCard;