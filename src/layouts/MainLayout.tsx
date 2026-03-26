import Footer from "@components/UI/common/Footer"
import Header from "@components/UI/common/Header"
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div className="h-screen flex flex-col ">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainLayout
