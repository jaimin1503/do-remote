const Description = ({ formData, handleChange }) => {
  return (
    <>
      <div className="container mb-5 border rounded-2xl md:mt-10 p-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 m-4">
          <div className="info">
            <h1 className=" text-3xl font-medium">
              Describe your job in detail
            </h1>
            <p className=" mt-4 text-gray-500">
              Provide a detailed description of the job to be done. This will
              help freelancers understand your needs.
            </p>
          </div>
        </div>
        <div className="form md:w-1/2 mx-4">
          <label
            htmlFor="description"
            className="block mt-4 text-lg font-medium"
          >
            Enter a description for your job
          </label>
          <textarea
            name="description"
            className=" border-2 border-gray-200 outline-none p-2 w-full mt-2 rounded-lg"
            value={formData?.description}
            onChange={handleChange}
            rows={6}
          />
          <div className="examples">
            <h1 className=" text-lg font-medium my-2">Example descriptions </h1>
            <ul className="ml-4 list-disc">
              <li className="">
                I need a website for my business. The website should be
                responsive and user-friendly.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
