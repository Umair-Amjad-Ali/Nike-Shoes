import { services } from "../constants";
import { ServiceCard } from "../components";
const Services = () => {
  return (
    <section className="max-container ">
      <div className="flex flex-col justify-center items-center gap-2 mb-10 ">
        <h2 className="text-4xl font-palanquin font-bold">
          Why <span className=" text-coral-red"> Choose </span>Us
        </h2>
        <p className="items-center mt-5 font-montserrat text-slate-gray">
          Free shipping, secure payments, and unwavering support - your ultimate
          shopping confidence
        </p>
      </div>
      <div className=" flex justify-center flex-wrap gap-9 mb-11">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
