import { FaPencil, FaRegEye } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, remainingCoffee, setRemainingCoffee }) => {
  const { _id, name, chef, supplier, category, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = remainingCoffee.filter(
                (cof) => cof._id !== _id
              );
              setRemainingCoffee(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side gap-4 bg-[#F5F4F1] p-3 shadow-xl">
      <figure>
        <img className="h-48" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center w-full">
        <div className="">
          <h2 className="card-title">Name : {name}</h2>
          <p>Chef : {chef}</p>
          <p>Supplier : {supplier}</p>
          <p>Category : {category}</p>
        </div>
        <div className="flex flex-col gap-2 pr-3">
          <button className="btn bg-[#D2B48C]">
            <FaRegEye color="white" />
          </button>
          <Link to={`/updatecoffee/${_id}`}>
            <button className="btn bg-black">
              <FaPencil color="white" />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-[#EA4744]"
          >
            <MdDeleteForever color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
