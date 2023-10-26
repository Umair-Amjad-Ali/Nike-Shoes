import { Button } from "../components";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide You
          <span className="text-coral-red "> Super </span>
          <span className=" text-coral-red"> Quality </span>
          shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footware
          is designed to evaluate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={530}
          height={422}
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
