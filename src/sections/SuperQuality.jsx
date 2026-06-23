import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          We Provide You {""}
          <span className="text-coral-red ">Super</span>
          <span className="text-coral-red ">Quality{""}</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Every shoe is thoughtfully designed with premium materials and built
          to last, giving you the comfort and durability you need to keep moving
          forward, no matter where life takes you.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Style, comfort, and quality — crafted into every step you take.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;