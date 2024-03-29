import { useParams } from "react-router-dom";
import ClientSignup from "../components/ClientSignup";
import FreelancerSignup from "../components/FreeLancerSignup";

export default function Signup() {
  const role = useParams().role;

  if (role === "client") {
    return (
      <div>
        <ClientSignup role={role} />
      </div>
    );
  } else {
    return (
      <div>
        <FreelancerSignup role={role} />
      </div>
    );
  }
}
