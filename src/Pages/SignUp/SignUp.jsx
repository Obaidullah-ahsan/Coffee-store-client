import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const createdAt = result.user?.metadata?.creationTime;
        const user = { email, createdAt };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'User addeded to the database',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(email, password, name);
  };
  return (
    <div className="w-full max-w-xl mx-auto p-8 mt-5 space-y-3 rounded-xl bg-base-200 dark:bg-gray-50 dark:text-gray-800">
      <h1 className="text-5xl font-bold font-Rancho text-center">Sign Up!</h1>
      <form onSubmit={handleSignUp} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label className="block dark:text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <button className=" btn bg-[#E3B577] font-Rancho text-xl w-full p-3 text-center rounded-lg">
          Sign Up
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-600">
        Already have an account?
        <Link to="/signin" className="underline dark:text-gray-800">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
