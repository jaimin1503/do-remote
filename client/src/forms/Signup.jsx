import { useParams } from "react-router-dom";
import SignupForm from "./SignupFrom";

const Signup = () => {
  const role = useParams().role;
  return (
    <div>
      <SignupForm role={role} />
    </div>
  );
};
export default Signup;
