import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const Login = () => {
  const {signInUser} = useAuth()
  const navigate = useNavigate();
  const handleLogin = (e) =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email,password)
    .then(result =>{
      console.log(result);
      Swal.fire({
        position: 'center',
        icon: 'success',
        iconColor:'#BD27EA',
        title: 'You have successfully logged in',
        color:'#BD27EA',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/')
    })
    .catch(err =>{
      console.log(err.message);
    })
  }
  return (
    <div className="min-h-screen bg-pink-300 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-primary-color shadow-lg transhtmlForm -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-primary-color">
                Login Now
              </h1>
            </div>
            <form className="divide-y divide-gray-200" onSubmit={handleLogin}>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="email"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-color  text-primary-color focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-primary-color  text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-color  peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-primary-color  text-primary-color focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-primary-color  text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary-color  peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <button className="bg-primary-color text-white rounded-md px-2 py-1 font-bold">
                   Login
                  </button>
                </div>
              </div>
            </form>
          </div>
          <p className="text-primary-color">Don not have any account <span className="font-bold underline"><Link to={'/register'}> Sign up </Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
