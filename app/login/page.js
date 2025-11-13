import Link from "next/link";

function Page() {
  return (
    <div className="login-page bg-green-50 h-screen flex items-center justify-center">
      <div className="login-container bg-white grid grid-cols-2 rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="login-left p-20 flex flex-col justify-center">
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

          <h2 className="text-2xl font-semibold mb-2">Welcome back!</h2>
          <p className="text-gray-600 mb-6">Log in to your account</p>

          <form className="login-form space-y-4">
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
                placeholder="Enter your password"
                required
                className="border p-2 border-(--green) rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="form-options flex items-center justify-between gap-2 text-sm">
              <label className="checkbox-label flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="login-btn w-full bg-(--green) text-white py-2 rounded hover:bg-green-600 transition"
            >
              Login
            </button>
          </form>

          <div className="divider flex items-center justify-center my-6">
            <span className="text-gray-400">or</span>
          </div>

          <div className="social-login flex flex-col space-y-3">
            <button className="social-btn google-btn border py-2 rounded flex items-center justify-center hover:bg-gray-50 transition hover:border-green-400 hover:border-2">
              <span className="social-icon mr-2">🔍</span> Sign in with Google
            </button>
            <button className="social-btn github-btn border py-2 rounded flex items-center justify-center hover:bg-gray-50 transition hover:border-green-400 hover:border-2">
              <span className="social-icon mr-2">💻</span> Login via GitHub
            </button>
          </div>

          <p className="signup-link text-sm mt-6 text-center">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-(--green) hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="login-right relative bg-(--green) flex flex-col items-center justify-center p-10">
          <div className="decoration absolute inset-0 overflow-hidden">
            <div className="circle circle-1 absolute bg-green-300 rounded-full w-32 h-32 top-10 left-10 opacity-40"></div>
            <div className="circle circle-2 absolute bg-green-400 rounded-full w-48 h-48 bottom-10 right-10 opacity-30"></div>
            <div className="circle circle-3 absolute bg-green-200 rounded-full w-20 h-20 bottom-20 left-32 opacity-50"></div>
          </div>

          <div className="illustration relative z-10 text-center">
            <span className="illustration-icon text-5xl">🔐</span>
            <h3 className="text-2xl text-gray-100 font-semibold mt-4">
              Secure login
            </h3>
            <p className="text-gray-300">Your data is protected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
