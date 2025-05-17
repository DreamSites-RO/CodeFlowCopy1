import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

import SignUpFormRo from "../../components/auth/SignUpFormRo";

import { motion } from "framer-motion";

const SignUpPage = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/pozaloginsignup.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(238, 130, 130, 0) 50%)",
        }}
      />

      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12">
        {/* Animated Typing Text */}
        <div className="flex items-center mb-8 relative font-pixel">
          <motion.img
            src="/pixelcat.jpg"
            alt="Pixel Cat"
            className="w-24 h-24 object-contain mr-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative bg-[#d7e9f7] text-black text-sm px-4 py-2 rounded-lg border-[2px] border-[#a0b2c3] shadow-[2px_2px_0_0_#7a8fa4] max-w-xs sm:max-w-sm leading-relaxed">
            <TypeAnimation
              sequence={[
                "Alătură-te comunității pentru",
                1000,
                "Alătură-te comunității pentru a învăța si",
                1000,
                "Alătură-te comunității pentru a învăța si a creste!",
                1000,
              ]}
              speed={50}
              wrapper="span"
              cursor={true}
              repeat={0}
              className="block whitespace-pre-line"
            />

            <div className="absolute left-[-8px] top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#d7e9f7]" />
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="group w-full max-w-md mx-auto sm:mx-0 bg-[#0F111A] hover:bg-[#0F112A] transition-all duration-500 border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
          <div className="p-12">
            <img
              className="mx-auto h-10 w-auto mb-10"
              src="/logo.svg"
              alt="CodeFlow"
            />
            <div className="mb-8">
              <SignUpFormRo />
            </div>

            <p className="text-xs text-center text-gray-500 mt-1">
              Prin înregistrare, sunt de acord cu{" "}
              <Link to="/termsro" className="underline hover:text-blue-400">
                Termenii și Condițiile
              </Link>{" "}
              de la CodeFlow.
            </p>

            <div className="mt-8 relative flex items-center justify-center">
              {/* Horizontal line */}
              <div className="w-full border-t border-gray-600 absolute top-1/2 transform -translate-y-1/2" />

              {/* Text on top of the line */}
              <span className="relative bg-[#0F111A] group-hover:bg-[#0F112A] transition-colors duration-300 px-3 text-sm text-gray-400">
                Ai deja un cont?
                <Link to="/loginro" className="text-blue-400 ml-1">
                  Conectează-te
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
