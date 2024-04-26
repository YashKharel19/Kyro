import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegisterUserMutation } from "../../redux/service/AuthApi";

interface IFormInput {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Register = () => {
  const inputStyle =
    "w-full bg-white-200 text-gray-700 border-b-2 border-indigo-800 py-[20px] px-[10px] leading-tight focus:outline-none focus:bg-white focus:border-primary";

  //----------------REDUX PART STARTS-------------
  const [
    registerUser,
    {
      data: registerResponse,
      isSuccess: registrationSuccess,
      isError: registrationError,
    },
  ] = useRegisterUserMutation();

  //--------------REDUX PART ENDS---------------

  //FORM VALUES
  const [formValue, setFormValue] = useState(initialState);
  const { firstname, lastname, email, password } = formValue;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formValue.firstname === "" ||
      formValue.lastname === "" ||
      formValue.email === "" ||
      formValue.password == ""
    ) {
      toast.error("Please enter all the required fields");
    } else {
      try {
        await registerUser(formValue);
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  //---------USEEFFECT HOOKS-------------

  useEffect(() => {
    if (registerResponse && registrationSuccess) {
      toast.success("New Registration Success!");
    }
    if (registrationError) {
      toast.error("This Email already Exists!");
    }
  }, [registrationSuccess, registrationError]);

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div
          className="h-full flex items-center justify-center"
          style={{
            backgroundImage:
              "url('../../../src/assets/register/registerbg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container my-auto mx-auto">
            <div
              className="flex flex-col lg:flex-row-reverse
        w-10/12 lg:w-8/12  bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
            >
              <div
                className="
          bg-[url('../../../src/assets/register/register.svg')]
          w-full lg:w-1/2 flex flex-col p-12 bg-norepeat bg-cover bg-center
          "
              ></div>

              <div className="w-full lg:w-1/2 py-16 px-12">
                <div className="flex justify-center items-center">
                  <img
                    src="../../../public/logo.svg"
                    alt="Kyro logo "
                    className="relative max-w-[200px] items-center mb-2"
                  />
                </div>
                <h2 className="text-3xl mb-4 text-neutral">Sign-Up</h2>
                <p className="mb-4 text-gray-500">Register to Order</p>

                <div className="flex justify-between gap-5">
                  <div className="w-[50%]">
                    <input
                      type="text"
                      placeholder="John"
                      name="firstname"
                      className={`${inputStyle} capitalize`}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      placeholder="Doe"
                      name="lastname"
                      className={`${inputStyle} capitalize`}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={inputStyle}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className={inputStyle}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="btn bg-indigo-800 w-full border-indigo-800 hover:bg-indigo-900 hover:border-indigo-950 text-white"
                  >
                    Register
                  </button>
                </div>
                <div className="mt-8 flex gap-5 text-center items-center">
                  <p className="text-gray-600">Have an account?</p>
                  <Link to="/login" className="text-primary">
                    Login Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
