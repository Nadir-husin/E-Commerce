import { Link } from 'react-router-dom';


type THeaderIconsProps = {
    to : string ,
    title : string , 
    icon : React.ReactNode
    totalQuantity : number
    animationClass : string
}


const HeaderIcons = ({ to , title , icon , totalQuantity , animationClass} :THeaderIconsProps ) => {
  return (
    <Link to={to}>
                  <div className="text-white mx-2 relative cursor-pointer pt-2 flex justify-center gap-1">
                    {icon}
                    <p className="font-bold m-0">{title}</p>

                    {totalQuantity > 0 ? (
                      <div
                        className={`absolute w-5 h-5 text-center bg-blue-300 rounded-full -top-2 left-3 leading-5 font-bold ${animationClass}`}
                      >
                        {totalQuantity}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
        </Link>
  )
}

export default HeaderIcons
