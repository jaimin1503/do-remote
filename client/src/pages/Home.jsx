import Navebar from "../components/Navebar";
import home1 from "./assets/home1.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navebar />
      <div className="row1 sm:flex sm:justify-center sm:items-center">
        <div className=" mt-4 flex flex-col h-full items-center sm:items-start m-4">
          <div className=" my-4">
            <h1 className="text-5xl max-w-xs text-blue-500 font-bold">
              Welcome to Do-Remote
            </h1>
            <h1 className=" text-3xl sm:text-4xl text-gray-400 my-2 font-medium mt-4">
              Explore the sea of Talent,
            </h1>
            <h1 className=" text-3xl sm:text-4xl text-gray-400 my-2 font-medium">
              Find the work that suits you.
            </h1>
            <div className=" px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full mt-4 w-fit font-medium">
              <Link to={`/welcome`}>Get Started</Link>
            </div>
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
      <div className="row2">
        <div className="image">
          
        </div>
      </div>
    </div>
  );
}
