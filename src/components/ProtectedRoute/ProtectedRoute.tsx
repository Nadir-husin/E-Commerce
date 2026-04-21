import { useAppSelector } from "@store/hooks"
import { Navigate } from "react-router-dom"
const ProtectedRoute = ({children} : {children : React.ReactNode}) => {
    const {accessToken} = useAppSelector(state => state.auth)
    if(!accessToken){
        return <Navigate to="/login?message=loginRequired" replace />
    }
  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute
