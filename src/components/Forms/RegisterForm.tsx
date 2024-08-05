// \src\components\Forms\RegisterForm.tsx
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha'; 
import { useState } from 'react';

type FormData = {
    name: string
    email: string
    password: string
    password_confirmation: string
    url: string
}

const RegisterForm = ({ setProgress }: { setProgress: (progress: number) => void }) => { // Accept setProgress as prop
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<FormData>();

     const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
     useEffect(() => {
        onStepChange(1); // Update the step when the form is mounted
    }, []);

    const onSubmit = async (data: any) => {
        if (!recaptchaToken) {
            Swal.fire({
                title: 'reCAPTCHA not verified',
                text: 'Please complete the reCAPTCHA challenge.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }
        try {
             setProgress(50); // Update progress to 50% when starting the request
            const response = await axios.post(
                'https://imara.tv/admin/api/auth/register',
                {
                    ...data, recaptchaToken, 
                    url: 'https://imara.tv/email-verified',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            setProgress(100); // Update progress to 100% upon successful request
            
            // Handle successful registration
            console.log(response.data);

            // Show a success message using SweetAlert
            Swal.fire({
                title: 'Registration Successful',
                text: 'You have successfully registered. Redirecting to login...',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(() => {
                // Redirect to the login page
                router.push('/verify-email'); // Assuming you have a /login page
            });
        } catch (error) {
             setProgress(0); // Reset progress upon error
            // Handle registration error
            console.error(error);
            Swal.fire({
                title: 'Registration Failed',
                text: 'An error occurred during registration. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };
       useEffect(() => {
        setProgress(0); // Reset progress when component mounts
        }, [setProgress]);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-16 sm:mt-20">
            <div className="grid grid-cols-1 gap-y-6 ">
               
                <div>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            placeholder="Email"
                            autoComplete="email"
                            className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            </div>
            <div className="grid grid-cols-1 gap-y-10">
                <div>
                    <div className="mt-10">
                        <input
                            type="password"
                            placeholder="Set password"
                            autoComplete="new-password"
                            className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                <div>
                    <div className="mt-10">
                        <input
                            type="password"
                            placeholder="Repeat password"
                            autoComplete="new-password"
                            className="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            {...register('password_confirmation', {
                                required: true,
                                validate: (value) =>
                                    value === getValues('password') || 'Passwords do not match',
                            })}
                        />
                        {errors.password_confirmation && (
                            <span className="text-red-500">
                                {typeof errors.password_confirmation === 'string'
                                    ? errors.password_confirmation
                                    : 'Passwords do not match'}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div>
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} 
                onChange={(token) => setRecaptchaToken(token)}
                className="mt-4"
            /></div>
             <div className="mt-4">
                            <input type="checkbox" id="terms" name="terms" className="mr-2" />
                            <label htmlFor="terms" className="text-gray-700">
                                I have read and accept the{' '}
                                <Link href="https://imara.tv/terms-of-use" target="_blank" className="text-blue-500 underline">
                                    terms and conditions
                                </Link>
                            </label>
                        </div>
            <div className="mt-10 flex justify-end">
                <button
                    type="submit"
                    className="rounded-md bg-[#007BFF] px-10 py-2.5 text-center text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
