import Drawer from "@mui/material/Drawer";
import ViewProfile from "../../pages/ViewProfile";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ViewJob from "../jobCompos/ViewJob";
import EditButton from "../../smallComponents/EditButton";

const ProposalCard = ({ proposal }) => {
  const [open, setOpen] = useState(false);
  const [openJob, setOpenJob] = useState(false);
  const [drawerJob, setDrawerJob] = useState({});
  const [drawerProfile, setDrawerProfile] = useState({});
  const { user } = useSelector((state) => state.user);

  const toggleDrawer = (newOpen, profile) => () => {
    setOpen(newOpen);
    setDrawerProfile(profile);
  };

  const toggleJobDrawer = (newOpen, job) => () => {
    setOpenJob(newOpen);
    setDrawerJob(job);
  };

  return (
    <>
      <Drawer anchor="right" open={openJob} onClose={toggleJobDrawer(false)}>
        <ViewJob job={drawerJob} toggleDrawer={toggleJobDrawer} />
      </Drawer>
      <div className="proposal-card border-b">
        <div className=" flex justify-between items-center">
          {user?.role === "client" ? (
            <Link to={`/editJob/${proposal?.job?._id}`}>
              <h1
                className=" text-2xl font-medium mt-2 mb-2 hover:text-blue-500 hover:underline cursor-pointer"
                style={{ transition: "0.3s" }}
              >
                {proposal?.job?.title || "Job Title"}
              </h1>
            </Link>
          ) : (
            <>
              <h1
                onClick={toggleJobDrawer(true, proposal?.job)}
                className=" text-2xl font-medium mt-2 mb-2 hover:text-blue-500 hover:underline cursor-pointer"
              >
                {proposal?.job?.title || "Job Title"}
              </h1>
            </>
          )}
          {user?.role === "client" ? (
            <Link to={`/viewproposal/${proposal?._id}`}>
              <button
                style={{ transition: "0.3s" }}
                className=" mx-4 py-2 px-5 my-4 text-white bg-green-500 hover:bg-green-600 rounded-full"
              >
                Hire
              </button>
            </Link>
          ) : (
            <Link to={`/editproposal/${proposal?._id}`}>
              <EditButton />
            </Link>
          )}
        </div>
        <div className=" mb-2 flex justify-between">
          <div>
            <h2
              onClick={toggleDrawer(true, proposal?.freelancer)}
              className=" text-2xl font-medium text-blue-500 cursor-pointer hover:text-blue-600 hover:underline"
              style={{ transition: "0.3s" }}
            >
              {proposal?.freelancer?.username || "Jon Doe."}
            </h2>
            <h2 className=" text-sm text-gray-500">
              {proposal?.freelancer?.profile?.current_position ||
                "Web developer"}
            </h2>
          </div>
          <div className=" mx-4">
            <h2 className="font-medium">Delivery Time</h2>
            <h2 className=" text-sm text-gray-500">{proposal?.deliveryTime}</h2>
          </div>
        </div>
        <p className=" whitespace-pre-wrap text-gray-600 my-2 mr-4 text-justify">
          {proposal?.coverLetter.length > 150
            ? proposal?.coverLetter.substring(0, 150) + "..."
            : proposal?.coverLetter}
        </p>
        <div className="my-2">
          <h2 className="  font-medium">Bid Amount</h2>
          <h2 className=" text-sm text-gray-500">
            &#8377; {proposal?.bidAmount}
          </h2>
        </div>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <ViewProfile user={drawerProfile} toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};
export default ProposalCard;
