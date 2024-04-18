const Title = ({ formData, handleChange }) => {
  return (
    <>
      <div className="container flex border p-4 relative mb-10 rounded-2xl md:items- flex-col md:flex-row">
        <div className="info md:w-1/2 m-4">
          <h1 className=" text-3xl font-medium">
            Let's start with a strong title.
          </h1>
          <p className=" mt-4 text-gray-500">
            This will help freelancers understand your needs and attract the
            right candidates.
          </p>
          <p className=" mt-4 text-gray-500">
            <span className=" text-gray-700 font-medium">Tip: </span> Be
            specific with your title to attract the right freelancers.
          </p>
        </div>
        <div className="form md:w-1/2 mx-4">
          <label htmlFor="title" className="block mt-4 text-lg font-medium">
            Enter a title for your job
          </label>
          <input
            type="text"
            name="title"
            className=" border-2 border-gray-200 outline-none p-2 w-full mt-2 rounded-lg"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <div className="examples">
            <h1 className=" text-lg font-medium my-2">Example titles </h1>
            <ul className="ml-4 list-disc">
              <li className="">Build me a website</li>
              <li>Need a logo for my business</li>
              <li>Looking for a graphic designer</li>
            </ul>
          </div>
          <label htmlFor="category" className="block mt-4 text-lg font-medium">
            {" "}
            What's the category of your job?
          </label>
          <input
            type="text"
            name="category"
            className=" border-2 border-gray-200 outline-none p-2 w-full mt-2 rounded-lg"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <div className="examples">
            <h1 className=" text-lg font-medium my-2">Example categories </h1>
            <ul className="ml-4 list-disc">
              <li className="">Web Development</li>
              <li>Graphic Design</li>
              <li>Mobile Development</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Title;
