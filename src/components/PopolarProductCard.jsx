import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div
      className="flex justify-center items-center flex-1 flex-col w-full max-sm:w-full  
    hover:bg-slate-50 transition duration-500 transform hover:-translate-y-1 hover:scale-105 rounded-lg hover:shadow-lg hover:rounded-lg"
    >
      <img src={imgURL} alt={name} className="w-[250px] h-[250px] mt-5" />
      <div className="mt-5 flex justify-start gap-2">
        <img src={star} alt="rating icon" width={20} height={20} />
        <p className="font-montserrat text-md leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal mb-5">
        {price}
      </p>
    </div>
  );
};
export default PopularProductCard;
