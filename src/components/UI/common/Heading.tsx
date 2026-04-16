import { memo } from "react"

const Heading = memo(({title} : {title : string})=>{
    return (
        <h2 className="text-2xl font-bold my-3 capitalize">{title}</h2>
    )
}
)

export default Heading