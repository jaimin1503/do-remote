import aiImg from "./assets/vecteezy_ai-robot-technology-concept_22242520_82/vecteezy_ai-robot-technology-concept_22242520-1.jpg";
import aiBg from "./assets/vecteezy_dynamic-flowing-wavy-abstract-light-line-vector-in-blue_24054189_373/vecteezy_dynamic-flowing-wavy-abstract-light-line-vector-in-blue_24054189-1.jpg";

const AIDS = () => {
  return (
    <>
      <div id="aids" className=" p-4 container">
        <h1 className="text-4xl font-bold">AI and Data science</h1>
        <div className="row1 flex flex-col lg:flex-row mt-4 rounded-3xl">
          <img className=" rounded-3xl" src={aiBg} alt="" />
          <div className=" absolute p-4 text-white">
            <h1 className=" text-4xl font-bold md:mt-10">
              WORK SMARTER AND FASTER
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default AIDS;
