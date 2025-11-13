import Link from "next/link";

function SignupPage() {
  return (
    <div className="signup-page bg-green-50 h-screen flex items-center justify-center">
      <div className="signup-container bg-white grid grid-cols-2 rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="signup-left relative bg-(--green) flex flex-col items-center justify-center p-10">
          <div className="decoration absolute inset-0 overflow-hidden">
            <div className="circle circle-1 absolute bg-green-300 rounded-full w-32 h-32 top-10 left-10 opacity-40"></div>
            <div className="circle circle-2 absolute bg-green-400 rounded-full w-48 h-48 bottom-10 right-10 opacity-30"></div>
            <div className="circle circle-3 absolute bg-green-200 rounded-full w-20 h-20 bottom-20 left-32 opacity-50"></div>
          </div>

          <div className="illustration relative z-10 text-center text-white">
            <span className="illustration-icon text-5xl">🚀</span>
            <h3 className="text-2xl font-semibold mt-4">Start your journey</h3>
            <p className="text-gray-200">Join our community</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="signup-right p-16 flex flex-col justify-center">
          <Link
            href="/"
            className="flex items-center text-(--green) mb-6 hover:text-green-700 transition font-medium"
          >
            ← Back
          </Link>

          <div className="logo flex items-center mb-6">
            <span className="logo-icon text-3xl mr-2">🌿</span>
            <h1 className="text-4xl font-bold text-(--green)">YourBrand</h1>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
          <p className="text-gray-600 mb-6">
            Please fill out the information below.
          </p>

          <form className="signup-form space-y-4">
            <div className="form-row grid grid-cols-2 gap-4">
              <div className="form-group flex flex-col">
                <label htmlFor="firstName" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your name"
                  required
                  className="border border-(--green) p-2 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="form-group flex flex-col">
                <label htmlFor="lastName" className="font-medium">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Your last name"
                  required
                  className="border border-(--green) p-2 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            <div className="form-group flex flex-col">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                required
                className="border border-(--green) p-2 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="form-group flex flex-col">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                required
                className="border border-(--green) p-2 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="form-group flex flex-col">
              <label htmlFor="confirmPassword" className="font-medium">
                Confirm your password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Repeat password"
                required
                className="border border-(--green) p-2 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <label className="checkbox-label flex items-center gap-1 text-sm">
              <input type="checkbox" className="mr-2" />I agree with{" "}
              <a href="#" className="text-green-600 hover:underline">
                terms of use
              </a>{" "}
              and{" "}
              <a href="#" className="text-green-600 hover:underline">
                privacy policy
              </a>
            </label>

            <button
              type="submit"
              className="signup-btn w-full bg-(--green) text-white py-2 rounded hover:bg-green-600 transition"
            >
              Create an account
            </button>
          </form>

          <div className="divider flex items-center justify-center my-6">
            <span className="text-gray-400">or</span>
          </div>

          <div className="social-signup flex flex-col space-y-3">
            <button className="social-btn google-btn border py-2 rounded flex items-center justify-center hover:bg-gray-50 transition hover:border-green-400 hover:border-2">
              <span className="social-icon mr-2">🔍</span> Register via Google
            </button>
            <button className="social-btn github-btn border py-2 rounded flex items-center justify-center hover:bg-gray-50 transition hover:border-green-400 hover:border-2">
              <span className="social-icon mr-2">💻</span> Register via GitHub
            </button>
          </div>

          <p className="login-link text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-(--green) hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
