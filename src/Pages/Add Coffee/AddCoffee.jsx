import { Link } from "react-router-dom";
import "./AddCoffee.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          form.reset();
        }
      });
    
  };
  return (
    <div className="addCoffeeBg">
      <div className="mx-44 mt-8">
        <Link className="font-Rancho text-3xl flex gap-2 items-center" to="/">
          <FaArrowLeftLong /> Back to home
        </Link>
      </div>
      <section className="p-6 mx-44 my-8 bg-[#F4F3F0] dark:text-gray-900">
        <div className="text-center mx-auto">
          <h2 className="font-Rancho text-5xl text-[#331A15]">
            Add New Coffee
          </h2>
          <p className="max-w-3xl text-center mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form
          onSubmit={handleAddCoffee}
          className="container flex flex-col mx-auto space-y-12"
        >
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm font-semibold">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm font-semibold">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm font-semibold">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm font-semibold">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm font-semibold">
                Details
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-full">
              <label htmlFor="email" className="text-sm font-semibold">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter coffee photo"
                className="w-full rounded-md p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <input
              className="btn bg-[#D2B48C] border border-black font-Rancho text-xl col-span-full"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCoffee;
