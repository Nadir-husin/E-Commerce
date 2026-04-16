import { Link } from "react-router-dom";
import LottieHandler from "@components/UI/feedback/LottieHandler/LottieHandler";

const Error = () => {

  return (
    <div className="flex flex-col items-center mt-20">
      <LottieHandler type="NotFound" message="Page not found"/>
      <Link to="/" replace={true}>
        How about going back to safety?
      </Link>
    </div>
  );
};

export default Error;