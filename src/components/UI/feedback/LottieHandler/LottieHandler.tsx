import Lottie from "lottie-react"
import NotFound from "@assets/lottieFiles/NotFound.json"
import Empty from "@assets/lottieFiles/empty.json"
import Loading from "@assets/lottieFiles/Loading.json"
import Error from "@assets/lottieFiles/Error.json"

const LottiePages ={
    NotFound,
    Empty,
    Loading,
    Error
}
    

type LottieType = {
    type : keyof typeof LottiePages,
    message?:string

}


const LottieHandler = ({type , message}:LottieType) => {
      const lottie = LottiePages[type];
  return (
     <div className={`d-flex flex-column align-items-center`}>
      <Lottie animationData={lottie} style={{ width: "400px" }} />
      {message && <h3>{message}</h3>}
    </div>
  )
}

export default LottieHandler
