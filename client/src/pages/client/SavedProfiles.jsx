import NavLogged from "../../components/NavLogged";

const SavedProfiles = () => {
  return (
    <>
      <NavLogged />
      <div className="m-4 sm:p-4 my-10 ">
        <h1 className=" text-4xl font-medium">Saved Profiles</h1>
        <h1 className=" text-3xl my-4 font-medium">Your Saved Profiles</h1>
        <div className="your-jobs overflow-x-auto whitespace-nowrap w-full">
          <div className="jobs-container flex whitespace-nowrap w-full">
            <div className="flex items-center justify-center w-full h-96">
              <h1 className="text-2xl font-medium">No saved profiles yet</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SavedProfiles;
