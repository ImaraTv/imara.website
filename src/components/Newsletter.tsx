
export function Newsletter() {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-4">
                <div className="relative isolate overflow-hidden px-6 py-10 sm:px-10 xl:py-20">
                    <h2 className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight text-[#2B2B2B] sm:text-4xl">
                        Don’t miss out on any of our content
                    </h2>
                    <p className="mx-auto mt-2 text-center text-lg leading-8 text-[#2B2B2B]">
                        Subscribe to our newsletter and get personalised upskilling material today.
                    </p>
                    <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#3F4C5373] focus:ring-2 focus:ring-inset focus:ring-[#3F4C5373] sm:text-sm sm:leading-6"
                            placeholder="Email"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-[#007BFF] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
