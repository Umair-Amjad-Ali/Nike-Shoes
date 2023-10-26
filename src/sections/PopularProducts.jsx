import { products } from "../constants";
import { PopolarProductCard } from "../components";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className=" text-coral-red"> Popular</span> Products
        </h2>
        <p className=" items-center mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections.Discover a world of comfort, Design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-1">
        {products.map((product) => (
          <PopolarProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
