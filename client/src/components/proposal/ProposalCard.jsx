const ProposalCard = ({ proposal }) => {
  return (
    <>
      <div className="proposal-card border-b">
        <div className=" flex justify-between items-center">
          <h1 className=" text-3xl font-medium my-4">
            {proposal?.job?.title || "Job Title"}
          </h1>
          <button className=" mx-4 py-2 px-5 text-white bg-green-500 hover:bg-green-600 rounded-full">
            Hire
          </button>
        </div>
        <div className=" mb-4 flex justify-between">
          <div>
            <h2 className=" text-2xl font-medium">
              {proposal?.freelancer?.username || "Jon Doe."}
            </h2>
            <h2 className=" text-gray-500">
              {proposal?.freelancer?.profile?.current_position ||
                "Web developer"}
            </h2>
          </div>
          <div className=" mx-4">
            <h2 className="font-medium">Delivery Time</h2>
            <h2 className=" text-sm text-gray-500">{proposal?.deliveryTime}</h2>
          </div>
        </div>
        <p className=" text-gray-600 my-4 mr-4 text-justify">
          {proposal?.coverLetter.length > 300
            ? proposal?.coverLetter.substring(0, 300) + "..."
            : proposal?.coverLetter}
        </p>
        <div className="my-4">
          <h2 className=" text-2xl font-medium">Bid Amount</h2>
          <h2 className=" text-gray-500">{proposal?.bidAmount}</h2>
        </div>
      </div>
    </>
  );
};
export default ProposalCard;
