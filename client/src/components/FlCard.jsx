const FlCard = ({ user }) => {
  return (
    <>
      <div
        key={user?._id}
        className="fl-card h-fit mx-3 whitespace-nowrap max-w-[300px] min-w-[300px] border-2 border-blue-500 rounded-2xl cursor-pointer hover:bg-gray-50"
      >
        <div className="fl-card-img flex items-center">
          <img
            src={user?.profile?.profilePicture}
            alt="img"
            className=" min-w-24 max-w-24 h-24 object-cover rounded-full m-4"
          />
          <div>
            <h1 className="text-xl font-medium text-blue-500">
              {user?.firstName} {user?.lastName?.[0]}
              {"."}
            </h1>
            <p className=" text-sm text-wrap">
              {user?.profile?.current_position || "Free Lancer"}
            </p>
          </div>
        </div>
        <div className=" flex">
          <div className="fl-card-content mx-4">
            <p className="text-lg">{user?.location}</p>
            <p className="text-lg">
              {user?.profile?.hourlyRate}
              {" rs./hr"}
            </p>
          </div>
          <div className="fl-card-footer mb-4 flex justify-center">
            <button
              className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 py-2 px-4 rounded-full"
              style={{ transition: "0.3s" }}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FlCard;
