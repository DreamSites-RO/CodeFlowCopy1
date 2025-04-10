import { Link } from "react-router-dom";
import React from "react";

import SignUpForm from "../../components/auth/SignUpForm";

const SignUpPage = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/pozaloginsignup.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-10 w-auto" src="/logo.svg" alt="CodeFlow" />
          <h1 className="text-center text-[20px] font-pixel font-extrabold text-text-gray mt-8">
            Make the most of your professional life
          </h1>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md">
          <div className="bg-[#040f1a] bg-opacity-80 backdrop-blur-sm border-2 border-gray-600 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <SignUpForm />

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Already on CodeFlow?
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  to="/login"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
