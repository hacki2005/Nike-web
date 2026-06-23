import { useParams } from "react-router-dom";
import { products } from "../constants";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="flex flex-col items-center p-10">
      <img
        src={product.imgURL}
        alt={product.name}
        className="w-[450px] h-[450px]"
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-xl mt-2 text-coral-red">{product.price}</p>
      <p className="mt-2 text-sm uppercase tracking-wide text-black">
        {product.type}
      </p>
      <p className="mt-4 max-w-md text-center text-slate-gray">
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetails;