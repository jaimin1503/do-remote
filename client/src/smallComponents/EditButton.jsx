import editLogo from "./assets/editLogo.svg";

const EditButton = ({}) => {
  return (
    <>
      <button className=" float-right m-4 p-1 border-blue-600 rounded-full border-2">
        <img src={editLogo} alt="edit" />
      </button>
    </>
  );
};
export default EditButton;
