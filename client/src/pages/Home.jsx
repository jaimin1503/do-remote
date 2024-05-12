import Navebar from "../components/Navebar";
import home1 from "./assets/home1.png";
import { Link } from "react-router-dom";
import img2 from "./assets/img2.jpg";
import "./Styles.css";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DevIT from "./DevIT";
import AIDS from "./AIDS";
import DesignCreation from "./DesignCreation";

export default function Home() {
  return (
    <div>
      <Navebar />
      <div className="row1 sm:flex sm:justify-center sm:items-center">
        <div className=" mt-4 flex flex-col h-full items-center sm:items-start m-4">
          <div className=" my-4">
            <h1 className="text-5xl max-w-xs header-gradient font-bold">
              Welcome to Do-Remote
            </h1>
            <h1 className=" text-3xl sm:text-4xl sub-header-gradient my-2 font-medium mt-4">
              Explore the sea of Talent,
            </h1>
            <h1 className=" text-3xl sm:text-4xl sub-header-gradient my-2 font-medium">
              Find the work that suits you.
            </h1>
            <button
              onClick={() => window.location.replace(`/welcome`)}
              className=" px-5 py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-4 w-fit font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className=" hidden md:block">
          <img
            src={home1}
            alt="remote"
            className=" w-[350px] mx-auto md:w-[450px]"
          />
        </div>
      </div>
      <div className="container row2 md:m-4 flex flex-col md:flex-row justify-evenly">
        <div className="image">
          <img
            className=" h-[50vh] w-full md:w-[50vw] rounded-2xl object-cover"
            src={img2}
            alt="image"
          />
        </div>
        <div className=" md:w-1/2 p-4">
          <h1 className="text-3xl font-bold">Why Do-Remote?</h1>

          <div className="my-4">
            <div className=" flex items-start ">
              <div>
                <AssignmentTurnedInOutlinedIcon className="text-3xl text-blue-500" />
              </div>
              <div className=" pl-2">
                <h1 className=" text-lg font-medium">No cost to join.</h1>
                <h1 className=" text-sm text-gray-600">
                  Register and browse professionals, explore projects, or even
                  book a consultation.
                </h1>
              </div>
            </div>
            <div className=" flex items-start mt-3 ">
              <div>
                <PushPinOutlinedIcon className="text-3xl text-blue-500" />
              </div>
              <div className=" pl-2">
                <h1 className=" text-lg font-medium">
                  Post a job and hire top talent
                </h1>
                <h1 className=" text-sm text-gray-600">
                  Finding talent doesn't have to be a chore. Post a job or we
                  can search for you!
                </h1>
              </div>
            </div>
            <div className=" flex items-start mt-3">
              <div>
                <StarBorderOutlinedIcon className="text-3xl text-blue-500" />
              </div>
              <div className=" pl-2">
                <h1 className=" text-lg font-medium">
                  Work with the best—without breaking the bank
                </h1>
                <h1 className=" text-sm text-gray-600">
                  Upwork makes it affordable to up your work and take advantage
                  of low transaction rates.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row3 m-4 flex flex-col md:flex-row justify-evenly">
        <div className=" md:w-1/2 p-4">
          <h1 className="text-3xl font-bold">How it works?</h1>

          <div className="my-4">
            <div className=" flex items-start ">
              <div className="text-3xl text-blue-500">1.</div>
              <div className=" pl-2">
                <h1 className=" text-xl font-medium">Post a job</h1>
                <h1 className=" text-sm text-gray-600">
                  Tell us about your project. Do-Remote connects you with top
                  talent and agencies around the world, or near you.
                </h1>
              </div>
            </div>
            <div className=" flex items-start mt-3 ">
              <div className="text-3xl text-blue-500">2.</div>
              <div className=" pl-2">
                <h1 className=" text-xl font-medium">Hire</h1>
                <h1 className=" text-sm text-gray-600">
                  Do-Remote connects you with top talent and agencies around the
                  world, or near you.
                </h1>
              </div>
            </div>
            <div className=" flex items-start mt-3">
              <div className="text-3xl text-blue-500">3.</div>
              <div className=" pl-2">
                <h1 className=" text-xl font-medium">Work</h1>
                <h1 className=" text-sm text-gray-600">
                  Use Do-Remote to chat or video call, share files, and track
                  project milestones from your desktop or mobile.
                </h1>
              </div>
            </div>
            <Link to={"/welcome"}>
              <button className=" mx-auto py-2 px-5 rounded-full bg-blue-500 hover:bg-blue-600 text-white mt-10">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <DevIT />
      <AIDS />
      <DesignCreation />
    </div>
  );
}
