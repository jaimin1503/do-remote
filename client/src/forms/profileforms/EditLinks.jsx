import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { updateLinks } from "../../services/profile";

const EditLinks = ({
  pId,
  github,
  linkedin,
  stackoverflow,
  handleCloseLinks,
}) => {
  const [formData, setFormData] = useState({
    github: github,
    stackoverflow: stackoverflow,
    linkedin: linkedin,
  });
  const dispatch = useDispatch();
  const handelInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const toastId = toast.loading("Loading...");
    e.preventDefault();
    dispatch(updateLinks(formData, pId))
      .then(() => {
        handleCloseLinks();
      })
      .catch((err) => {
        console.log(err);
      });
    toast.dismiss(toastId);
  };

  return (
    <>
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className=" bg-white p-4 rounded-2xl flex flex-col w-[340px] sm:w-[500px] items-center">
          <div className="edit-details-header my-4">
            <h1 className="text-3xl font-semibold">Edit social links</h1>
          </div>
          <form onSubmit={handleSubmit} className=" w-full">
            <h1 className=" text-xl font-medium mb-1">GitHub</h1>
            <input
              onChange={handelInputChange}
              name="github"
              type="text"
              value={formData.github}
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
            />
            <h1 className=" text-xl font-medium mb-1">LinkedIn</h1>
            <input
              onChange={handelInputChange}
              name="linkedin"
              type="text"
              value={formData.linkedin}
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
            />
            <h1 className=" text-xl font-medium mb-1">StackOverflow</h1>
            <input
              onChange={handelInputChange}
              name="stackoverflow"
              type="text"
              value={formData.stackoverflow}
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
            />
            <button
              type="submit"
              className="btn bg-blue-500 hover:bg-blue-600 py-2 px-5 rounded-lg float-right text-white mt-4"
            >
              Save
            </button>
            <button
              onClick={handleCloseLinks}
              className="py-2 px-4 float-right text-blue-500 mt-4"
            >
              Cancle
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditLinks;
