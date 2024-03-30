import { sendOtp } from "./SendOtp";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => sendOtp("jaiminv153@gmail.com", navigate)}>
        Click
      </button>
    </div>
  );
}
