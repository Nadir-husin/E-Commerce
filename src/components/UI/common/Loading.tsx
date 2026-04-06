import type { TLoading } from "@customTypes/shared"

type TLoadingProps = {
    status : TLoading,
    error: string | null ,
    children : React.ReactNode
}


function Loading({status , error , children } :TLoadingProps) {
    if (status === "pending"){
        return <p>Loading...</p>
    }
    if (status === "failed"){
        return <p>{error}</p>
    }
     return <>{children}</>
}

export default Loading
