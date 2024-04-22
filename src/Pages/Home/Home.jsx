import "./Home.css";
import cupIcon from "../../assets/images/icons/1.png";
import badgeIcon from "../../assets/images/icons/2.png";
import coffeeIcon from "../../assets/images/icons/3.png";
import canIcon from "../../assets/images/icons/4.png";

import cup1 from "../../assets/images/cups/Rectangle 9.png";
import cup2 from "../../assets/images/cups/Rectangle 10.png";
import cup3 from "../../assets/images/cups/Rectangle 11.png";
import cup4 from "../../assets/images/cups/Rectangle 12.png";
import cup5 from "../../assets/images/cups/Rectangle 13.png";
import cup6 from "../../assets/images/cups/Rectangle 14.png";
import cup7 from "../../assets/images/cups/Rectangle 15.png";
import cup8 from "../../assets/images/cups/Rectangle 16.png";
import { Link } from "react-router-dom";
import { BsCup } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="banner flex justify-end items-center">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-white font-Rancho text-5xl">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-white font-Rancho">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn text-black bg-[#E3B577] text-xl font-Rancho border-0 rounded-none">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#ECEAE3] flex gap-7 px-32 py-5">
        <div>
          <img className="" src={cupIcon} alt="" />
          <h2 className="font-Rancho text-2xl py-2">Awesome Aroma</h2>
          <p className="font-Rancho">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img className="" src={badgeIcon} alt="" />
          <h2 className="font-Rancho text-2xl py-2">High Quality</h2>
          <p className="font-Rancho">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div>
          <img className="" src={coffeeIcon} alt="" />
          <h2 className="font-Rancho text-2xl py-2">Pure Grades</h2>
          <p className="font-Rancho">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img className="" src={canIcon} alt="" />
          <h2 className="font-Rancho text-2xl py-2">Proper Roasting</h2>
          <p className="font-Rancho">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
      <div className="my-10">
        <div className="text-center mx-auto">
          <p className="font-Rancho">--- Sip & Savor ---</p>
          <h2 className="font-Rancho text-5xl text-[#331A15] my-3">
          Our Popular Products
          </h2>
          <Link to="/addcoffee"><button className="btn bg-[#E3B577] font-Rancho font-normal border-black text-white text-2xl">Add Coffee <BsCup color="black"/></button></Link>
        </div>
      </div>
      <div className="mx-32 my-20">
        <div className="text-center mx-auto">
          <p className="font-Rancho">Follow Us Now</p>
          <h2 className="font-Rancho text-5xl text-[#331A15]">
            Follow on Instagram
          </h2>
        </div>
        <section className="py-4 dark:bg-gray-100">
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl"
                src={cup1}
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl"
                src={cup2}
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl"
                src={cup3}
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl"
                src={cup4}
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl"
                src={cup5}
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl"
                src={cup6}
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl"
                src={cup7}
              />
              <img
                className="object-cover w-full dark:bg-gray-500 aspect-square rounded-xl"
                src={cup8}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
