const Title = ({ formData, handleChange }) => {
  return (
    <>
      <div className="container flex border p-4 relative mb-10 rounded-2xl md:items-center flex-col md:flex-row">
        <div className="info md:w-1/2">
          <h1 className=" text-3xl font-medium">
            Let's start with a strong title.
          </h1>
          <p className=" mt-4 text-gray-500">
            This will help freelancers understand your needs and attract the
            right candidates.
          </p>
        </div>
        <div className="form md:w-1/2 m-4">
          <label htmlFor="title" className="block mt-4 font-medium">
            Enter a title for your job
          </label>
          <input
            type="text"
            name="title"
            className=" border-2 border-gray-200 outline-none p-2 w-full mt-2 rounded-lg"
            value={formData.title}
            onChange={handleChange}
          />
          <div className="examples">
            <h1 className=" text-lg font-medium my-2">Example titles </h1>
            <ul className=" list-disc">
              <li className="">Build me a website</li>
              <li>Need a logo for my business</li>
              <li>Looking for a graphic designer</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Title;
