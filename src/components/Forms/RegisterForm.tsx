import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha'
import { useState, useEffect } from 'react'
import Link from 'next/link'

// Form validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required'),
  url: yup.string().url('Invalid URL').required('URL is required'),
})

const RegisterForm = ({
  setProgress,
}: {
  setProgress: (progress: number) => void
}) => {
  const router = useRouter()
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  const onSubmit = async (values: any) => {
    console.log('Form submitted', values)
    if (!recaptchaToken) {
      Swal.fire({
        title: 'reCAPTCHA not verified',
        text: 'Please complete the reCAPTCHA challenge.',
        icon: 'error',
        confirmButtonText: 'OK',
      })
      return
    }
    try {
      setProgress(50) // Update progress to 50% when starting the request
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        {
          ...values,
          recaptchaToken,
          url: 'https://imara.tv/email-verified',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      setProgress(100) // Update progress to 100% upon successful request

      Swal.fire({
        title: 'Registration Successful',
        text: 'You have successfully registered. Redirecting to login...',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        router.push('/verify-email')
      })
    } catch (error: any) {
      setProgress(0) // Reset progress upon error
      const fieldErrors = error.response.data.errors // Assuming error response is structured like { errors: { fieldName: "Error message" } }

      // Construct a formatted error message for display
      const formattedErrors = Object.entries(fieldErrors)
        .map(([field, message]) => `${field}: ${message}`)
        .join('\n')
        
      if (error.response && error.response.data && error.response.data.errors) {
        

        Swal.fire({
          title: 'Registration Failed',
          text: `There were errors in the following fields:\n${formattedErrors}`,
          icon: 'error',
          confirmButtonText: 'OK',
        })
      } else {
        Swal.fire({
          title: 'Registration Failed',
          text: `An error occurred during registration. Please try again. There were errors in the following fields:\n${formattedErrors}`,
          icon: 'error',
          confirmButtonText: 'OK',
        })
      }
    }
  }

  useEffect(() => {
    setProgress(0)
  }, [setProgress])

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/verify`,
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-y-4">
            {/* Name Field */}
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="name"
                component="span"
                className="text-red-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="text-red-500"
              />
            </div>

            {/* Password Field */}
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Set password"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="password"
                component="span"
                className="text-red-500"
              />
            </div>

            {/* Password Confirmation Field */}
            <div>
              <Field
                type="password"
                name="password_confirmation"
                placeholder="Repeat password"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="password_confirmation"
                component="span"
                className="text-red-500"
              />
            </div>
          </div>

          {/* ReCAPTCHA */}
          <div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              onChange={(token) => setRecaptchaToken(token)}
              className="mt-4"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="mt-4">
            <Field type="checkbox" name="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-700">
              I have read and accept the{' '}
              <Link
                href="https://imara.tv/terms-of-use"
                target="_blank"
                className="text-blue-500 underline"
              >
                terms and conditions
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-[#007BFF] px-10 py-2.5 text-center text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:text-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
