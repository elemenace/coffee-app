import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fake-coffee-api.vercel.app/api");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      const lastSpaceIndex = text.substring(0, maxLength).lastIndexOf(" ");
      return (
        text.substring(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxLength) +
        "..."
      );
    }
    return text;
  };

  if (loading) {
    return <div className="text-center text-2xl py-12">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 my">
      <h1 className="text-center text-3xl font-bold mb-6 text-brown-800">
        Coffee Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="mb-4 bg-[#D3B8A1] hover:shadow-xl shadow-md p-6 border border-brown-300 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="h-44 w-full object-cover rounded-t-lg"
              src={product.image_url}
              alt={product.name}
            />
            <div className="text-lg font-semibold mt-4 text-brown-800">
              {product.name}
            </div>
            <div className="text-gray-700 text-sm mt-1">
              Price: ${product.price.toFixed(2)}
            </div>
            <div className="text-gray-600 text-sm mt-2">
              {truncateText(product.description, 80)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
