import Navebar from "../components/Navebar";
import home1 from "./assets/home1.png";

export default function Home() {
  return (
    <div>
      <Navebar />
      <div className="row1 sm:flex bg-blue-100 sm:justify-center sm:items-center">
        <div className="col1 mt-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Welcome to Do-Remote
          </h1>
          <p className="text-center">Find the best remote jobs in the world</p>
        </div>
        <div className=" ">
          <img
            src={home1}
            alt="remote"
            className=" w-[350px] mx-auto md:w-[450px]"
          />
        </div>
      </div>
    </div>
  );
}
