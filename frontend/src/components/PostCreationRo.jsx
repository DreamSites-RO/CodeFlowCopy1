import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Image, Loader } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import { axiosInstance } from "../lib/axios";

const PostCreation = ({ user }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const queryClient = useQueryClient();

  const { mutate: createPostMutation, isPending } = useMutation({
    mutationFn: async (postData) => {
      const res = await axiosInstance.post("/posts/create", postData, {
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    },
    onSuccess: () => {
      resetForm();
      toast.success("Post created successfully");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => {
      toast.error(err.response.data.message || "Failed to create post");
    },
  });

  const handlePostCreation = async () => {
    try {
      const postData = { content };
      if (image) postData.image = await readFileAsDataURL(image);
      createPostMutation(postData);
    } catch (error) {
      console.error("Error in handlePostCreation:", error);
    }
  };

  const resetForm = () => {
    setContent("");
    setImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      readFileAsDataURL(file).then(setImagePreview);
    } else {
      setImagePreview(null);
    }
  };

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="w-full bg-[#0F111A] border-2 border-gray-700 rounded-lg font-poppins text-sm text-text-gray overflow-hidden shadow-lg mb-6 transition-all duration-300">
      <div className="p-4">
        <div className="flex space-x-3">
          <img
            src={user.profilePicture || "/avatar.png"}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <textarea
            placeholder="Ce ai in minte?"
            className="w-full p-3 rounded-md bg-[#1a1d2e] hover:bg-[#202436] focus:bg-[#202436] focus:outline-none resize-none text-white placeholder:text-gray-500 transition-colors duration-200 min-h-[100px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {imagePreview && (
          <div className="mt-4">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer text-sm">
            <Image size={18} className="mr-2" />
            <span>Imagine</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>

          <button
            onClick={handlePostCreation}
            disabled={isPending}
            className={`text-sm sm:text-base border-2 font-poppins font-bold rounded-[10px] px-6 sm:px-8 py-2 transition-all duration-300 hover:text-yellow-ok hover:border-yellow-ok hover:bg-opacity-10 ${
              isPending
                ? "text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10"
                : "text-gray-deschis border-text-gray opacity-60 hover:opacity-100"
            }`}
          >
            {isPending ? (
              <>
                <div className="flex justify-center items-center">
                  <Loader className="size-4 animate-spin mr-2" />
                  Se posteaza...
                </div>
              </>
            ) : (
              "Posteaza"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCreation;
