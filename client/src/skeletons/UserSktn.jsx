import Skeleton from "@mui/material/Skeleton";

const UserSktn = () => {
  return (
    <>
      <div className="usercard border-y w-full  p-4 hover:bg-gray-100 cursor-pointer">
        <div className="header flex my-2">
          <Skeleton
            animation="wave"
            variant="circular"
            width={60}
            height={60}
          />
          <div className=" mx-4">
            <Skeleton animation="wave" variant="text" width={100} height={20} />
            <Skeleton animation="wave" variant="text" width={200} height={20} />
          </div>
        </div>
        <Skeleton animation="wave" variant="text" width={100} height={20} />
        <Skeleton animation="wave" variant="text" width={60} height={20} />

        <div className=" flex items-center flex-wrap">
          <div className=" mx-2">
            <Skeleton
              animation="wave"
              variant="text"
              width={80}
              height={50}
              style={{ borderRadius: "9999px" }}
            />
          </div>
          <div className=" mx-2">
            <Skeleton
              animation="wave"
              variant="text"
              width={80}
              height={50}
              style={{ borderRadius: "9999px" }}
            />
          </div>
          <div className=" mx-2">
            <Skeleton
              animation="wave"
              variant="text"
              width={80}
              height={50}
              style={{ borderRadius: "9999px" }}
            />
          </div>
          <div className=" mx-2">
            <Skeleton
              animation="wave"
              variant="text"
              width={80}
              height={50}
              style={{ borderRadius: "9999px" }}
            />
          </div>
          <div className=" mx-2">
            <Skeleton
              animation="wave"
              variant="text"
              width={80}
              height={50}
              style={{ borderRadius: "9999px" }}
            />
          </div>
          <div className=" mx-2">
            <Skeleton
              animation="wave"
              variant="text"
              width={80}
              height={50}
              style={{ borderRadius: "9999px" }}
            />
          </div>
        </div>
        <Skeleton animation="wave" variant="text" width={500} height={20} />
      </div>
    </>
  );
};
export default UserSktn;
