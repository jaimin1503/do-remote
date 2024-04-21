import NavLogged from "../NavLogged";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import EditButton from "../../smallComponents/EditButton";
import EditDeadline from "./proposalForms/EditDeadline";
import EditLetter from "./proposalForms/EditLetter";
import EditBid from "./proposalForms/EditBid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const EditProposal = () => {
  const [proposal, setProposal] = useState({});
  const [openDeadlineModal, setOpenDeadlineModal] = useState(false);
  const [openLetterModal, setOpenLetterModal] = useState(false);
  const [openBidModal, setOpenBidModal] = useState(false);

  const handleOpenDeadlineModal = () => setOpenDeadlineModal(true);
  const handleCloseDeadlineModal = () => setOpenDeadlineModal(false);

  const handleOpenLetterModal = () => setOpenLetterModal(true);
  const handleCloseLetterModal = () => setOpenLetterModal(false);

  const handleOpenBidModal = () => setOpenBidModal(true);
  const handleCloseBidModal = () => setOpenBidModal(false);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/proposal/getProposal/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProposal(res.data.proposal);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Modal open={openDeadlineModal} onClose={handleCloseDeadlineModal}>
        <Box>
          <EditDeadline />
        </Box>
      </Modal>
      <Modal open={openLetterModal} onClose={handleCloseLetterModal}>
        <Box>
          <EditLetter />
        </Box>
      </Modal>
      <Modal open={openBidModal} onClose={handleCloseBidModal}>
        <Box>
          <EditBid />
        </Box>
      </Modal>

      <NavLogged />
      <div className="container p-4">
        <div className=" border rounded-2xl p-4">
          <h1 className=" text-3xl font-medium text-blue-500 pb-4">
            {proposal?.job?.title}
          </h1>

          <div className=" flex items-center">
            <div>
              <h2 className="font-medium text-xl">Delivery Time</h2>
              <h2 className=" text-sm text-gray-500">
                {proposal?.deliveryTime}
              </h2>
            </div>
            <div onClick={handleOpenDeadlineModal}>
              <EditButton />
            </div>
          </div>
        </div>
        <div className=" border rounded-2xl px-4 pb-4 my-4">
          <div className=" flex items-center justify-between">
            <h2 className=" text-2xl font-medium">Cover Letter</h2>
            <div onClick={handleOpenLetterModal}>
              <EditButton />
            </div>
          </div>
          <p className=" whitespace-pre-wrap text-gray-600 my-2 mr-4 text-justify">
            {proposal?.coverLetter}
          </p>
        </div>
        <div className=" border rounded-2xl p-4 my-4">
          <div className=" flex justify-between items-center">
            <div className="mb-4">
              <h2 className=" text-xl font-medium">Bid Amount</h2>
              <h2 className=" text-gray-500">&#8377; {proposal?.bidAmount}</h2>
            </div>
            <div onClick={handleOpenBidModal}>
              <EditButton />
            </div>
          </div>
          <h2 className=" text-xl font-medium">Attachments</h2>
          <div className="flex">
            {proposal?.attachments?.map((attachment, index) => (
              <a
                key={index}
                href={attachment}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-600 hover:underline"
              >
                Attachment {index + 1}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default EditProposal;
