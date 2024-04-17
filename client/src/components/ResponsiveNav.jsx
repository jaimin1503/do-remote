import CloseIcon from "@mui/icons-material/Close";

const ResponsiveNav = ({ toggleDrawer, id }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <div className=" p-4 w-full flex justify-end">
        <CloseIcon onClick={toggleDrawer(false)} className="cursor-pointer" />
      </div>
      <div className=" w-screen sm:w-[340px]">
        <ul>
          <li className=" p-4 border-b">
            <a href={`/profile/${id}`}>My Profile</a>
          </li>
          <li className=" p-4 border-b">
            <a href="/dev">Find Talent</a>
          </li>
          <li className=" p-4 border-b">
            <a href="/design">Saved Profiles</a>
          </li>
          <li className=" p-4 border-b">
            <a href="/proposals">Proposals</a>
          </li>
          <li className=" p-4 border-b">
            <a href="/myjobs">My Jobs</a>
          </li>
          <li className=" p-4 border-b">
            <a href="/design">Messages</a>
          </li>
          <li className=" p-4 border-b">
            <button
              onClick={handleLogout}
              className=" text-white py-2 px-5 rounded-full bg-red-500 hover:bg-red-600"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ResponsiveNav;
