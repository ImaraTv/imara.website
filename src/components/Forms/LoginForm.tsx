import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { setAccessToken } from '@/../utils/authUtils';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, data);
      const { access_token } = response.data;

      // Store the access token
      setAccessToken(access_token);

      
      // Show a success message using SweetAlert
      Swal.fire({
        title: 'Login Successful',
        text: 'Redirecting to your profile...',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Redirect to the profile page
        router.push('/continue-watching');
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Login Failed',
        text: 'Invalid credentials. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:mt-16 sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
        <div>
          <div className="mt-4 md:mt-10">
            <input
              type="text"
              placeholder="Email"
              autoComplete="email"
              className="block w-full bg-transparent rounded-md border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email && (
              <span className="text-red-500">
                {errors.email.type === 'required'
                  ? 'Email is required'
                  : 'Invalid email address'}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="mt-4 md:mt-10">
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className="block w-full bg-transparent rounded-md border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
              {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password && (
              <span className="text-red-500">
                {errors.password.type === 'required'
                  ? 'Password is required'
                  : 'Password must be at least 8 characters long'}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-10 flex justify-end">
        <button
          type="submit"
          className="rounded-md w-1/2 bg-[#007BFF] px-4 md:px-10 py-2 md:py-5 text-center text-xs md:text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;