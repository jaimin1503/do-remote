const JobCardSm = ({ job }) => {
  return (
    <>
      <div className="job-card h-[300px] mx-4 whitespace-nowrap max-w-[300px] min-w-[300px] border-2 border-blue-500 rounded-2xl flex-col flex justify-evenly cursor-pointer hover:bg-gray-50">
        <h1 className="text-xl font-medium text-wrap mx-4">
          {job?.title.substring(0, 30)}
          {job?.title.length > 30 ? "..." : ""}
        </h1>
        <p className="text-lg text-wrap mx-4">
          {job?.description.substring(0, 100)}
          {"..."}
        </p>
        <div className=" flex justify-center">
          <button
            className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 py-2 px-4 rounded-full"
            style={{ transition: "0.3s" }}
          >
            Edit Job
          </button>
        </div>
      </div>
    </>
  );
};
export default JobCardSm;
