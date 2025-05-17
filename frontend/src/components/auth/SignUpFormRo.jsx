import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";

import { motion } from "framer-motion";

import { axiosInstance } from "../../lib/axios";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const queryClient = useQueryClient();

  const { mutate: signUpMutation, isLoading } = useMutation({
    mutationFn: (data) => axiosInstance.post("/auth/signup", data),
    onSuccess: () => {
      toast.success("Account created successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpMutation({ name, username, email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full font-poppins text-sm text-text-gray space-y-4"
    >
      <input
        type="text"
        placeholder="Nume complet"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-3 rounded-md bg-[#1a1d2e] hover:bg-[#202436] focus:bg-[#202436] focus:outline-none text-white placeholder:text-gray-500 transition-colors duration-200"
        required
      />
      <input
        type="text"
        placeholder="Nume de utilizator"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-3 rounded-md bg-[#1a1d2e] hover:bg-[#202436] focus:bg-[#202436] focus:outline-none text-white placeholder:text-gray-500 transition-colors duration-200"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-md bg-[#1a1d2e] hover:bg-[#202436] focus:bg-[#202436] focus:outline-none text-white placeholder:text-gray-500 transition-colors duration-200"
        required
      />
      <input
        type="password"
        placeholder="Parola (6+ caractere)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 rounded-md bg-[#1a1d2e] hover:bg-[#202436] focus:bg-[#202436] focus:outline-none text-white placeholder:text-gray-500 transition-colors duration-200"
        required
      />

      <motion.button
        type="submit"
        className={`text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 w-full flex items-center justify-center ${
          isLoading
            ? "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 cursor-not-allowed"
            : "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:opacity-100"
        }`}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
      >
        {isLoading ? (
          <>
            <Loader className="size-5 animate-spin mr-2" />
            Cont in creare...
          </>
        ) : (
          "Inregistreaza-te"
        )}
      </motion.button>
    </form>
  );
};

export default SignUpForm;
