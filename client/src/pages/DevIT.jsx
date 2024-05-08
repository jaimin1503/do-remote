import { Link } from "react-router-dom";
import webImg from "./assets/web.png";

export default function DevIT() {
  return (
    <>
      <div className="container p-4">
        <h1 className=" text-4xl font-bold mb-4">
          Development and IT related works
        </h1>
        <div className="info flex flex-col lg:flex-row bg-gray-800 rounded-2xl">
          <div className="row1 lg:w-1/2 p-4">
            <img src={webImg} alt="" />
          </div>
          <div className="row1 lg:w-1/2 p-4 text-white">
            <h1 className=" text-4xl sm:text-5xl font-medium mb-3">
              Dev and IT experts to scale your org
            </h1>
            <p className=" md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              accusantium dolore nisi. Aut non dolor asperiores animi.
            </p>
            <Link to={"/welcome"}>
              <button className="mx-auto py-2 px-5 rounded-full bg-blue-500 hover:bg-blue-600 text-white mt-10">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
