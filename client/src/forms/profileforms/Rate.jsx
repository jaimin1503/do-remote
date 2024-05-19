import "../formStyles.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateRate } from "../../services/profile.js";

function Rate({ pId, handleCloseRateModal }) {
  const [rate, setRate] = useState(0);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.profile?.hourlyRate) {
      setRate(user?.profile?.hourlyRate);
    }
  }, [user?.profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRate({ rate }, pId)).then(() => {
      console.log("submitted");
      handleCloseRateModal();
    });
  };

  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        <div className="bg-white p-4 rounded-2xl flex flex-col w-[340px] sm:w-[50vw] items-center">
          <h1 className="my-4 text-3xl font-semibold">Change hourly rate</h1>
          <form onSubmit={handleSubmit} className=" w-full">
            <div className="w-full h-fit lg:flex items-center">
              <h1 className="my-2 font-medium">Hourly Rate:</h1>
              <div className=" text-center ml-auto">
                <input
                  type="number"
                  name="hourlyRate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className=" p-2 border-2 border-gray-300 rounded-md"
                />
                <span className=" font-medium mx-2">rs./hr</span>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 float-right"
            >
              Save
            </button>
            <button
              onClick={handleCloseRateModal}
              className=" py-2 px-4 mt-4 float-right text-blue-500"
            >
              cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Rate;
