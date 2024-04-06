import Skeleton from "@mui/material/Skeleton";

const JobSktn = () => {
  return (
    <>
      <div className="jobcard border-y w-full p-2 hover:bg-gray-100 cursor-pointer">
        <div className="header flex items-center justify-between my-2">
          <Skeleton animation="wave" variant="text" width={200} height={30} />

          <Skeleton
            animation="wave"
            variant="circular"
            width={20}
            height={20}
          />
        </div>
        <Skeleton animation="wave" variant="text" width={100} height={20} />
        <Skeleton animation="wave" variant="text" width={300} height={80} />

        <Skeleton animation="wave" variant="text" width={50} height={20} />

        <div className=" flex items-center">
          <Skeleton animation="wave" variant="text" width={50} height={20} />
          <Skeleton animation="wave" variant="text" width={50} height={20} />
          <Skeleton animation="wave" variant="text" width={50} height={20} />
          <Skeleton animation="wave" variant="text" width={50} height={20} />
        </div>
        <Skeleton animation="wave" variant="text" width={100} height={20} />
      </div>
    </>
  );
};
export default JobSktn;
