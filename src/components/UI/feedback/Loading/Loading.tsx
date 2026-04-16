import type { TLoading } from "@customTypes/shared"
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton"
import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton"
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton"
import LottieHandler from "../LottieHandler/LottieHandler"

const skeletonTypes ={
    product : ProductSkeleton,
    category :CategorySkeleton,
    cart : CartSkeleton
}

type TLoadingProps = {
    status : TLoading,
    error: string | null ,
    children : React.ReactNode
    type : keyof typeof skeletonTypes
}


function Loading({status , error , children , type} :TLoadingProps) {
    
    const SkeletonType = skeletonTypes[type]
    if (status === "pending"){
        return <SkeletonType/>
    }
    if (status === "failed"){
        return  <div className="text-red-500 my-20"><LottieHandler type="Error" message={error as string}/></div>
    }
     return <>{children}</>
}

export default Loading
