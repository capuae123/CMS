import React from "react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="text-textprimary flex justify-center pt-20 bg-bg">
      {/* wrapper */}
      <div className="flex flex-col gap-20 items-center">
        {/* header */}
        <div className="flex gap-5 items-center">
          <div>
            <Image src={"/logo2.png"} width={80} height={80} alt="logo" />
          </div>
          <div className="text-4xl font-medium">
            Welcome To <br /> <span className="text-primary">Relphacare</span>{" "}
            CMS
          </div>
        </div>
        {/* header */}
        {/* loginform */}
        <div>
          <form className="">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium pl-2 text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="info@relphacare.com"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-2xl bg-[#EBEFF9] focus:outline-none sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium pt-5 pl-2 text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder=""
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-2xl bg-[#EBEFF9] focus:outline-none sm:text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[10px] text-textsecondary"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <Link href="/home">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-sm font-medium mt-10 md:mt-20 text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </form>
        </div>
        {/* loginform */}
      </div>
      {/* wrapper */}
    </div>
  );
};

export default Login;
